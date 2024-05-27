import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CreateOrganization } from '@clerk/nextjs';
import { Warehouse } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export function EmptyOrg() {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image src='/emptyorg.png' alt='Empty' height={300} width={300} />
      <h1 className='text-2xl font-semibold mt-6'>Welcome to Miro Clone</h1>
      <p className='text-muted-foreground text-sm mt-2'>
        Create an Organization to Continue
      </p>
      <Dialog>
        <DialogTrigger asChild className='mt-4'>
          <Button size='lg'>
            <Warehouse className='h-4 w-4 mr-2' />
            Create Organization
          </Button>
        </DialogTrigger>
        <DialogContent className='p-0 w-auto bg-transparent border-none'>
          <div className='z-0'>
            <CreateOrganization routing='virtual' />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
