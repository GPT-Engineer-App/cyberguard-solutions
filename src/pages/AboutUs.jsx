import { Box, Heading, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="2xl">
        About Us
      </Heading>
      <Text mt={4}>B&J CyberGuard Solutions was founded with a mission to provide unparalleled cybersecurity services and training. Our founders, Bridges and Hyun Lee Joo, bring over 20 years of combined experience in the industry, ensuring that our clients receive expert guidance and cutting-edge solutions.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Our Team
      </Heading>
      <Text mt={4}>
        <strong>Bridges Mwashighadi:</strong> Co-Founder & CEO
      </Text>
      <Text mt={2}>With a background in network security and a passion for protecting digital landscapes, Bridges leads the company with a focus on innovation and excellence.</Text>
      <Text mt={4}>
        <strong>Hyun Lee Joo:</strong> Co-Founder & Chief Technology Officer (CTO)
      </Text>
      <Text mt={2}>An expert in cybersecurity with extensive experience in incident response and threat detection, Hyun ensures that B&J CyberGuard Solutions remains at the forefront of the industry.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Why Choose Us
      </Heading>
      <Text mt={4}>
        <strong>Expertise:</strong> Over 20 years of combined experience in cybersecurity.
      </Text>
      <Text mt={2}>
        <strong>Customized Solutions:</strong> Tailored services to meet your unique needs.
      </Text>
      <Text mt={2}>
        <strong>Proven Track Record:</strong> Success stories from satisfied clients.
      </Text>
      <Heading as="h2" size="xl" mt={8}>
        Our Values
      </Heading>
      <Text mt={4}>
        <strong>Integrity:</strong> We uphold the highest standards of integrity in all of our actions.
      </Text>
      <Text mt={2}>
        <strong>Innovation:</strong> We pursue innovative solutions to stay ahead of cyber threats.
      </Text>
      <Text mt={2}>
        <strong>Excellence:</strong> We strive for excellence in everything we do, ensuring top-quality services for our clients.
      </Text>
    </Box>
  );
};

export default AboutUs;
