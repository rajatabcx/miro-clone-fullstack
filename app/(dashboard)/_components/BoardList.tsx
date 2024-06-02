'use client';

import { useQuery } from 'convex/react';
import { EmptyBoard } from './EmptyBoard';
import { EmptySearch } from './EmptySearch';
import { api } from '@/convex/_generated/api';
import Image from 'next/image';
import { Boardcard } from './Boardcard';
import { PlusCircle } from 'lucide-react';
import { NewBoardCard } from './NewBoardCard';

interface BoardListProps {
  orgId: string;
  search?: string;
}

export default function BoardList(props: BoardListProps) {
  const data = useQuery(api.boards.get, { orgId: props.orgId });

  if (data === undefined) {
    return (
      <div className='h-full flex flex-col items-center justify-center'>
        <div className='animate-bounce'>
          <Image
            src='/loadingBoards.png'
            alt='Loading Boards'
            height={250}
            width={250}
          />
        </div>
        <h2 className='text-2xl font-semibold -mt-12'>Loading your boards</h2>
      </div>
    );
  }

  if (!data?.length && props.search) return <EmptySearch />;

  if (!data?.length) return <EmptyBoard />;

  return (
    <div>
      <h1 className='text-3xl'>Team Boards</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:md:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10'>
        <NewBoardCard orgId={props.orgId} />
        {data.map((board) => (
          <Boardcard
            key={board._id}
            id={board._id}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            imageUrl={board.imageUrl}
            isFav={false}
            orgId={board.orgId}
            title={board.title}
          />
        ))}
      </div>
    </div>
  );
}
