import EventsList from '../../src/components/features/events/EventsList';
import AuthWrapper from '../../src/components/shared/authWrapper/AuthWrapper';
import withAuth from '../../src/components/shared/utilities/Auth';

// Events list page
const EventsPage = () => {
  return (
    <AuthWrapper title="Events">
      <EventsList />
    </AuthWrapper>
  );
};

export default withAuth(EventsPage);
