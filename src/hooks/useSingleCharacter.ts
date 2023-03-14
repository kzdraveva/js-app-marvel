import { useRouter } from 'next/router';
import useSWR from 'swr';
import { ISingleCharacter } from '../interfaces/ISingleCharacter';
import { fetcher } from '../libs/fetcher';

// Custom hook for fetching single character
export const useSingleCharacter = (id: string | string[]) => {
  return useSWR<ISingleCharacter>(`/characters/${id}?`, fetcher);
};
