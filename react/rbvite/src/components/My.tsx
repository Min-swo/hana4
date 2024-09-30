import { FormEvent, useMemo, useRef, useState } from 'react';
import Button from './atoms/Button.tsx';
import Login from './Login.tsx';
import Profile from './Profile.tsx';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaRegSave } from 'react-icons/fa';
import { useSession } from '../hooks/session-context.tsx';
import Item from './molecules/Item.tsx';
import useToggle from '../hooks/toggle.ts';
import { useDebounce } from '../hooks/timer-hooks.ts';

export default function My() {
  const { session, reload, setReload, loginRef, login, addCartItem } =
    useSession();

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const logoutButtonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  // const searchRef2 = useRef<HTMLInputElement>(null);

  const [add, toggleAdd] = useToggle(false);

  const [, setTmp] = useState('');
  const [search, setSearch] = useState('');

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
    session.cart.map(({ id, name, price, sale }) => {
      return (
        <li
          key={id}
          className='flex h-auto flex-col justify-between hover:bg-gray-50'
        >
          <Item id={id} name={name} price={price} sale={sale} search={search} />
        </li>
      );
    });

  const EmptyCart = () => (
    <div className='text-center text-xs'>장바구니가 비었습니다.</div>
  );

  const totalOriginalPrice = useMemo(() => {
    // console.log('UseMemo - totalPrice!!!');
    return session.cart.reduce((acc, item) => acc + item.price, 0);
  }, [session.cart]);

  const totalSalePrice = useMemo(() => {
    // console.log('UseMemo - totalPrice!!!');
    return session.cart.reduce(
      (acc, item) => acc + item.price * (1 - item.sale),
      0
    );
  }, [session.cart]);

  const totalSale = useMemo(() => {
    // console.log('UseMemo - totalSale!!!');
    return session.cart.reduce((acc, item) => acc + item.price * item.sale, 0);
  }, [session.cart]);

  // console.log(searchRef.current?.value);
  // setLoad(true);
  useDebounce(
    () => {
      setSearch(searchRef.current?.value || '');
    },
    500,
    [searchRef.current?.value]
  );

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

      <div className='my-3 flex w-1/2 flex-col items-center justify-center border p-1'>
        <div className='flex-row-center w-full gap-2 p-1'>
          <div>
            <FaSearch />
          </div>
          <input
            type='text'
            ref={searchRef}
            placeholder='Search...'
            className='m-1 h-1/3 w-full rounded-sm border p-1 text-xs'
            onChange={(e) => {
              setTmp(e.currentTarget.value);
              // if (searchRef2.current)
              //   searchRef2.current.value = e.currentTarget.value;
            }}
          />
          {/* <input
            type='text'
            ref={searchRef2}
            placeholder='Search...'
            className='m-1 w-full rounded-sm border p-1'
          /> */}
        </div>
        <ul className='flex w-full flex-col'>
          {session.cart?.length ? CartList() : EmptyCart()}

          <div className='m-1 flex flex-row items-center justify-between'>
            <div></div>
            {add && AddingInp()}
            <button onClick={toggleAdd} className='btn btn-success mx-1 p-1'>
              {add ? <FaTimes /> : <FaPlus />}
            </button>
          </div>
        </ul>
      </div>
      <div className='flex w-1/2 flex-row justify-between'>
        <div>
          totalOriginalPrice: {totalOriginalPrice.toFixed(0).toLocaleString()}원
        </div>
        <div>
          totalSalePrice: {totalSalePrice.toFixed(0).toLocaleString()}원
        </div>
        <div>totalSale : {totalSale.toFixed(0).toLocaleString()}원</div>
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
