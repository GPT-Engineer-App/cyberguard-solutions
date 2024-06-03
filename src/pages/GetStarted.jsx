import { Box, Heading, VStack, Input, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const GetStarted = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Box p={10}>
      <VStack spacing={8}>
        <Heading>{isLogin ? "Login" : "Create Account"}</Heading>
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        {!isLogin && <Input placeholder="Confirm Password" type="password" />}
        <Button colorScheme="teal">{isLogin ? "Login" : "Create Account"}</Button>
        <Text onClick={toggleForm} cursor="pointer" color="teal.500">
          {isLogin ? "Don't have an account? Create one" : "Already have an account? Login"}
        </Text>
      </VStack>
    </Box>
  );
};

export default GetStarted;
