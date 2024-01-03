import { Metadata } from 'next';
import * as React from 'react';
import { FaPlus } from 'react-icons/fa';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};
export default function Pengumuman() {
  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
      title='Buat Jadwal Praktikum'
    >
      <section className='bg-darkGrey-800 relative h-screen w-screen overflow-y-auto text-orange-600'>
        <div className=' pb-12 pt-28'>
          <div className='bg-darkGrey-800 container mx-auto w-screen rounded-3xl border border-orange-600 p-6'>
            <div className=' flex w-full flex-col gap-3'>
              <div className='flex flex-col gap-1.5'>
                <h3>Judul Modul</h3>
                <input
                  type='text'
                  name='judul-modul'
                  id='judul-modul'
                  className='w-full rounded-full border border-orange-600 bg-transparent font-bold placeholder:text-orange-600 placeholder:opacity-60 focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-600 '
                  placeholder='Masukkan judul modul...'
                />
              </div>

              <div className='flex flex-col gap-1.5'>
                <h3>Tanggal</h3>
                <input
                  type='date'
                  name='tanggal-modul'
                  id='tanggal-modul'
                  className='w-full rounded-full border border-orange-600 bg-transparent font-bold placeholder:text-orange-600 placeholder:opacity-60 focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-600 '
                />
              </div>

              <div className='flex flex-col gap-1.5'>
                <h3>Kuota persesi</h3>
                <input
                  type='number'
                  name='kuota-modul'
                  id='kuota-modul'
                  className='w-full rounded-full border border-orange-600 bg-transparent font-bold placeholder:text-orange-600 placeholder:opacity-60 focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-600 '
                  placeholder='Masukkan kuota persesi...'
                />
              </div>

              <div className='flex flex-col gap-1.5'>
                <h3>Sesi</h3>

                <div className='flex flex-row gap-3'>
                  <button
                    className='w-auto rounded-xl bg-black px-8 py-2 font-bold hover:bg-slate-600 focus:bg-slate-600'
                    type='button'
                  >
                    07:00
                  </button>
                  <button
                    className='w-auto rounded-xl bg-black px-8 py-2 font-bold hover:bg-slate-600 focus:bg-slate-600'
                    type='button'
                  >
                    14:00
                  </button>
                  <button
                    className='w-auto rounded-xl bg-black px-8 py-2 font-bold hover:bg-slate-600 focus:bg-slate-600'
                    type='button'
                  >
                    17:00
                  </button>

                  <IconButton
                    type='submit'
                    icon={FaPlus}
                    className='w-28 rounded-xl  border-none bg-black text-orange-600'
                  >
                    Simpan
                  </IconButton>
                </div>
              </div>
            </div>

            <div className='flex justify-end'>
              <Button
                type='submit'
                className='w-fit rounded-xl  border-none bg-black px-6 text-orange-600'
              >
                Simpan
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
