/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useContext, useState } from 'react';

// pattern4 - src/hooks/counter-context.jsx    GOOD!
type CounterContextProps = {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
};

const CounterContext = createContext<CounterContextProps>({
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
});

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  const plusCount = () => setCount((count) => count + 1);
  const minusCount = () => setCount((count) => count - 1);

  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);

export const useCount = (defVal = 0) => {
  const [count, setCount] = useState(defVal);

  const plusCount = (flag = 1) => setCount((pre) => pre + flag);

  return [count, plusCount] as const;
};
