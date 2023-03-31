import ComicsList from '../../src/components/features/comics/ComicsList/ComicsList';
import AuthWrapper from '../../src/components/shared/layouts/Layout/Layout';
import withAuth from '../../src/components/shared/utilities/Auth';

// Comics list page
const ComicsPage = () => {
  return (
    <AuthWrapper title="Comics">
      <ComicsList />
    </AuthWrapper>
  );
};

export default withAuth(ComicsPage);
