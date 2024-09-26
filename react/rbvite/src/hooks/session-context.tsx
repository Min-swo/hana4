import {
  createContext,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { LoginHandler } from '../components/Login';
import { useFetch } from './fetch-hooks';

// const defaultSession = { loginUser: null, cart: [] };
const defaultSession = {
  loginUser: null,
  cart: [],
};

type LoginUser = { id: number; name: string };
type CartItem = { id: number; name: string; price: number };
export type Session = { loginUser: LoginUser | null; cart: CartItem[] };

type SessionContextProps = {
  session: Session;
  setSession: (value: SetStateAction<Session>) => void;
  reload: number;
  setReload: (value: SetStateAction<number>) => void;
  loginRef: RefObject<LoginHandler> | null;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeCartItem: (id: number) => void;
  addCartItem: (name: string, price: number) => void;
  updateCartItem: (id: number, name: string, price: number) => void;
};

// const defaultSessionContextProps = {
//   session: null as Session | null,
//   loginRef: null as RefObject<LoginHandler> | null,
//   login: (_id: number, _name: string) => {},
//   logout: () => {},
//   removeCartItem: (_id: number) => {},
//   addCartItem: (_name: string, _price: number) => {},
//   updateCartItem: (_name: string, _price: number) => {},
// };

const SessionContext = createContext<SessionContextProps>({
  session: { loginUser: null, cart: [] } as Session,
  setSession: () => {},
  reload: 0,
  setReload: () => {},
  loginRef: null,
  login: () => {},
  logout: () => {},
  removeCartItem: () => {},
  addCartItem: () => {},
  updateCartItem: () => {},
});

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>(defaultSession);
  const [reload, setReload] = useState(0);

  console.log('Session');
  const data =
    useFetch<Session>('/data/sample.json', true, [reload]) || defaultSession;
  useLayoutEffect(() => {
    setSession(data);
  }, [data]);

  const loginRef = useRef<LoginHandler>(null);

  const login = (id: number, name: string) => {
    if (!id) {
      alert('ID를 입력하세요!');
      return loginRef.current?.focus('id');
    }
    if (!name) {
      alert('Name을 입력하세요!');
      return loginRef.current?.focus('name');
    }
    setSession({
      ...session,
      loginUser: { id: +id, name },
    });
  };

  const logout = () => setSession({ ...session, loginUser: null });

  const addCartItem = (name: string, price: number) => {
    const id = Math.max(...session.cart.map(({ id }) => id), 0) + 1;
    setSession({
      ...session,
      cart: [...session.cart, { id, name, price }],
    });
  };

  const removeCartItem = (id: number) =>
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== id),
    });

  const updateCartItem = (id: number, name: string, price: number) => {
    const idx = session.cart.findIndex(({ id: mid }) => mid === id);
    if (idx !== -1) {
      session.cart[idx] = { id, name, price };
      setSession({
        ...session,
      });
    }
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        setSession,
        reload,
        setReload,
        loginRef,
        login,
        logout,
        removeCartItem,
        addCartItem,
        updateCartItem,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSession = () => useContext(SessionContext);
