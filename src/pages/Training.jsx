import { Box, Heading, Text } from "@chakra-ui/react";

const Training = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="2xl">
        Training Programs
      </Heading>
      <Text mt={4}>At B&J CyberGuard Solutions, we offer a variety of training programs designed to enhance your team's cybersecurity skills and knowledge.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Cybersecurity Basics
      </Heading>
      <Text mt={4}>This course is designed for individuals new to the field of cybersecurity. Learn the fundamental principles of protecting networks, systems, and data from cyber threats. Gain hands-on experience with real-world scenarios and enhance your understanding of security best practices. Enroll now to start your journey in cybersecurity.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Advanced Threat Detection
      </Heading>
      <Text mt={4}>Develop advanced skills in identifying and responding to sophisticated cyber threats. This course covers the latest techniques and tools used by cybersecurity professionals to detect and mitigate threats. Enroll now to advance your cybersecurity expertise.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Incident Response Training
      </Heading>
      <Text mt={4}>Learn effective strategies for managing and mitigating cyber incidents. This course provides practical knowledge on how to develop and implement incident response plans, ensuring your organization can quickly recover from attacks. Enroll now to improve your incident response capabilities.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Custom Training Solutions
      </Heading>
      <Text mt={4}>We offer tailored training programs designed to meet the specific needs of your organization. Contact us to discuss your requirements and develop a customized training plan that addresses your unique challenges and objectives.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Benefits of Our Training Programs
      </Heading>
      <Text mt={4}>
        <strong>Hands-On Learning:</strong> Practical exercises and real-world scenarios.
      </Text>
      <Text mt={2}>
        <strong>Expert Instructors:</strong> Courses taught by experienced cybersecurity professionals.
      </Text>
      <Text mt={2}>
        <strong>Flexible Scheduling:</strong> Online and in-person options to fit your schedule.
      </Text>
      <Text mt={2}>
        <strong>Certification:</strong> Receive a certificate of completion to validate your new skills.
      </Text>
    </Box>
  );
};

export default Training;
