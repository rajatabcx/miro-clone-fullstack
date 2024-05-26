'use client';
import {
  OrganizationSwitcher,
  useOrganization,
  UserButton,
} from '@clerk/nextjs';
import { SearchInput } from './SearchInput';
import { InviteButton } from './InviteButton';

export function Navbar() {
  const { organization } = useOrganization();
  return (
    <div className='flex items-center p-5 gap-x-4'>
      <div className='hidden lg:flex lg:flex-1'>
        <SearchInput />
      </div>
      <div className='lg:hidden flex-1 block'>
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '376px',
              },
              organizationSwitcherTrigger: {
                padding: '6px',
                width: '100%',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                justifyContent: 'space-between',
                backgroundColor: 'white',
              },
            },
          }}
        />
      </div>
      {organization ? <InviteButton /> : null}
      <UserButton />
    </div>
  );
}
