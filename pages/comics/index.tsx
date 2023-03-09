import ComicsList from '../../src/components/features/landingPage/comics/ComicsList';
import AuthWrapper from '../../src/components/shared/authWrapper/AuthWrapper';

export default function Comics() {
  return (
    <AuthWrapper title="Comics">
      <ComicsList />
    </AuthWrapper>
  );
}
