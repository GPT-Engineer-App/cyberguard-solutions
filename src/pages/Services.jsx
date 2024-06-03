import { Box, Heading, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="2xl">
        Our Services
      </Heading>
      <Text mt={4}>At B&J CyberGuard Solutions, we offer a comprehensive range of cybersecurity services designed to protect your business from ever-evolving cyber threats.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Penetration Testing
      </Heading>
      <Text mt={4}>Our penetration testing service simulates real-world cyber attacks to identify vulnerabilities in your systems before malicious hackers can exploit them. Our experts use advanced techniques to uncover weaknesses and provide actionable recommendations to strengthen your security posture.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Vulnerability Assessment
      </Heading>
      <Text mt={4}>Our vulnerability assessment service identifies potential security weaknesses in your systems and networks. We provide detailed reports and prioritize risks to help you address vulnerabilities effectively.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Security Audits
      </Heading>
      <Text mt={4}>Our security audit service offers a thorough review of your current security measures, ensuring compliance with industry standards and best practices. We provide comprehensive reports and actionable insights to enhance your security.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Incident Response
      </Heading>
      <Text mt={4}>Our incident response service provides rapid and effective action plans to manage and mitigate cyber incidents. Our team of experts is available 24/7 to help you recover from attacks and minimize damage.</Text>
      <Heading as="h2" size="xl" mt={8}>
        Additional Services
      </Heading>
      <Text mt={4}>
        <strong>Compliance Management:</strong> Ensure your organization meets all regulatory requirements and industry standards.
      </Text>
      <Text mt={2}>
        <strong>Security Awareness Training:</strong> Educate your employees on best practices to prevent cyber threats.
      </Text>
      <Text mt={2}>
        <strong>Threat Intelligence:</strong> Stay informed about the latest cyber threats and how to defend against them.
      </Text>
    </Box>
  );
};

export default Services;
