import { api } from '@/convex/_generated/api';
import { useApiMutation } from '@/hooks/useApiMutation';
import { LoaderCircle, PlusCircle } from 'lucide-react';
import { toast } from 'sonner';

interface PropTypes {
  orgId: string;
}

export function NewBoardCard(props: PropTypes) {
  const { mutate, pending } = useApiMutation(api.board.create);

  const handleCreateBoard = async () => {
    try {
      await mutate({
        orgId: props.orgId,
        title: 'Untitled',
      });
      toast.success('New board created successfully');
    } catch (err) {
      toast.success('Something went wrong');
    }
  };
  return (
    <button disabled={pending} onClick={handleCreateBoard}>
      <div className='bg-amber-50 aspect-[100/127] border rounded-lg overflow-hidden flex flex-col justify-center items-center'>
        {pending ? (
          <LoaderCircle className='animate-spin w-10 h-10' />
        ) : (
          <PlusCircle className='w-10 h-10 text-muted-foreground' />
        )}
        <h2 className='text-muted-foreground text-[15px] mt-2 font-semibold'>
          {pending ? 'Creating Board' : 'Create Board'}
        </h2>
      </div>
    </button>
  );
}
