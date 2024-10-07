import { FaPlus, FaRegSave, FaSearch, FaTimes } from 'react-icons/fa';
import { useSession } from '../hooks/session-context';
import { FormEvent, useMemo, useRef, useState } from 'react';
import useToggle from '../hooks/toggle';
import Button from './atoms/Button';
import { useDebounce } from '../hooks/timer-hooks';
import Item from './molecules/Item';

export default function Items() {
  const { session, addCartItem } = useSession();
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
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
      <div className='my-3 flex flex-col items-center justify-center border p-1'>
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
      <div className='flex flex-row justify-between text-xs'>
        <div>
          할인 전 금액: {totalOriginalPrice.toFixed(0)?.toLocaleString()}원
        </div>
        <div>할인 후 금액: {totalSalePrice.toFixed(0)?.toLocaleString()}원</div>
        <div>할인액: {totalSale.toFixed(0)?.toLocaleString()}원</div>
      </div>
    </>
  );
}
