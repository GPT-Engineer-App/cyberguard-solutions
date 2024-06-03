import { Box, Heading, Text, Button, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" minH="100vh" bg="gray.100">
        <Image src="path/to/your/image.jpg" alt="Cybersecurity" />
        <Heading as="h1" size="2xl" mt={6}>
          Securing Your Digital World
        </Heading>
        <Text fontSize="xl" mt={4}>
          Expert Cybersecurity Services & Training Solutions
        </Text>
        <Flex mt={6}>
          <Link to="/learn-more">
            <Button colorScheme="blue" mr={4}>
              Learn More
            </Button>
          </Link>
          <Link to="/get-started">
            <Button colorScheme="green">Get Started</Button>
          </Link>
        </Flex>
      </Flex>
      <Box p={8}>
        <Heading as="h2" size="xl">
          Welcome to B&J CyberGuard Solutions
        </Heading>
        <Text mt={4}>We provide top-notch security services and comprehensive training programs to safeguard your digital assets. Whether you're looking to protect your business from cyber threats or enhance your team's security skills, we have the expertise to meet your needs.</Text>
      </Box>
    </Box>
  );
};

export default Home;
