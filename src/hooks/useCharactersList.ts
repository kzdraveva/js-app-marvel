import useSWR from 'swr';
import { ICharactersList } from '../interfaces/ICharactersList';
import { fetcher } from '../libs/fetcher';

// Custom hook for fetching characters list
export const useCharactersList = () => {
  return useSWR<ICharactersList>(`/characters?`, fetcher);
};
