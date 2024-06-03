import { Box, Heading, Text } from "@chakra-ui/react";

const LearnMore = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="2xl">
        Learn More
      </Heading>
      <Text mt={4}>Discover more about our services and how we can help protect your digital assets.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Penetration Testing
      </Heading>
      <Text mt={4}>Simulate real-world attacks to identify vulnerabilities in your systems before malicious hackers can exploit them. Our experts use advanced techniques to uncover weaknesses and provide actionable recommendations to strengthen your security posture.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Vulnerability Assessment
      </Heading>
      <Text mt={4}>Identify potential security weaknesses in your systems and networks. We provide detailed reports and prioritize risks to help you address vulnerabilities effectively.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Security Audits
      </Heading>
      <Text mt={4}>Conduct comprehensive reviews of your security posture to ensure compliance with industry standards and best practices. We provide actionable insights to enhance your security.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Incident Response
      </Heading>
      <Text mt={4}>Develop rapid action plans to manage and mitigate cyber incidents. Our team of experts is available 24/7 to help you recover from attacks and minimize damage.</Text>
    </Box>
  );
};

export default LearnMore;
