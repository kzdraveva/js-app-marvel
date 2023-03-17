import SeriesList from '../../src/components/features/series/SeriesList';
import AuthWrapper from '../../src/components/shared/authWrapper/AuthWrapper';
import withAuth from '../../src/components/shared/utilities/Auth';

// Series list page
const SeriesPage = () => {
  return (
    <AuthWrapper title="Series">
      <SeriesList />
    </AuthWrapper>
  );
};

export default withAuth(SeriesPage);
