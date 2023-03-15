import useSWR from 'swr';
import { ISingleComic } from '../interfaces/ISingleComic';
import { fetcher } from '../libs/fetcher';

// Custom hook for fetching single serie
export const useSingleSerie = (id: string | string[]) => {
  return useSWR<ISingleComic>(`/series/${id}?`, fetcher);
};
