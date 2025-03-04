export const BaseURL = 'https://jsonplaceholder.typicode.com/';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function getTodos(userId: number = 1) {
  const data = await fetch(`${BaseURL}/todos?userId=${userId}`, {
    cache: 'force-cache',
  }).then((res) => res.json());

  return data as Array<Todo>;
}

export async function getTodo(todoId: number) {
  const date = await fetch(`${BaseURL}/${todoId}`, {
    cache: 'force-cache',
  }).then((res) => res.json());

  return date as Todo;
}
