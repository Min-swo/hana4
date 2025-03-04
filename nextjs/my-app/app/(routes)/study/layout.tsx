import { ReactNode } from 'react';

export default function StudyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>Study Layout!!</div>
      <div>{children}</div>
    </>
  );
}
