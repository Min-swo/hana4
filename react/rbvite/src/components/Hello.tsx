import {
  ForwardedRef,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useState,
} from 'react';
import { useCounter } from '../hooks/counter-context';
import { useSession } from '../hooks/session-context';
import { useFetch } from '../hooks/fetch-hooks';
import { FaSpinner } from 'react-icons/fa';

type TitleProps = {
  text: string;
  name: string;
};

const Title = ({ text, name }: TitleProps) => {
  // console.log('Titttttttttttttt!!');
  return (
    <h1 className='text-3xl'>
      {text} {name}
    </h1>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  // console.log('bodddddddd!!!');
  return (
    <div className='red' style={{ color: 'blue' }}>
      {children}
    </div>
  );
};

// function useState<S>(initValueOrFn) {
//   const state = {
//     _state: initValueOrFn,
//     get state() {
//       return this._state;
//     },
//     setState(x: S) {
//       this._state = x;
//       vdom.trigger(this);
//     }
//   }

//   return [state.state, state.setState];
// }

type Props = {
  friend: number;
};

export type myHandler = { jumpHelloState: () => void };

type PlaceUser = { id: number; name: string; username: string; email: string };

function Hello({ friend }: Props, ref: ForwardedRef<myHandler>) {
  // const [myState, setMyState] = useState(() => new Date().getTime());
  const { count, plusCount, minusCount } = useCounter();
  const [myState, setMyState] = useState(0);
  const {
    session: { loginUser },
  } = useSession();

  let v = 1;
  const name = loginUser?.name ?? '';
  const handler = {
    jumpHelloState: () => setMyState((pre) => pre + 30),
  };
  useImperativeHandle(ref, () => handler);

  const BASEURL = `https://jsonplaceholder.typicode.com/users/${friend}`;
  const {
    data: friendInfo,
    load,
    error,
  } = useFetch<PlaceUser>(BASEURL, true, [friend]);

  return (
    <div className='flex-col-center my-5 border border-slate-300 p-3'>
      <Title text='Hello~' name={name} />
      <Body>
        <div className='text-semibold flex-col-center text-2xl'>
          myState: {myState}
        </div>
        This is Hello Body Component. {v} - {friend}
        <div className='flex-col-center'>
          {load ? (
            <div className='flex-col-center'>
              <FaSpinner className='animate-spin text-3xl' />
            </div>
          ) : error ? (
            <strong className='text-red-500'>
              {error.message && error.message.startsWith('404')
                ? `Your friend is not found(${friend})`
                : error.message}
            </strong>
          ) : (
            <strong>My friend is {friendInfo?.username}.</strong>
          )}
        </div>
      </Body>
      <div className='flex flex-row justify-center'>
        <button
          onClick={() => {
            v++;
            setMyState(myState + 1);
            plusCount();
          }}
          className='btn'
        >
          Hello
        </button>
        <strong className='mx-5'>{count}</strong>
        <button onClick={() => minusCount()} className='btn btn-danger'>
          Minus
        </button>
      </div>
    </div>
  );
}

const ImpHello = forwardRef(Hello);
export default ImpHello;
