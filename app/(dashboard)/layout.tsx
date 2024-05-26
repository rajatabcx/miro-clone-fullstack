import { ReactNode } from 'react';
import { Sidebar } from './_components/sidebar/Sidebar';
import { OrgSidebar } from './_components/OrgSidebar';
import { Navbar } from './_components/Navbar';

interface PageProps {
  children: ReactNode;
}

export default function Layout(props: PageProps) {
  return (
    <main className='h-full '>
      <Sidebar />
      <div className='pl-[60px] h-full'>
        <div className='flex gap-x-3 h-full'>
          <OrgSidebar />
          <div className='h-full flex-1'>
            <Navbar />
            {props.children}
          </div>
        </div>
      </div>
    </main>
  );
}
