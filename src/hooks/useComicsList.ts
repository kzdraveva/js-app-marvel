import useSWR from 'swr';
import { IComicsList } from '../interfaces/IComicsList';
import { fetcher } from '../libs/fetcher';

// Custom hook for fetching comics list
export const useComics = (title: string | string[]) => {
  return useSWR<IComicsList>(
    !title ? '/comics?' : `/comics?title=${title}&`,
    fetcher,
  );
};
