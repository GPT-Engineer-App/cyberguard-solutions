import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box p={10}>
      <VStack spacing={8}>
        <Heading>Our Story</Heading>
        <Text>B&J CyberGuard Solutions was founded with a mission to provide unparalleled cybersecurity services and training.</Text>
        <Heading>Our Team</Heading>
        <Text>Bridges Mwashighadi: Co-Founder & CEO</Text>
        <Text>Hyun Lee Joo: Co-Founder & Chief Technology Officer (CTO)</Text>
        <Heading>Why Choose Us</Heading>
        <Text>Expertise, Customized Solutions, Proven Track Record</Text>
        <Heading>Our Values</Heading>
        <Text>Integrity, Innovation, Excellence</Text>
      </VStack>
    </Box>
  );
};

export default AboutUs;
