import { useCallback, useEffect, useRef } from 'react';

export function useTimeout(
  cb: (...args: unknown[]) => void,
  delay: number,
  ...args: unknown[]
) {
  const cbRef = useRef(cb);
  const argsRef = useRef(args);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const setup = useCallback(() => {
    timerRef.current = setTimeout(cbRef.current, delay, ...argsRef.current);
  }, [delay]);

  const clear = useCallback(() => {
    clearTimeout(timerRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    setup();
  }, [clear, setup]);

  useEffect(() => {
    setup();
    return clear;
  }, [delay, setup, clear]);

  return { timerRef, setup, clear, reset };
}

export function useDebounce(
  cb: (...args: unknown[]) => void,
  delay: number,
  depArr: unknown[] = []
) {
  const { clear, reset } = useTimeout(cb, delay);

  useEffect(() => {
    reset();
    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...depArr, delay]);
}

export function useInterval<
  T extends (...args: Parameters<T>) => ReturnType<T>,
>(cb: T, delay: number, ...args: Parameters<T>) {
  const cbRef = useRef(cb);
  const argsRef = useRef(args);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const setup = useCallback(() => {
    timerRef.current = setInterval(cbRef.current, delay, ...argsRef.current);
  }, [delay]);

  const clear = useCallback(() => {
    clearInterval(timerRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    setup();
  }, [clear, setup]);

  useEffect(() => {
    setup();
    return clear;
  }, [delay, setup, clear]);

  return { setup, clear, reset };
}
