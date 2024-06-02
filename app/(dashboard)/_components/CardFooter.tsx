import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import React from 'react';

interface PropType {
  isFav: boolean;
  title: string;
  author: string;
  createdAt: string;
  disabled: boolean;
  onClick: () => void;
}

export function CardFooter(props: PropType) {
  return (
    <div className='relative bg-white p-3'>
      <p className='text-[13px] truncate max-w-[calc(100%-20px)]'>
        {props.title}
      </p>
      <p className='opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate'>
        {props.author}, {props.createdAt}
      </p>
      <button
        disabled={props.disabled}
        onClick={props.onClick}
        className={cn(
          'opacity-0 group-hover:opacity-100 transition-opacity absolute top-3 right-3 text-muted-foreground hover:text-blue-600',
          props.disabled ? 'opacity-75 cursor-not-allowed' : ''
        )}
      >
        <Star
          className={cn(
            'w-4 h-4',
            props.isFav ? 'text-blue-600 fill-blue-600' : ''
          )}
        />
      </button>
    </div>
  );
}
