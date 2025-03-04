import { PropsWithChildren } from 'react';

const TIMES = ['morning', 'afternoon', 'evening', 'night'];

export default function HiLayout({ children }: PropsWithChildren) {
  return (
    <div className='border p-5 w-1/2'>
      <h1 className='text-2xl'>Hi Layout</h1>
      <div className='flex flex-row justify-center gap-3'>
        {TIMES.map((time) => (
          <a key={time} href={`/hi/${time}`} className='capitalize'>
            {time}
          </a>
        ))}
      </div>
      <div className='bg-purple-500 text-center'>{children}</div>
    </div>
  );
}
