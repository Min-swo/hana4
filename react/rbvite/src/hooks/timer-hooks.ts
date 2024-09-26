import { useEffect, useRef } from 'react';

export default function useTimer() {
  const useTimeout = (
    cb: (...args: unknown[]) => void,
    delay: number,
    ...args: unknown[]
  ) => {
    const cbRef = useRef(cb);
    const argsRef = useRef(args);
    useEffect(() => {
      const tmout = setTimeout(cbRef.current, delay, ...argsRef.current);

      return () => clearTimeout(tmout);
    }, [delay]);
  };

  // const useTimeout = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  //   cb: T,
  //   delay: number,
  //   ...args: Parameters<T>
  // ) => {
  //   useEffect(() => {
  //     const tmout = setTimeout(cb, delay, ...args);

  //     return () => clearTimeout(tmout);
  //   }, [cb, delay, args]);
  // };

  const useInterval = (
    cb: (...args: unknown[]) => void,
    delay: number,
    ...args: Parameters<typeof cb>
  ) => {
    useEffect(() => {
      const intvl = setInterval(cb, delay, ...args);

      return () => clearInterval(intvl);
    }, [cb, delay, args]);
  };

  return { useTimeout, useInterval };
}
