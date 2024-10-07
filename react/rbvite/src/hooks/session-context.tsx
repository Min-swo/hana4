import {
  createContext,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  useContext,
  useLayoutEffect,
  useRef,
} from 'react';
import { LoginHandler } from '../components/Login';
import { useFetch } from './fetch-hooks';
import useMyReducer from '../libs/myReducer';
import useMyState from '../libs/myState';

const SKEY = 'session1';

// const defaultSession = { loginUser: null, cart: [] };
const defaultSession: Session = {
  loginUser: null,
  cart: [],
};

type LoginUser = { id: number; name: string };
export type CartItem = {
  id: number;
  name: string;
  price: number;
  sale: number;
};
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
  let cartStorage: Session;
  let userStorage: Session;

  switch (type) {
    case 'updateSession':
      return payload;
    case 'login':
      userStorage = { ...session, loginUser: payload };
      sessionStorage.setItem(SKEY, JSON.stringify(userStorage.loginUser));
      return userStorage;
    case 'logout':
      userStorage = { ...session, loginUser: null };
      sessionStorage.setItem(SKEY, JSON.stringify(userStorage.loginUser));
      return userStorage;
    case 'addCart':
      cartStorage = { ...session, cart: [...session.cart, payload] };
      break;
    case 'removeCart':
      cartStorage = {
        ...session,
        cart: session.cart.filter(({ id }) => id !== payload),
      };
      break;
    case 'updateCart':
      cartStorage = {
        ...session,
        cart: session.cart.map((oldItem) =>
          oldItem.id === payload.id ? payload : oldItem
        ),
      };
      break;
    default:
      return session;
  }

  if (cartStorage) {
    localStorage.setItem(SKEY, JSON.stringify(cartStorage.cart));
    console.log('🚀 ~ reducer ~ sess.cart:', cartStorage.cart);
  }

  return cartStorage;
};

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, dispatchSession] = useMyReducer(reducer, defaultSession);
  const [reload, setReload] = useMyState(0);

  const { data } =
    useFetch<Session>('/data/sample.json', true, [reload]) || defaultSession;

  useLayoutEffect(() => {
    const loginUser = JSON.parse(
      sessionStorage.getItem(SKEY) || 'null'
    ) as LoginUser;
    console.log('🚀 ~ useLayoutEffect ~ loginUser:', loginUser);

    const cart = JSON.parse(localStorage.getItem(SKEY) || 'null') as CartItem[];
    console.log('🚀 ~ useLayoutEffect ~ cart:', cart);

    const savedData = loginUser || cart ? { loginUser, cart } : null;
    dispatchSession({
      type: 'updateSession',
      payload: savedData || data || defaultSession,
    });
  }, [data, dispatchSession]);

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
    dispatchSession({ type: 'login', payload: { id: +id, name } });
  };

  const logout = () => dispatchSession({ type: 'logout', payload: null });

  const addCartItem = (name: string, price: number) => {
    const id = Math.max(...session.cart.map(({ id }) => id), 0) + 1;
    dispatchSession({ type: 'addCart', payload: { id, name, price, sale: 0 } });
  };

  const removeCartItem = (id: number) =>
    dispatchSession({ type: 'removeCart', payload: id });

  const updateCartItem = (id: number, name: string, price: number) => {
    dispatchSession({
      type: 'updateCart',
      payload: { id, name, price, sale: 0 },
    });
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
