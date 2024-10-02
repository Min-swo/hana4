import { useCallback, useState } from 'react';

// useState로 myReducer 작성
export default function useMyReducer<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  R extends (prevState: S, action: any) => S,
  S,
>(reducer: R, initArg: S, init?: (initArg: S) => S) {
  const [state, setState] = useState(init ? init(initArg) : initArg);

  const dispatch = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (action: any) => {
      setState((pre) => reducer(pre, action));
    },
    [reducer]
  );

  return [state, dispatch] as const;
}
