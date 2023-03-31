import ComicsList from '../../src/components/features/comics/ComicsList/ComicsList';
import Layout from '../../src/components/shared/layouts/Layout/Layout';
import withAuth from '../../src/components/shared/utilities/Auth';

// Comics list page
const ComicsPage = () => {
  return (
    <Layout title="Comics">
      <ComicsList />
    </Layout>
  );
};

export default withAuth(ComicsPage);
