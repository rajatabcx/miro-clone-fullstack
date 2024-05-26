import Image from 'next/image';
import React from 'react';

export function Loading() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Image
        src='/logo.svg'
        width={120}
        height={1200}
        alt='Logo'
        className='animate-pulse duration-700'
      />
    </div>
  );
}
