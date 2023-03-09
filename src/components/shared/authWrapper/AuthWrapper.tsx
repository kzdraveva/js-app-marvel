import { Box, Text } from '@chakra-ui/react';
import { MainNavigation } from '../mainNavigation/MainNavigation';

interface IAuthWrapper {
  title: string;
  children: any;
}

export default function AuthWrapper({ children, title }: IAuthWrapper) {
  return (
    <Box p="20px" h="100vh">
      <MainNavigation />
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
