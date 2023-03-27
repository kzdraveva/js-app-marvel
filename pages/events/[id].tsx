import SingleEvent from '../../src/components/features/events/SingleEvent';
import AuthWrapper from '../../src/components/shared/authWrapper/AuthWrapper';

// Single Event page
const SingleEventPage = () => {
  return (
    <AuthWrapper title="Events">
      <SingleEvent />
    </AuthWrapper>
  );
};

export default SingleEventPage;