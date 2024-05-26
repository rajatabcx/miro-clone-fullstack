import { SignIn } from '@clerk/nextjs';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className='flex justify-center py-24'>
      <SignIn />
    </div>
  );
}
