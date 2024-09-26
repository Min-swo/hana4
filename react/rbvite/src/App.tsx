import { useRef } from 'react';
import Hello, { myHandler } from './components/Hello';
import My from './components/My';
// import { useSession } from './hooks/session-context';
// import { type LoginHandler } from './components/Login';

// const SampleSession = {
//   loginUser: { id: 1, name: 'Hong' },
//   cart: [
//     { id: 100, name: '라면', price: 3000 },
//     { id: 101, name: '컵라면', price: 2000 },
//     { id: 200, name: '파', price: 5000 },
//   ],
// };

// type LoginUser = typeof SampleSession.loginUser;
// type CartItem = { id: number; name: string; price: number };
// export type Session = { loginUser: LoginUser | null; cart: CartItem[] };

function App() {
  // const [count, setCount] = useState(0);
  // const { count, plusCount } = useCounter();
  // const [session, setSession] = useState<Session>(SampleSession);
  // const { session } = useSession();
  const myHandleRef = useRef<myHandler>(null);
  // console.log(session.loginUser);
  // console.log('APP');
  // const plusCount = () => setCount(count + 1);
  // const minusCount = () => setCount(count - 1);

  // const logout = () => setSession({ ...session, loginUser: null });
  // const logout = () => {
  //   session.loginUser = null;
  //   setSession(session);
  // };

  // const loginRef = useRef<LoginHandler>(null);
  // const login = (id: number, name: string) => {
  //   if (!id) {
  //     alert('ID를 입력하세요!');
  //     return loginRef.current?.focus('id');
  //   }
  //   if (!name) {
  //     alert('Name을 입력하세요!');
  //     return loginRef.current?.focus('name');
  //   }
  //   setSession({
  //     ...session,
  //     loginUser: { id: +id, name },
  //   });
  // };

  // const addCartItem = (name: string, price: number) => {
  //   const id = Math.max(...session.cart.map(({ id }) => id), 0) + 1;
  //   setSession({
  //     ...session,
  //     cart: [...session.cart, { id, name, price }],
  //   });
  // };

  // const removeCartItem = (id: number) =>
  //   setSession({
  //     ...session,
  //     cart: session.cart.filter((item) => item.id !== id),
  //   });

  // const updateCartItem = (name: string, price: number) => {
  //   const idx = session.cart.findIndex(({ name: n }) => n === name);
  //   if (idx !== -1) {
  //     session.cart[idx].price = price;
  //     setSession({
  //       ...session,
  //     });
  //   }
  // };

  return (
    <div className='mt-5 flex flex-col items-center'>
      <Hello age={33} ref={myHandleRef} />
      <My />
      {/* <div className='card'>
        <button
          onClick={() => {
            plusCount();
            if (session.loginUser) session.loginUser.name = 'XXX' + count;
            console.table(session.loginUser);
            myHandleRef.current?.jumpHelloState();
          }}
          className='btn'
        >
          App.count is {count}
        </button>
      </div> */}
    </div>
  );
}

export default App;
