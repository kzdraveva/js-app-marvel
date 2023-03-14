import useSWR from 'swr';
import { ISingleComic } from '../interfaces/ISingleComic';
import { fetcher } from '../libs/fetcher';

// Custom hook for fetching single comic
export const useSingleComic = (id: string | string[]) => {
  return useSWR<ISingleComic>(`/comics/${id}?`, fetcher);
};
