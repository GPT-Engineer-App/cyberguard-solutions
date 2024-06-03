import { Box, Heading, Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const GetStarted = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="2xl">
        Get Started
      </Heading>
      <Text mt={4}>Create an account or login to access our services.</Text>
      <FormControl mt={8}>
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="blue" mt={4}>
        Login
      </Button>
      <Button colorScheme="green" mt={4} ml={4}>
        Create Account
      </Button>
    </Box>
  );
};

export default GetStarted;
