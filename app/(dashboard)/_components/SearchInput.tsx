import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounceValue } from 'usehooks-ts';
import qs from 'query-string';

export function SearchInput() {
  const router = useRouter();

  const [debounceValue, setValue] = useDebounceValue('', 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: '/',
        query: {
          search: debounceValue,
        },
      },
      {
        skipNull: true,
        skipEmptyString: true,
      }
    );
    router.push(url);
  }, [debounceValue, router]);
  return (
    <div className='w-full relative'>
      <Search className='absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground h-4 w-4' />
      <Input
        className='w-full max-w-[516px] pl-9 focus-visible:ring-transparent'
        placeholder='Search Boards'
        onChange={handleChange}
      />
    </div>
  );
}
