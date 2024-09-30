import { useEffect, useState } from 'react';

const ABORT_REASON = 'My useFetch Clean-up!';

const cache: Record<string, unknown> = {};

export interface ErrorWithMessage {
  message: string;
}

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage =>
  typeof error === 'object' &&
  error !== null &&
  'message' in error &&
  typeof error.message === 'string';

const toErrorWithMessage = (error: unknown) =>
  isErrorWithMessage(error) ? error : new Error(JSON.stringify(error));

export const useFetch = <T>(
  url: string,
  isCache: boolean = false,
  depArr: unknown[] = []
) => {
  const [result, setResult] = useState<T>();
  const [error, setError] = useState<ErrorWithMessage>();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    console.log('🚀 ~ Fetch', url);
    const abortController = new AbortController();
    const { signal } = abortController;

    (async function () {
      if (isCache && url in cache) {
        // console.log('Cached!!!', url);
        setResult(cache[url] as T);
        setError(undefined);
      } else {
        try {
          setLoad(true);
          const data = (await fetch(url, { signal }).then((res) => {
            if (res.ok) return res.json();
            throw new Error(`${res.status} ${res.statusText}`);
          })) as T;

          cache[url] = data;

          setResult(data);
          setError(undefined);
        } catch (error) {
          console.error('Error>>', error);
          if (error && String(error) !== ABORT_REASON) {
            // console.log('default error');
            setError(toErrorWithMessage(error));
          }
        } finally {
          setLoad(false);
        }
      }
    })();

    return () => abortController.abort(ABORT_REASON);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, depArr);

  return { data: result, load, error };
};
