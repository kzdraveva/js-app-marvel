import ComicsList from '../../src/components/features/comics/ComicsList';
import AuthWrapper from '../../src/components/shared/authWrapper/AuthWrapper';

// Comics list page
export default function Comics() {
  return (
    <AuthWrapper title="Comics">
      <ComicsList />
    </AuthWrapper>
  );
}
