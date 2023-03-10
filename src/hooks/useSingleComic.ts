import { useRouter } from 'next/router';
import useSWR from 'swr';
import { IComicsList } from '../interfaces/IComicsList';
import { ISingleComic } from '../interfaces/ISingleComic';
import { fetcher } from '../libs/fetcher';

export const useSingleComic = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: comic, isLoading } = useSWR<ISingleComic>(
    `/comics/${id}?`,
    fetcher,
  );

  return { comic, isLoading };
};
