import { useRef, useState } from 'react';
import Hello, { myHandler } from './components/Hello';
import My from './components/My';
import { useDebounce } from './hooks/timer-hooks';

function App() {
  const [friend, setFriend] = useState(0);
  const [, setTmp] = useState(0);
  const myHandleRef = useRef<myHandler>(null);
  const friendRef = useRef<HTMLInputElement>(null);

  useDebounce(
    () => {
      setFriend(+(friendRef.current?.value || 0));
    },
    1000,
    [friendRef.current?.value]
  );

  return (
    <div className='flex-col-center mt-5'>
      <div className='mt-3 w-64'>
        <input
          type='number'
          defaultValue={friend}
          ref={friendRef}
          onChange={(e) => {
            setTmp(+e.currentTarget.value);
          }}
          placeholder='friend id...'
          className='inp'
        />
      </div>
      <Hello friend={friend} ref={myHandleRef} />
      <My />
    </div>
  );
}

export default App;
