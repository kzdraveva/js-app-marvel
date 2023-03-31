import SeriesList from '../../src/components/features/series/SeriesList/SeriesList';
import Layout from '../../src/components/shared/layouts/Layout/Layout';
import withAuth from '../../src/components/shared/utilities/Auth';

// Series list page
const SeriesPage = () => {
  return (
    <Layout title="Series">
      <SeriesList />
    </Layout>
  );
};

export default withAuth(SeriesPage);
