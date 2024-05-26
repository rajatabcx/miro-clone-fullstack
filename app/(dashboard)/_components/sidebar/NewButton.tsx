'use client';

import { Hint } from '@/components/Hint';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CreateOrganization } from '@clerk/nextjs';
import { Plus } from 'lucide-react';

export function NewButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='aspect-square'>
          <Hint
            label='Create Organization'
            side='right'
            align='start'
            sideOffset={18}
          >
            <button className='bg-white/25 h-full w-full rounded-md flex items-center justify-center hover:opacity-100 transition opacity-60'>
              <Plus className='text-white' />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className='border-none p-0 w-auto'>
        <div className='z-0'>
          <CreateOrganization routing='virtual' />
        </div>
      </DialogContent>
    </Dialog>
  );
}
