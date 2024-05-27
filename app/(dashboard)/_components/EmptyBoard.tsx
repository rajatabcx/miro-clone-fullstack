import { Button } from '@/components/ui/button';
import { Presentation } from 'lucide-react';
import Image from 'next/image';

export function EmptyBoard() {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image
        src='/emptyBoards.png'
        alt='Empty Search'
        height={140}
        width={140}
      />
      <h2 className='text-2xl font-semibold mt-6'>Create your first board</h2>
      <p className='text-muted-foreground mt-2 text-sm'>
        Start by creating a board for your organization
      </p>
      <Button className='mt-4' size='lg'>
        <Presentation className='h-4 w-4 mr-2' /> Create Board
      </Button>
    </div>
  );
}
