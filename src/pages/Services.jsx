import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box p={10}>
      <VStack spacing={8}>
        <Heading>Overview</Heading>
        <Text>At B&J CyberGuard Solutions, we offer a comprehensive range of cybersecurity services designed to protect your business from ever-evolving cyber threats.</Text>
        <Heading>Penetration Testing</Heading>
        <Heading>Vulnerability Assessment</Heading>
        <Heading>Security Audits</Heading>
        <Heading>Incident Response</Heading>
        <Heading>Additional Services</Heading>
        <Text>Compliance Management, Security Awareness Training, Threat Intelligence</Text>
      </VStack>
    </Box>
  );
};

export default Services;
