import SingleSerie from '../../src/components/features/series/SingleSerie/SingleSerie';
import Layout from '../../src/components/shared/layouts/Layout/Layout';
import withAuth from '../../src/components/shared/utilities/Auth';

// Single Serie page
const SingleSeriesPage = () => {
  return (
    <Layout title="Series">
      <SingleSerie />
    </Layout>
  );
};

export default withAuth(SingleSeriesPage);
