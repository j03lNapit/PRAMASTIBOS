import NextImage from 'next/image';

import ButtonLink from '@/components/links/ButtonLink';

import { PraktikumType } from '@/app/home/page';

export default function Card1Asisten({
  praktikum_name,
  deskripsi,
  logo_praktikum,
  className,
}: PraktikumType) {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-6 text-orange-600 ${className}  z-10`}
    >
      <div className='border-1 z-10 flex h-[260px] w-[260px] border border-white'>
        <NextImage
          src={`${logo_praktikum}`}
          width={308}
          height={332}
          alt='praktikum'
          className=' z-10 h-full w-full object-cover'
        />
      </div>

      <div className={`${className} z-10 flex w-[60%] flex-col gap-2`}>
        <h2>{praktikum_name}</h2>
        <p>{deskripsi}</p>
      </div>

      <div className='z-10 flex  flex-col gap-4'>
        <ButtonLink
          href='/jadwal'
          className='w-full justify-center rounded-full bg-white px-8 py-4 font-bold text-black'
        >
          Jadwal Asisten
        </ButtonLink>
        <ButtonLink
          href='/daftar-peserta'
          className='w-full justify-center rounded-full bg-white px-8 py-4 font-bold text-black'
        >
          Daftar Peserta
        </ButtonLink>
      </div>
    </div>
  );
}
