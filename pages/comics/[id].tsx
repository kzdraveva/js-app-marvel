import SingleComic from '../../src/components/features/comics/SingleComic/SingleComic';
import Layout from '../../src/components/shared/layouts/Layout/Layout';
import withAuth from '../../src/components/shared/utilities/Auth';

// Single Comic page
const SingleComicPage = () => {
  return (
    <Layout title="Comics">
      <SingleComic />
    </Layout>
  );
};

export default withAuth(SingleComicPage);
