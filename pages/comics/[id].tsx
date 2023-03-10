import { useRouter } from 'next/router';
import SingleComic from '../../src/components/features/comics/SingleComic';
import AuthWrapper from '../../src/components/shared/authWrapper/AuthWrapper';

export default function SingleComicPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <AuthWrapper title="Comics">
      <SingleComic />
    </AuthWrapper>
  );
}
