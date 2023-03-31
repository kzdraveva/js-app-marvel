import { Button } from '@chakra-ui/react';
import useAuth from '../../../../hooks/useAuth';

export const AuthLogoutButton = () => {
  // Custom hooks
  const { logout } = useAuth();

  // HELPER FUNCTIONS
  // ---------------
  const handleLogout = async () => {
    await logout();
  };
  return (
    <Button
      variant="outline"
      ml="15px"
      transition="all 0.1s"
      _hover={{ transform: 'scale(1.1)' }}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};
