import useSWR from 'swr';
import { IComicsList } from '../interfaces/IComicsList';
import { fetcher } from '../libs/fetcher';

// Custom hook for fetching comics list
export const useComicsList = (
  title: string | string[],
  offset: number,
  limit: number,
) => {
  return useSWR<IComicsList>(
    !title
      ? `/comics?offset=${offset}&limit=${limit}&`
      : `/comics?title=${title}&offset=${offset}&limit=${limit}&`,
    fetcher,
  );
};
