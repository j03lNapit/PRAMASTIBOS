import { Metadata } from 'next';
import * as React from 'react';
import { FaPen, FaPlus, FaTrashAlt } from 'react-icons/fa';

import IconButton from '@/components/buttons/IconButton';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};
export default function DaftarJadwalPraktikum() {
  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
      title='Jadwal Praktikum'
    >
      <section className='bg-darkGrey-800 relative h-screen w-screen overflow-y-auto text-orange-600'>
        <div className=' pb-12 pt-28'>
          <div className='bg-darkGrey-800 container mx-auto flex w-screen flex-col gap-4 '>
            <div className='flex flex-col gap-4 rounded-3xl border border-orange-600 p-6'>
              <div className=' flex w-full flex-col gap-1'>
                <div className='flex flex-row justify-between'>
                  <h3>P1: Logika Dasar</h3>
                  <IconButton
                    icon={FaTrashAlt}
                    type='submit'
                    className='flex h-6 w-6 rounded-xl border-none  text-orange-600'
                    variant='ghost'
                  />
                </div>
                <p>Tanggal: 28 Oktober 2023</p>
              </div>

              <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1.5'>
                  <h3>Sesi</h3>

                  <div className='flex flex-row justify-between'>
                    <div className='flex w-fit flex-row gap-3'>
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
                    </div>
                    <IconButton
                      icon={FaPen}
                      type='submit'
                      className='flex h-6 w-6 rounded-xl border-none  text-orange-600'
                      variant='ghost'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-end'>
              <IconButton
                type='submit'
                icon={FaPlus}
                className='w-24 rounded-xl  border-none bg-black text-orange-600'
              >
                Simpan
              </IconButton>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
