import { useRouter } from 'next/router';
import useSWR from 'swr';
import { ISingleCharacter } from '../interfaces/ISingleCharacter';
import { fetcher } from '../libs/fetcher';

export const useSingleCharacter = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: character, isLoading } = useSWR<ISingleCharacter>(
    `/characters/${id}?`,
    fetcher,
  );

  return { character, isLoading };
};
