import { Metadata } from 'next';
import Link from 'next/link';
import { getTodo, Todo } from '@/lib/getTodos';

export const dynamic = 'force-static';

export const revalidate = 5; // 단위: 초(sec)

type Params = { params: { todoId: number } };
export async function generateMetadata({
  params: { todoId },
}: Params): Promise<Metadata> {
  const todo: Todo = await getTodo(+todoId);
  return {
    title: `ToDo - ${todo.title}`,
  };
}

export default async function TodoId({
  params: { todoId },
}: {
  params: { todoId: string };
}) {
  const { title, completed } = await getTodo(+todoId);
  console.log('todos/todo', todoId);
  return (
    <>
      <div>id: {todoId}</div>
      <div>title: {title}</div>
      <div>completed: {+completed}</div>
      <Link href={'/todos'}>Go to List</Link>
    </>
  );
}
