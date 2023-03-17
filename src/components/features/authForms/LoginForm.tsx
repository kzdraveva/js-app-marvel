import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

// Login form component
export const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      toast({
        title: 'Logged In',
        description: 'You have successfully logged in.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      toast({
        title: 'An error occurred',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // MAIN RENDER
  // -----------
  return (
    <form onSubmit={handleLogin}>
      <Flex flexDirection="column" alignItems="end">
        <FormControl mb="20px">
          <FormLabel htmlFor="username">Email</FormLabel>
          <Input
            id="email"
            type="email"
            variant="flushed"
            focusBorderColor="secondaryColor"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            variant="flushed"
            focusBorderColor="secondaryColor"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="red" mt="20px">
          Login
        </Button>
      </Flex>
    </form>
  );
};
