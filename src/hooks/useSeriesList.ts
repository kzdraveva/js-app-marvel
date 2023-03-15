import useSWR from 'swr';
import { ISeriesList } from '../interfaces/ISeriesList';
import { fetcher } from '../libs/fetcher';

// Custom hook for fetching series list
export const useSeriesList = (
  title: string | string[],
  offset: number,
  limit: number,
) => {
  return useSWR<ISeriesList>(
    !title
      ? `/series?offset=${offset}&limit=${limit}&`
      : `/series?title=${title}&offset=${offset}&limit=${limit}&`,
    fetcher,
  );
};
