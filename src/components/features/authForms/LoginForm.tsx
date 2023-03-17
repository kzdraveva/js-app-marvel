import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

// Login form component
export const LoginForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const toast = useToast();

  const onSubmit = async (formData) => {
    try {
      await login(formData.email, formData.password);
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection="column" alignItems="end" gap="20px">
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            variant="flushed"
            focusBorderColor="secondaryColor"
            placeholder="Enter e-mail"
            {...register('email', { required: true })}
            p="5px 10px"
          />
          {errors.email && <span>This field is required</span>}
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            variant="flushed"
            focusBorderColor="secondaryColor"
            placeholder="Enter password"
            {...register('password', { required: true })}
            p="5px 10px"
          />
          {errors.password && <span>This field is required</span>}
        </FormControl>
        <Button type="submit" colorScheme="red" mb="15px">
          Login
        </Button>
      </Flex>
    </form>
  );
};
