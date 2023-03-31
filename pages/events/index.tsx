import EventsList from '../../src/components/features/events/EventsList/EventsList';
import AuthWrapper from '../../src/components/shared/layouts/Layout/Layout';
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
