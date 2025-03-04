import { PropsWithChildren, Suspense } from 'react';

export default function TodosLayout({ children }: PropsWithChildren) {
  return (
    <div className='border p-5'>
      <h1 className='text-2xl'>Todos Layout</h1>
      <div className='bg-purple-500'>
        <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
      </div>
    </div>
  );
}
