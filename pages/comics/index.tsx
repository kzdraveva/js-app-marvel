import ComicsList from '../../src/components/features/comics/ComicsList';
import AuthWrapper from '../../src/components/shared/authWrapper/AuthWrapper';
import withAuth from '../../src/components/shared/utilities/Auth';

// Comics list page
const Comics = () => {
  return (
    <AuthWrapper title="Comics">
      <ComicsList />
    </AuthWrapper>
  );
};

export default withAuth(Comics);
