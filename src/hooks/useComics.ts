import { useRouter } from 'next/router';
import useSWR from 'swr';
import { IComicsList } from '../interfaces/IComicsList';
import { fetcher } from '../libs/fetcher';

export const useComics = () => {
  const router = useRouter();
  const {title} = router.query;

  const { data: comics, isLoading } = useSWR<IComicsList>(title? `/comics?title=${title}&`: '/comics?', fetcher);

  return { comics, isLoading };
};
