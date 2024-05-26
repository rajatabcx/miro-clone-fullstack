import { NewButton } from './NewButton';
import { OrgList } from './OrgList';

export function Sidebar() {
  return (
    <aside className='fixed z-10 bg-blue-950 w-[60px] h-full flex p-3 flex-col gap-y-4 text-white font-semibold'>
      <OrgList />
      <NewButton />
    </aside>
  );
}
