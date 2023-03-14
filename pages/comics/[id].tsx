import SingleComic from '../../src/components/features/comics/SingleComic';
import AuthWrapper from '../../src/components/shared/authWrapper/AuthWrapper';

// Single Comic page
export default function SingleComicPage() {
  return (
    <AuthWrapper title="Comics">
      <SingleComic />
    </AuthWrapper>
  );
}
