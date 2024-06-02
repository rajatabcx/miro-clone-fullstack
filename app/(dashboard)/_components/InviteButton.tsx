import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { OrganizationProfile } from '@clerk/nextjs';
import { UserPlus2 } from 'lucide-react';
import React from 'react';

export function InviteButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <UserPlus2 className='w-4 h-4 mr-2' /> Invite Member
        </Button>
      </DialogTrigger>
      <DialogContent className='border-none p-0 bg-transparent w-auto max-w-[880px]'>
        <div className='z-0'>
          <OrganizationProfile routing='virtual' />
        </div>
      </DialogContent>
    </Dialog>
  );
}
