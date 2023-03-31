import SingleSerie from '../../src/components/features/series/SingleSerie/SingleSerie';
import AuthWrapper from '../../src/components/shared/layouts/Layout/Layout';
import withAuth from '../../src/components/shared/utilities/Auth';

// Single Serie page
const SingleSeriesPage = () => {
  return (
    <AuthWrapper title="Series">
      <SingleSerie />
    </AuthWrapper>
  );
}

export default withAuth(SingleSeriesPage);
