import { useState, useEffect, SetStateAction, Dispatch } from 'react';

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Tours | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      const response = await res.json();
      setData(response);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [data, setData, fetchData, isLoading, isError] as [
    Tours,
    Dispatch<SetStateAction<Tours | null>>,
    () => Promise<void>,
    boolean,
    boolean,
  ];
};

export default useFetch;
