import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const RegisterForm = () => {
  return (
    <form>
      <FormControl mb="20px">
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          id="username"
          type="username"
          variant="flushed"
          focusBorderColor="secondaryColor"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          variant="flushed"
          focusBorderColor="secondaryColor"
        />
      </FormControl>
    </form>
  );
};
