'use client';
import { Button } from '@/components/ui/button';
import { Presentation } from 'lucide-react';
import Image from 'next/image';
import { api } from '@/convex/_generated/api';
import { useOrganization } from '@clerk/nextjs';
import { useApiMutation } from '@/hooks/useApiMutation';
import { toast } from 'sonner';

export function EmptyBoard() {
  const { mutate, pending } = useApiMutation(api.board.create);
  const { organization } = useOrganization();

  const handleCreateBoard = async () => {
    try {
      if (!organization) return;
      await mutate({
        orgId: organization?.id,
        title: 'Untitled',
      });
      toast.success('New board created successfully');
    } catch (err) {
      toast.success('Something went wrong');
    }
  };

  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image
        src='/emptyBoards.png'
        alt='Empty Search'
        height={140}
        width={140}
      />
      <h2 className='text-2xl font-semibold mt-6'>Create your first board</h2>
      <p className='text-muted-foreground mt-2 text-sm'>
        Start by creating a board for your organization
      </p>
      <Button
        disabled={pending}
        className='mt-4'
        size='lg'
        onClick={handleCreateBoard}
      >
        <Presentation className='h-4 w-4 mr-2' /> Create Board
      </Button>
    </div>
  );
}
