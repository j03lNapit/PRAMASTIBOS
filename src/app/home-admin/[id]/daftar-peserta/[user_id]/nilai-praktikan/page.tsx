'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import api from '@/lib/api';
import { getAccessToken } from '@/lib/cookies';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import Loading from '@/components/Loading';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';

import MainLayout from '@/layouts/MainLayout';

import { ApiError, ApiReturn } from '@/types/api';

// eslint-disable-next-line unused-imports/no-unused-vars
type UserOnly = {
  nama: string;
  nrp: string;
};

type ModulProps = {
  id_modul: string;
  nama_modul: string;
  nilai_modul: number;
};

type UserNilai = {
  user_id: number;
  peserta: UserOnly;
  modul: ModulProps[];
};

type NilaiModul = {
  id_modul: string;
  nilai_modul: number;
};

export default withAuth(NilaiPraktikan, ['admin']);
function NilaiPraktikan({
  params,
}: {
  params: { id: string; user_id: string };
}) {
  const token = getAccessToken();
  const [queryUser, setQueryUser] = React.useState<UserNilai>();

  const [loading, setLoading] = React.useState(true);

  const LoadDataNilai = React.useCallback(async () => {
    const res = await api.get<ApiReturn<UserNilai>>(
      `/nilai/${params.id}/peserta/${params.user_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (!res.data.data) {
      return;
    }
    setLoading(false);
    return setQueryUser(res.data.data);
  }, [params.id, params.user_id, token]);

  React.useEffect(() => {
    LoadDataNilai();
  }, [LoadDataNilai]);

  const methods = useForm<NilaiModul>({
    mode: 'onTouched',
  });

  const { register, handleSubmit } = methods;
  const router = useRouter();

  const { mutate: RegistMutation, isPending } = useMutation<
    void,
    AxiosError<ApiError>,
    NilaiModul
  >({
    mutationFn: async (data) => {
      const res = await api.put(
        `/nilai/${params.id}/peserta/${params.user_id}?semester&tahun_akademik`,
        data,
        {
          toastify: true,
        }
      );

      if (res.data) {
        showToast('Berhasil nilai modul!', SUCCESS_TOAST);
      } else if (!res.data) {
        showToast('Gagal nilai modul!', DANGER_TOAST);
        throw new Error('Gagal nilai modul!');
      } else {
        showToast('Gagal nilai modul!', DANGER_TOAST);
        throw new Error('Gagal nilai modul!');
      }
      router.refresh();
    },
    onSuccess: () => {
      router.refresh();
    },
  });

  const onSubmit: SubmitHandler<NilaiModul> = (data) =>
    RegistMutation({
      id_modul: data.id_modul,
      nilai_modul: data.nilai_modul,
    });

  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
      title='Nilai Praktikan'
    >
      <section className='bg-darkGrey-800 relative h-screen w-screen overflow-y-auto text-orange-600'>
        <div className=' pb-12 pt-28'>
          <div className='bg-darkGrey-800 container mx-auto flex w-screen flex-col gap-6 rounded-3xl border border-orange-600 p-6'>
            <div className=' flex w-full flex-col gap-1.5'>
              <h3>Nama</h3>
              <div className='w-full rounded-full border border-orange-600 px-4 py-2'>
                {queryUser?.peserta?.nama}
              </div>
            </div>

            <div className=' flex w-full flex-col gap-1.5'>
              <h3>NRP</h3>
              <div className='w-full rounded-full border border-orange-600 px-4 py-2'>
                {queryUser?.peserta?.nrp}
              </div>
            </div>
            <FormProvider {...methods}>
              <form
                action='#'
                onSubmit={handleSubmit(onSubmit)}
                className='mt-2 flex flex-col gap-2'
              >
                <div className='mt-2 flex flex-col gap-2'>
                  <h3>Nilai</h3>
                  {loading && <Loading />}
                  {!loading && queryUser?.modul.length === 0 ? (
                    <p className='mt-12 flex w-full items-center justify-center font-semibold text-orange-600'>
                      Tidak ada modul yang diambil
                    </p>
                  ) : (
                    queryUser?.modul.map((e) => (
                      <div
                        key={e.id_modul}
                        className=' flex w-full flex-col gap-1.5'
                      >
                        <h3>{e.nama_modul}</h3>
                        {e.nilai_modul !== null ? (
                          <div className='w-full rounded-full border border-orange-600 px-4 py-2'>
                            {e.nilai_modul}
                          </div>
                        ) : (
                          <input
                            {...register(`nilai_modul`)}
                            type='number'
                            name={e.nilai_modul}
                            id={e.nilai_modul}
                            className='w-full rounded-full border border-orange-600 bg-transparent font-bold placeholder:text-orange-600 placeholder:opacity-60 focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-600 '
                            placeholder='Masukkan nilai ...'
                          />
                        )}
                      </div>
                    ))
                  )}
                </div>

                <div className='flex justify-end'>
                  <Button
                    isLoading={isPending}
                    type='submit'
                    className='w-fit rounded-xl  border-none bg-black px-6 text-orange-600'
                  >
                    Kirim
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
