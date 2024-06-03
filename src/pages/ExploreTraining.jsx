import { Box, Heading, Text } from "@chakra-ui/react";

const ExploreTraining = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="2xl">
        Explore Training
      </Heading>
      <Text mt={4}>Discover our comprehensive training programs designed to enhance your cybersecurity skills and knowledge.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Cybersecurity Basics
      </Heading>
      <Text mt={4}>Learn the fundamental principles of protecting networks, systems, and data from cyber threats. Gain hands-on experience with real-world scenarios and enhance your understanding of security best practices.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Advanced Threat Detection
      </Heading>
      <Text mt={4}>Develop advanced skills in identifying and responding to sophisticated cyber threats. This course covers the latest techniques and tools used by cybersecurity professionals to detect and mitigate threats.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Incident Response Training
      </Heading>
      <Text mt={4}>Learn effective strategies for managing and mitigating cyber incidents. This course provides practical knowledge on how to develop and implement incident response plans, ensuring your organization can quickly recover from attacks.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Custom Training Solutions
      </Heading>
      <Text mt={4}>We offer tailored training programs designed to meet the specific needs of your organization. Contact us to discuss your requirements and develop a customized training plan that addresses your unique challenges and objectives.</Text>
    </Box>
  );
};

export default ExploreTraining;
