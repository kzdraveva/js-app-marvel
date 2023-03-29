import { Box, Text } from '@chakra-ui/react';
import useAuth from '../../../hooks/useAuth';
import { MainNavigation } from '../mainNavigation/MainNavigation';

interface IAuthWrapper {
  title: string;
  children: any;
}

// Wrapper for authenticated pages
export default function AuthWrapper({ children, title }: IAuthWrapper) {
  // Custom hooks
  const { isAuth } = useAuth();

  // MAIN RENDER
  // ----------
  return (
    <Box p="20px" h="100vh">
      <MainNavigation isAuth={isAuth} />
      <Box display="flex" flexDirection="row" alignItems="center" h="40px">
        <Box flex="1" height="1px" bg="primaryColor" />
        <Text px="4" fontSize="xl">
          {title.toUpperCase()}
        </Text>
        <Box flex="1" height="1px" bg="primaryColor" />
      </Box>
      {children}
    </Box>
  );
}
