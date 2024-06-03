import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Blog = () => {
  return (
    <Box p={10}>
      <VStack spacing={8}>
        <Heading>Welcome to the B&J CyberGuard Solutions Blog!</Heading>
        <Text>Here, we share the latest trends, tips, and news in the world of cybersecurity. Stay informed and enhance your knowledge with our expert insights.</Text>
        <Heading>Top 10 Cybersecurity Tips for Small Businesses</Heading>
        <Heading>Understanding the Latest Ransomware Threats</Heading>
        <Heading>The Importance of Regular Security Audits</Heading>
        <Heading>Categories</Heading>
        <Text>Cybersecurity Tips, Threat Intelligence, Industry News, Case Studies</Text>
        <Heading>Subscribe to our blog for the latest updates and insights in cybersecurity.</Heading>
      </VStack>
    </Box>
  );
};

export default Blog;
