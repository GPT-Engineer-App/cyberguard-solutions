import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Training = () => {
  return (
    <Box p={10}>
      <VStack spacing={8}>
        <Heading>Overview of Training Programs</Heading>
        <Text>At B&J CyberGuard Solutions, we offer a variety of training programs designed to enhance your team's cybersecurity skills and knowledge.</Text>
        <Heading>Cybersecurity Basics</Heading>
        <Heading>Advanced Threat Detection</Heading>
        <Heading>Incident Response Training</Heading>
        <Heading>Custom Training Solutions</Heading>
        <Heading>Benefits of Our Training Programs</Heading>
        <Text>Hands-On Learning, Expert Instructors, Flexible Scheduling, Certification</Text>
      </VStack>
    </Box>
  );
};

export default Training;
