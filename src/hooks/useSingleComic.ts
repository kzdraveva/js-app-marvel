import useSWR from 'swr';
import { ISingleComic } from '../interfaces/ISingleComic';
import { fetcher } from '../libs/fetcher';

export const useSingleComic = (id: string | string[]) => {
  return useSWR<ISingleComic>(`/comics/${id}?`, fetcher);
};
