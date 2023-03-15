import SingleSerie from '../../src/components/features/series/SingleSerie';
import AuthWrapper from '../../src/components/shared/authWrapper/AuthWrapper';

// Single Serie page
export default function SingleSeriePage() {
  return (
    <AuthWrapper title="Series">
      <SingleSerie />
    </AuthWrapper>
  );
}
