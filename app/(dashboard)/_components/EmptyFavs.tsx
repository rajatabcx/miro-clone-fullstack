import Image from 'next/image';

export function EmptyFavs() {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image src='/emptyFavs.png' alt='Empty Search' height={140} width={140} />
      <h2 className='text-2xl font-semibold mt-6'>No favorite boards</h2>
      <p className='text-muted-foreground mt-2 text-sm'>
        Try adding a board to favorites
      </p>
    </div>
  );
}
