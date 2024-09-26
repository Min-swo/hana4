import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import Button from '../atoms/Button';
import { FaPen, FaRegSave, FaTimes } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { useSession } from '../../hooks/session-context';

type Props = {
  id: number;
  name: string;
  price: number;
};

export default function Item({ id, name, price }: Props) {
  const { removeCartItem, updateCartItem } = useSession();

  const [edit, setEdit] = useState(false);
  const [dirty, setDirty] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const changeName = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    if (e.target.value !== name) {
      setDirty(true);
    } else {
      setDirty(false);
    }

    // setItem({ ...item, name: e.target.value });
  };

  const changePrice = (e: ChangeEvent<HTMLInputElement>, price: number) => {
    if (+e.target.value !== price) {
      setDirty(true);
    } else {
      setDirty(false);
    }

    // setItem({ ...item, price: +e.target.value });
  };

  const toggleEdit = () => {
    // ToDo: name & price 원래 값으로 setting
    // setItem({ id, name, price });
    setEdit(!edit);
    setDirty(false);
  };

  const updateItems = (e: FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const price = priceRef.current?.value;

    if (!name || !price) {
      alert('Input the id & name & price!!');
      return;
    }

    setEdit(false);
    setDirty(false);

    updateCartItem(id, name, +price);
  };

  const EditingInp = (id: number, name: string, price: number) => (
    <form onSubmit={(e) => updateItems(e, id)}>
      <div className='flex h-1/2 w-auto flex-row items-center justify-between p-1'>
        <div className='flex w-3/4 flex-row'>
          <input
            type='text'
            placeholder='Name...'
            defaultValue={name}
            onChange={(e) => {
              changeName(e, name);
            }}
            ref={nameRef}
            className='mx-2 w-1/2 rounded border p-1 text-xs'
          />
          <input
            type='number'
            placeholder='Price...'
            defaultValue={price}
            onChange={(e) => {
              changePrice(e, price);
            }}
            ref={priceRef}
            className='w-1/2 rounded border p-1 text-xs'
          />
        </div>
        {dirty ? (
          <div className='flex flex-row justify-end'>
            <Button type='submit' classNames='text-sm btn-primary mx-1'>
              <FaRegSave />
            </Button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </form>
  );

  return (
    <>
      <div className='m-1 flex flex-row justify-between text-xs'>
        <div className='flex w-1/2 flex-row items-center justify-around'>
          <div className='font-semibold text-gray-300'>{id}. </div>
          <div className='font-semibold'>{name}</div>
          <div className='text-xs'>({price.toLocaleString()}원)</div>
        </div>
        <div className='flex flex-row'>
          <Button
            classNames='btn-primary mx-1 h-auto w-auto text-xs'
            onClick={toggleEdit}
          >
            {edit ? <FaTimes /> : <FaPen />}
          </Button>

          <Button
            classNames='btn-danger mx-1 h-auto w-auto text-xs'
            onClick={() => {
              if (confirm('Are u sure?')) {
                removeCartItem(id);
              }
            }}
          >
            <FaRegTrashCan />
          </Button>
        </div>
      </div>
      {edit && EditingInp(id, name, price)}
    </>
  );
}
