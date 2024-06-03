import { Link } from "react-router-dom";
import { Box, Flex, HStack, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Box>Logo</Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/training">Training</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact-us">Contact Us</Link>
          </HStack>
        </HStack>
        <Link to="/get-started">
          <Button colorScheme="teal">Get Started</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
