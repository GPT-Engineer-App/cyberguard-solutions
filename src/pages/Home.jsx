import { Box, Heading, Text, Button, Image, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Box bg="gray.100" p={10} textAlign="center">
        <Image src="path/to/your/image.jpg" alt="Cybersecurity" />
        <Heading>Securing Your Digital World</Heading>
        <Text>Expert Cybersecurity Services & Training Solutions</Text>
        <Button colorScheme="teal" m={2}>
          Learn More
        </Button>
        <Button colorScheme="teal" m={2}>
          Get Started
        </Button>
      </Box>
      <VStack spacing={8} p={10}>
        <Heading>Welcome to B&J CyberGuard Solutions</Heading>
        <Text>We provide top-notch security services and comprehensive training programs to safeguard your digital assets.</Text>
        <Heading>Featured Services</Heading>
        <Text>Penetration Testing, Vulnerability Assessment, Security Audits, Incident Response</Text>
        <Heading>Training Programs Highlight</Heading>
        <Text>Cybersecurity Basics, Advanced Threat Detection, Incident Response Training, Custom Training Solutions</Text>
        <Heading>Testimonials</Heading>
        <Text>"B&J CyberGuard Solutions significantly improved our security posture. Their expertise and dedication are unmatched." - John Doe, CEO of SecureTech</Text>
      </VStack>
    </Box>
  );
};

export default Home;
