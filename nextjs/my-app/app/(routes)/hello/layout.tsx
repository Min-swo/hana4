import { PropsWithChildren } from 'react';

export default function HelloLayout({ children }: PropsWithChildren) {
  return (
    <div className='border p-5 w-1/2'>
      <h1 className='text-2xl'>Hello Layout</h1>
      <div className='flex flex-row justify-around'>
        <a href='/hello/morning'>Morning</a>
        <a href='/hello/afternoon'>Afternoon</a>
        <a href='/hello/evening'>Evening</a>
      </div>
      <div className='bg-purple-500 text-center'>{children}</div>
    </div>
  );
}
