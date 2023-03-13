import useSWR from 'swr';
import { IComicsList } from '../interfaces/IComicsList';
import { fetcher } from '../libs/fetcher';

export const useComics = (title: string | string[]) => {
  return useSWR<IComicsList>(
    !title ? '/comics?' : `/comics?title=${title}&`,
    fetcher,
  );
};
