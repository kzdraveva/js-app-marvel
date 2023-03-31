import SingleEvent from '../../src/components/features/events/SingleEvent/SingleEvent';
import AuthWrapper from '../../src/components/shared/layouts/Layout/Layout';

// Single Event page
const SingleEventPage = () => {
  return (
    <AuthWrapper title="Events">
      <SingleEvent />
    </AuthWrapper>
  );
};

export default SingleEventPage;
