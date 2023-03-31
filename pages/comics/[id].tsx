import SingleComic from '../../src/components/features/comics/SingleComic/SingleComic';
import AuthWrapper from '../../src/components/shared/layouts/Layout/Layout';
import withAuth from '../../src/components/shared/utilities/Auth';

// Single Comic page
const SingleComicPage = () => {
  return (
    <AuthWrapper title="Comics">
      <SingleComic />
    </AuthWrapper>
  );
};

export default withAuth(SingleComicPage);
