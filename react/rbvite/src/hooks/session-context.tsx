import {
  createContext,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  useContext,
  useLayoutEffect,
  useReducer,
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
type CartItem = { id: number; name: string; price: number; sale: number };
export type Session = { loginUser: LoginUser | null; cart: CartItem[] };

type SessionContextProps = {
  session: Session;
  reload: number;
  setReload: (value: SetStateAction<number>) => void;
  loginRef: RefObject<LoginHandler> | null;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeCartItem: (id: number) => void;
  addCartItem: (name: string, price: number) => void;
  updateCartItem: (id: number, name: string, price: number) => void;
};

const SessionContext = createContext<SessionContextProps>({
  session: { loginUser: null, cart: [] } as Session,
  reload: 0,
  setReload: () => {},
  loginRef: null,
  login: () => {},
  logout: () => {},
  removeCartItem: () => {},
  addCartItem: () => {},
  updateCartItem: () => {},
});

type updateSessionAction = {
  type: 'updateSession';
  payload: Session;
};

type loginAction = {
  type: 'login';
  payload: LoginUser;
};

type logoutAction = {
  type: 'logout';
  payload: null;
};

type addCartAction = {
  type: 'addCart';
  payload: CartItem;
};

type removeCartAction = {
  type: 'removeCart';
  payload: number;
};

type updateCartAction = {
  type: 'updateCart';
  payload: CartItem;
};

type Action =
  | updateSessionAction
  | loginAction
  | logoutAction
  | addCartAction
  | removeCartAction
  | updateCartAction;

const reducer = (session: Session, { type, payload }: Action) => {
  switch (type) {
    case 'updateSession':
      return { ...payload };
    case 'login':
      return { ...session, loginUser: payload };
    case 'logout':
      return { ...session, loginUser: payload };
    case 'addCart':
      return { ...session, cart: [...session.cart, payload] };
    case 'removeCart':
      return {
        ...session,
        cart: session.cart.filter((item) => item.id !== payload),
      };
    case 'updateCart': {
      const idx = session.cart.findIndex((item) => item.id === payload.id);
      if (idx === -1) return { ...session };
      session.cart[idx] = payload;
      return { ...session, cart: [...session.cart] };
    }
    default:
      return session;
  }
};

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, dispatch] = useReducer(reducer, defaultSession);
  const [reload, setReload] = useState(0);

  const { data } =
    useFetch<Session>('/data/sample.json', true, [reload]) || defaultSession;

  useLayoutEffect(() => {
    dispatch({ type: 'updateSession', payload: data || defaultSession });
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
    dispatch({ type: 'login', payload: { id: +id, name } });
  };

  const logout = () => dispatch({ type: 'logout', payload: null });

  const addCartItem = (name: string, price: number) => {
    const id = Math.max(...session.cart.map(({ id }) => id), 0) + 1;
    dispatch({ type: 'addCart', payload: { id, name, price, sale: 0 } });
  };

  const removeCartItem = (id: number) =>
    dispatch({ type: 'removeCart', payload: id });

  const updateCartItem = (id: number, name: string, price: number) => {
    dispatch({ type: 'updateCart', payload: { id, name, price, sale: 0 } });
  };

  return (
    <SessionContext.Provider
      value={{
        session,
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
