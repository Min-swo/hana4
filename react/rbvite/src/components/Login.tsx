import { FormEvent, forwardRef, useImperativeHandle, useRef } from 'react';
import Button from './atoms/Button';
import LabelInput from './molecules/LabelInput';
import { useSession } from '../hooks/session-context';
import { useNavigate } from 'react-router-dom';

export type LoginHandler = {
  focus: (prop: string) => void;
};

export default forwardRef(function Login() {
  const { login, loginRef } = useSession();
  const navigate = useNavigate();

  // const { plusCount } = useCounter();

  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handler: LoginHandler = {
    focus(prop) {
      if (prop === 'id') idRef.current?.focus();
      else if (prop === 'name') nameRef.current?.focus();
    },
  };
  useImperativeHandle(loginRef, () => handler);

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = idRef.current?.value ?? 0;
    const name = nameRef.current?.value ?? '';
    login(+id, name);
    navigate('/my');
  };

  // useEffect(() => {
  //   console.log(111);
  //   plusCount();
  //   return minusCount;
  // }, [plusCount, minusCount]);

  // console.log('*****');
  // useInterval(plusCount, 1500);
  // const f = () => {
  //   console.log('once?');
  //   nameRef.current?.focus();
  // };

  // useTimeout(f, 1000);

  // const signIn = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const eles = e.currentTarget.elements;
  //   const { id, name } = eles as typeof eles & {
  //     id: HTMLInputElement;
  //     name: HTMLInputElement;
  //   };
  //   // console.log('$$$', id, name);
  //   if (!id.value || !name.value) {
  //     alert('Input the id & name!!');
  //     id.focus();
  //     return;
  //   }

  //   login(+id.value, name.value);
  // };

  // const changeName = (e: ChangeEvent<HTMLInputElement>) => {
  //   setName(e.currentTarget.value);
  // };

  // const { clear } = useInterval(() => console.log('X'), 1000);
  // const { reset } = useTimeout(
  //   (name) => console.log(`Hello, ${name}!!!`),
  //   3000,
  //   'Hong'
  // );

  return (
    <>
      <form onSubmit={signIn} className='p-4 text-xs'>
        <LabelInput label='ID' type='number' ref={idRef} />

        <LabelInput label='Name' type='text' ref={nameRef} />

        <Button variant='btn-success' classNames='float-end mt-3'>
          Sign In
        </Button>
      </form>
      {/* <Button onClick={reset}>Reset Timeout</Button> */}
      {/* <Button onClick={clear}>Clear Interval</Button> */}
    </>
  );
});
