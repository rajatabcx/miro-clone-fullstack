import Image from 'next/image';
import Link from 'next/link';
import { Overlay } from './Overlay';
import { useAuth } from '@clerk/nextjs';
import { formatDistanceToNow } from 'date-fns';
import { CardFooter } from './CardFooter';

interface PropTypes {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFav: boolean;
}

export function Boardcard(props: PropTypes) {
  const { userId } = useAuth();

  const authorLabel = userId === props.authorId ? 'You' : props.authorName;

  const createdAtLabel = formatDistanceToNow(props.createdAt, {
    addSuffix: true,
  });

  return (
    <Link href={`/board/${props.id}`}>
      <div className='group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden'>
        <div className='relative flex-1 bg-amber-50'>
          <Image
            src={props.imageUrl}
            alt={props.title}
            fill
            className='object-contain p-4'
          />
          <Overlay />
        </div>
        <CardFooter
          author={authorLabel}
          createdAt={createdAtLabel}
          isFav={false}
          onClick={() => {}}
          title={props.title}
          key={props.id}
        />
      </div>
    </Link>
  );
}
