import { useRef } from 'react';
import { useSession } from '../hooks/session-context.tsx';
import Button from './atoms/Button.tsx';
import Login from './Login.tsx';
import Profile from './Profile.tsx';
import clsx from 'clsx';

export default function My() {
  const { session, reload, setReload } = useSession();
  const logoutButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div
        className={clsx(
          !session.loginUser && 'w-1/2 border-2 border-green-600 p-2'
        )}
      >
        {session.loginUser ? (
          <div className='flex flex-col items-center justify-center p-1'>
            <Profile ref={logoutButtonRef} />
            <Button
              onClick={() => logoutButtonRef.current?.click()}
              classNames='m-2'
            >
              MySignOut
            </Button>
          </div>
        ) : (
          <Login />
        )}
      </div>

      <Button
        onClick={() => {
          setReload(reload + 1);
        }}
      >
        Reload
      </Button>
    </>
  );
}
