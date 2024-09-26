import { FormEvent, useRef } from 'react';
import Button from './atoms/Button.tsx';
import Login from './Login.tsx';
import Profile from './Profile.tsx';
import { FaPlus } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaRegSave } from 'react-icons/fa';
import { useSession } from '../hooks/session-context.tsx';
import Item from './molecules/Item.tsx';
import useToggle from '../hooks/toggle.ts';

export default function My() {
  const { session, reload, setReload, loginRef, login, addCartItem } =
    useSession();

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const logoutButtonRef = useRef<HTMLButtonElement>(null);

  const [add, toggleAdd] = useToggle(false);

  // const [add, setAdd] = useState(false);
  // const toggleAdd = () => setAdd((prev) => !prev);

  const saveItems = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const price = priceRef.current?.value;
    if (!name || !price) {
      alert('Input the id & name & price!!');
      return;
    }

    addCartItem(name, +price);

    nameRef.current.value = '';
    priceRef.current.value = '';
  };

  const AddingInp = () => (
    <form onSubmit={saveItems}>
      <div className='flex h-1/2 w-auto flex-row items-center justify-between p-1'>
        <div className='flex flex-row'>
          <input
            type='text'
            placeholder='Name...'
            className='mx-2 w-2/5 rounded border p-1 text-xs'
            ref={nameRef}
          />
          <input
            type='number'
            placeholder='Price...'
            className='w-2/5 rounded border p-1 text-xs'
            ref={priceRef}
          />
        </div>
        <div className='flex flex-row justify-end'>
          <Button type='submit' classNames='text-sm btn-primary mx-1'>
            <FaRegSave />
          </Button>
        </div>
      </div>
    </form>
  );

  const CartList = () =>
    session.cart.map(({ id, name, price }) => {
      return (
        <li
          key={id}
          className='flex h-auto flex-col justify-between hover:bg-gray-50'
        >
          <Item id={id} name={name} price={price} />
        </li>
      );
    });

  const EmptyCart = () => (
    <div className='text-center text-xs'>장바구니가 비었습니다.</div>
  );

  // const SAMPLE_URL = '/data/sample.json';
  // const data = useFetch<Session>(SAMPLE_URL, true, );
  // console.log(data);

  return (
    <>
      {session.loginUser ? (
        <div className='flex w-1/2 flex-col items-center justify-center border p-1'>
          <Profile ref={logoutButtonRef} />
          <Button
            onClick={() => logoutButtonRef.current?.click()}
            classNames='m-2'
          >
            MySignOut
          </Button>
        </div>
      ) : (
        <Login login={login} ref={loginRef} />
      )}

      <ul className='my-3 w-1/2 border p-3'>
        {session.cart?.length ? CartList() : EmptyCart()}

        <div className='m-1 flex flex-row items-center justify-between'>
          <div></div>
          {add && AddingInp()}
          <button onClick={toggleAdd} className='btn btn-success mx-1 p-1'>
            {add ? <FaTimes /> : <FaPlus />}
          </button>
        </div>
      </ul>
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
