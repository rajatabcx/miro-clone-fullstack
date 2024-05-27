import Image from 'next/image';
import React from 'react';

export function EmptySearch() {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image
        src='/emptySearch.png'
        alt='Empty Search'
        height={140}
        width={140}
      />
      <h2 className='text-2xl font-semibold mt-6'>No Results Found</h2>
      <p className='text-muted-foreground mt-2 text-sm'>
        Try searching for something else
      </p>
    </div>
  );
}
