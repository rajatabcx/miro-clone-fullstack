'use client';
import { useOrganization } from '@clerk/nextjs';
import { EmptyOrg } from './_components/EmptyOrg';
import BoardList from './_components/BoardList';
import FavBoardList from './_components/FavBoardList';

interface DashboardProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

export default function Home(props: DashboardProps) {
  const { organization } = useOrganization();
  return (
    <div className='h-[calc(100%-80px)] flex-1 p-6'>
      {organization ? (
        props.searchParams.favorites ? (
          <FavBoardList
            orgId={organization.id}
            search={props.searchParams.search}
          />
        ) : (
          <BoardList
            orgId={organization.id}
            search={props.searchParams.search}
          />
        )
      ) : (
        <EmptyOrg />
      )}
    </div>
  );
}
