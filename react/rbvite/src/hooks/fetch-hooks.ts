import { useEffect, useState } from 'react';

const cache: Record<string, unknown> = {};

export const useFetch = <T>(
  url: string,
  isCache: boolean = false,
  depArr: unknown[] = []
) => {
  const [result, setResult] = useState<T>();

  useEffect(() => {
    console.log('🚀 ~ useEffect');
    const abortController = new AbortController();
    const { signal } = abortController;

    (async function () {
      if (isCache && url in cache) {
        console.log('Cached!!!');
        setResult(cache[url] as T);
      } else {
        try {
          const data = (await fetch(url, { signal }).then((res) =>
            res.json()
          )) as T;
          cache[url] = data;
          setResult(data);
        } catch (error) {
          console.error('Error>>', error);
        }
      }
    })();

    return () => abortController.abort('Clean-up!');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, depArr);

  return result;
};
