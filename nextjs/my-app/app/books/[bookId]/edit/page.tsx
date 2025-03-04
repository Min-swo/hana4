import { getBook, save } from '@/actions/books';
import NotFound from '@/app/not-found';
import { Label } from '@radix-ui/react-label';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default async function BookEdit({
  params: { bookId },
}: {
  params: { bookId: string };
}) {
  async function saveBook(formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const writer = formData.get('writer') as string;
    console.log('🚀 ~ save:', title, writer);
    save(+bookId, title, writer);
    redirect(`/books/${bookId}`);
  }

  const book = getBook(+bookId);
  if (!book) return NotFound();

  const { title, writer } = book;
  return (
    <form action={saveBook}>
      <Label>Title</Label>
      <Input defaultValue={title} name='title'></Input>
      <Input defaultValue={writer} name='writer'></Input>
      <Button>Save</Button>
    </form>
  );
}
