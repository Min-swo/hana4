import { useRef } from 'react';
import Hello, { myHandler } from './components/Hello';
import My from './components/My';
import { useDebounce } from './hooks/timer-hooks';
import useMyState from './libs/myState';
import Nav from './Nav';
import { Route, Routes, useLocation } from 'react-router-dom';
import { NotFound } from './NotFound';
import Home from './Home';
import Items from './components/Items';
import Login from './components/Login';
import ItemDetail from './components/ItemDetail';
import ItemLayout from './components/ItemLayout';

function App() {
  const [friend, setFriend] = useMyState(0);
  const [, setTmp] = useMyState(0);
  const friendRef = useRef<HTMLInputElement>(null);
  const myHandleRef = useRef<myHandler>(null);

  useDebounce(
    () => {
      setFriend(+(friendRef.current?.value || 0));
      // setFriend((prev) => prev + 1);
    },
    1000,
    [friendRef.current?.value]
  );

  useLocation();
  const { pathname } = location;
  // console.log(pathname);

  return (
    <div className='flex-col-center'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my' element={<My />} />
        {/* <Route path='/items' element={<Items />} /> */}
        {/* <Route path='/items/:id' element={<ItemDetail />} /> */}
        <Route path='/items' element={<ItemLayout />}>
          <Route index element={<Items />} />
          <Route path=':id' element={<ItemDetail />} />
        </Route>
        <Route
          path='/hello'
          element={<Hello friend={friend} ref={myHandleRef} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>

      {pathname.startsWith('/hello') && (
        <div className='flex-row-center m-3 w-1/2 gap-1 text-xs'>
          <div className='w-1/3'>Friend ID:</div>
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
      )}
    </div>
  );
}

export default App;
