'use client';

import { EmptyFavs } from './EmptyFavs';
import { EmptySearch } from './EmptySearch';

interface BoardListProps {
  orgId: string;
  search?: string;
}

export default function FavBoardList(props: BoardListProps) {
  const data = [];

  if (!data?.length && props.search) return <EmptySearch />;

  if (!data.length) return <EmptyFavs />;

  return (
    <>
      <h1 className='text-3xl'>Team Boards</h1>
    </>
  );
}
