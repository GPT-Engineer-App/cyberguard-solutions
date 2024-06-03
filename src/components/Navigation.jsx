import { Link } from "react-router-dom";
import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>B&J CyberGuard Solutions</Box>
        <Flex alignItems={"center"}>
          <Link to="/">
            <Button variant="link">Home</Button>
          </Link>
          <Link to="/about-us">
            <Button variant="link">About Us</Button>
          </Link>
          <Link to="/services">
            <Button variant="link">Services</Button>
          </Link>
          <Link to="/training">
            <Button variant="link">Training</Button>
          </Link>
          <Link to="/blog">
            <Button variant="link">Blog</Button>
          </Link>
          <Link to="/contact-us">
            <Button variant="link">Contact Us</Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
