import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

// HOC Wrapper used for wrapping the authenticated components (pages)
const withAuth = (WrappedComponent) => {
  const AuthWrapper = (props) => {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !user) {
        router.push('/');
      }
    }, [user, isLoading, router]);

    // Render the wrapped component if the user is authenticated
    return user ? <WrappedComponent {...props} /> : null;
  };

  return AuthWrapper;
};

export default withAuth;
