import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const withAuth = (WrappedComponent) => {
  const AuthWrapper = (props) => {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !user) {
        router.push('/');
      }
    }, [user, isLoading, router]);

    return isLoading ? <p>Loading...</p> : <WrappedComponent {...props} />;
  };

  return AuthWrapper;
};

export default withAuth;
