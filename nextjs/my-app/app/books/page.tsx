'use client';

import { useFetch } from '@/hooks/fetch-hook';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { type Book } from '../api/books/bookdata';

export default function BooksPage() {
  const { data: session } = useSession();
  console.log('🚀 ~ BooksPage ~ session:', session);

  const { data: books } = useFetch<Book[]>(
    `${process.env.NEXT_PUBLIC_URL}/api/books`
  );
  return (
    <>
      <div>{session?.user?.name} book</div>
      <ul className='w-1/2 text-center jusitify-center'>
        {books?.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/books/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
