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

// Register form component
export const RegisterForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const toast = useToast();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register(email, password);
      toast({
        title: 'Registered',
        description: 'You have successfully registered.',
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
    <form onSubmit={handleRegister}>
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
          Register
        </Button>
      </Flex>
    </form>
  );
};
