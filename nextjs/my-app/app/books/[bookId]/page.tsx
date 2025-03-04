import { getBook } from '@/actions/books';
import { notFound } from 'next/navigation';
import DelBook from '@/components/DelBook';
import { Button } from '@/components/ui/button';

export default function BookIdPage({
  params: { bookId },
}: {
  params: { bookId: string };
}) {
  const book = getBook(+bookId);
  if (!book) return notFound();

  // const remove = () => {};

  return (
    <div className='mx-3 space-y'>
      <div className='flex justify-between border-b-2 border-slate-200'>
        BookId: <strong>{bookId}</strong>
      </div>
      <div className='flex justify-between border-b-2 border-slate-200'>
        Book title: <strong>{book.title}</strong>
      </div>
      <div className='flex justify-between border-b-2 border-slate-200'>
        Book writer: <strong>{book.writer}</strong>
      </div>
      <div className='text-right space-x-4'>
        <DelBook id={1} />
        <Button variant={'outline'}>Edit</Button>
      </div>
    </div>
  );
}
