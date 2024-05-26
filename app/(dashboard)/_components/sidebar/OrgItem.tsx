import { cn } from '@/lib/utils';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

interface OrgItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export function OrgItem(props: OrgItemProps) {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const handleOnClick = () => {
    if (!setActive) return null;
    setActive({
      organization: props.id,
    });
  };
  return (
    <div className='aspect-square relative'>
      <Image
        fill
        src={props.imageUrl}
        onClick={handleOnClick}
        alt='name'
        className={cn(
          'rounded-md cursor-pointer opacity-60 hover:opacity-100 transition',
          organization?.id === props.id ? 'opacity-100' : ''
        )}
      />
    </div>
  );
}
