'use client';

import * as React from 'react';

import api from '@/lib/api';
import { getAccessToken } from '@/lib/cookies';

import MainLayout from '@/layouts/MainLayout';

type DaftarKelompok = {
  kelompok_id: number;
  nama: string;
  nrp: string;
  nama_kelompok: string;
};

export default function Layout({ params }: { params: { id: string } }) {
  const token = getAccessToken();
  const [dataDaftarKelompok, setDataDaftarKelompok] =
    React.useState<DaftarKelompok[]>();

  const LoadPraktikum = React.useCallback(async () => {
    const res = await api.get<DaftarKelompok[]>(
      `/praktikum/jadwal-praktikum/${params.id}/kelompok`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    if (!res) {
      return;
    }
    return setDataDaftarKelompok(res.data);
  }, [params.id, token]);

  React.useEffect(() => {
    LoadPraktikum();
  }, [LoadPraktikum]);

  // eslint-disable-next-line no-console
  console.log(dataDaftarKelompok);

  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
      title='Daftar Kelompok'
    >
      <section className='bg-darkGrey-800 relative flex h-full w-screen'>
        <div className='mx-16 w-screen pt-28'>
          <table className='mb-10 mt-6 w-full table-auto text-orange-600'>
            <tbody>
              <tr className='border'>
                <td className='border text-center' rowSpan={6000}>
                  <h2> Rangkaian Digital</h2>
                </td>

                <td className='border pl-4' rowSpan={7}>
                  <h4>P1: Lorem Ipsum Lorem Ipsum</h4>
                </td>
                <td className='border pl-4' rowSpan={7}>
                  <h4>Kelompok 1</h4>
                </td>
              </tr>
              <tr className='border'>
                <td className='border pl-4'>5024XXXXXX</td>
                <td className='border pl-4'>Lorem Ipsum Lorem Ipsum Lorem</td>
              </tr>
              <tr className='border'>
                <td className='border pl-4'>5024XXXXXX</td>
                <td className='border pl-4'>Lorem Ipsum Lorem Ipsum Lorem</td>
              </tr>
              <tr className='border'>
                <td className='border pl-4'>5024XXXXXX</td>
                <td className='border pl-4'>Lorem Ipsum Lorem Ipsum Lorem</td>
              </tr>
              <tr className='border'>
                <td className='border pl-4'>5024XXXXXX</td>
                <td className='border pl-4'>Lorem Ipsum Lorem Ipsum Lorem</td>
              </tr>
              <tr className='border'>
                <td className='border pl-4'>5024XXXXXX</td>
                <td className='border pl-4'>Lorem Ipsum Lorem Ipsum Lorem</td>
              </tr>
              <tr className='border'>
                <td className='border pl-4'>5024XXXXXX</td>
                <td className='border pl-4'>Lorem Ipsum Lorem Ipsum Lorem</td>
              </tr>

              <CardKelompok />
              <CardKelompok />
              <CardKelompok />
              <CardKelompok />
            </tbody>
          </table>
        </div>
      </section>
    </MainLayout>
  );
}

function CardKelompok() {
  return (
    <>
      <tr className='border '>
        <td className='border' rowSpan={6}>
          <h4 className='pl-4'>P1: Lorem Ipsum Lorem Ipsum</h4>
        </td>
        <td className='border' rowSpan={6}>
          <h4 className='pl-4'>Kelompok 1</h4>
        </td>
        <td className='border pl-4'>5024XXXXXX</td>
        <td className='border pl-4'>Lorem Ipsum Lorem Ipsum Lorem</td>
      </tr>
      <tr className='border'>
        <td className='border pl-4'>5024XXXXXX</td>
        <td className='border pl-4'>Lorem Ipsum Lorem Ipsum Lorem</td>
      </tr>
      <tr className='border'>
        <td className='border pl-4'>5024XXXXXX</td>
        <td className='border pl-4'>Lorem Ipsum Lorem Ipsum Lorem</td>
      </tr>
      <tr className='border'>
        <td className='border pl-4'>5024XXXXXX</td>
        <td className='border pl-4'>Lorem Ipsum Lorem Ipsum Lorem</td>
      </tr>
      <tr className='border'>
        <td className='border pl-4'>5024XXXXXX</td>
        <td className='border pl-4'>Lorem Ipsum Lorem Ipsum Lorem</td>
      </tr>
      <tr className='border'>
        <td className='border pl-4'>5024XXXXXX</td>
        <td className='border pl-4'>Lorem Ipsum Lorem Ipsum Lorem</td>
      </tr>
    </>
  );
}
