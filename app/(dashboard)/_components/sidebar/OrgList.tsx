'use client';

import { useOrganizationList } from '@clerk/nextjs';
import { OrgItem } from './OrgItem';

export const OrgList = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) return null;

  return (
    <ul className='space-y-4'>
      {userMemberships.data.map((membership) => (
        <OrgItem
          key={membership.organization.id}
          id={membership.organization.id}
          imageUrl={membership.organization.imageUrl}
          name={membership.organization.name}
        />
      ))}
    </ul>
  );
};
