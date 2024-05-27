import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect } from 'react';
import { useDebounceValue } from 'usehooks-ts';
import qs from 'query-string';

export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [debounceValue, setValue] = useDebounceValue('', 500);

  const search = searchParams.get('search');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debounceValue) {
      params.set('search', debounceValue);
    }
    router.push(`/?${params.toString()}`);
  }, [debounceValue, router, searchParams]);
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
