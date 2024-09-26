import { ForwardedRef, forwardRef } from 'react';
import { useSession } from '../hooks/session-context';

// eslint-disable-next-line react-refresh/only-export-components
function Profile(_: unknown, ref: ForwardedRef<HTMLButtonElement>) {
  const { session, logout } = useSession();
  return (
    <div className='flex flex-col items-center justify-center'>
      <h3>{session.loginUser?.name} Logined</h3>
      <button onClick={logout} ref={ref} className='btn btn-primary'>
        Sign Out
      </button>
    </div>
  );
}

const forwardProfile = forwardRef(Profile);
export default forwardProfile;
