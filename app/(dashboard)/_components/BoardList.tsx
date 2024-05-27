'use client';

import { EmptyBoard } from './EmptyBoard';
import { EmptySearch } from './EmptySearch';

interface BoardListProps {
  orgId: string;
  search?: string;
}

export default function BoardList(props: BoardListProps) {
  const data = [];

  if (!data?.length && props.search) return <EmptySearch />;

  if (!data.length) return <EmptyBoard />;

  return <h1>All The Data</h1>;
}
