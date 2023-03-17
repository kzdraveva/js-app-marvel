import AuthWrapper from '../../src/components/shared/authWrapper/AuthWrapper';
import withAuth from '../../src/components/shared/utilities/Auth';

// Stories list page
const StoriesPage = () => {
  return <AuthWrapper title="Stories">Stories Page</AuthWrapper>;
};

export default withAuth(StoriesPage);
