import EventsList from '../../src/components/features/events/EventsList/EventsList';
import Layout from '../../src/components/shared/layouts/Layout/Layout';
import withAuth from '../../src/components/shared/utilities/Auth';

// Events list page
const EventsPage = () => {
  return (
    <Layout title="Events">
      <EventsList />
    </Layout>
  );
};

export default withAuth(EventsPage);
