import { useReducer } from 'react';

export default function useMyState<T>(init: T | (() => T)) {
  const reducer = (prevState: T, action: T | ((pre: T) => T)) => {
    if (action instanceof Function) return action(prevState);
    else return action;
  };

  const [state, dispatch] = useReducer(
    reducer,
    init instanceof Function ? init() : init
  );

  const setState = (payload: T | ((pre: T) => T)) => {
    dispatch(payload);
  };

  return [state, setState] as const;
}
