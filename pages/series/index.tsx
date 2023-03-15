import SeriesList from '../../src/components/features/series/SeriesList';
import AuthWrapper from '../../src/components/shared/authWrapper/AuthWrapper';

// Series list page
export default function Series() {
  return (
    <AuthWrapper title="Series">
      <SeriesList />
    </AuthWrapper>
  );
}
