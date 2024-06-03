import { Box, Heading, Text, Link } from "@chakra-ui/react";

const Blog = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="2xl">
        Blog
      </Heading>
      <Text mt={4}>Welcome to the B&J CyberGuard Solutions Blog! Here, we share the latest trends, tips, and news in the world of cybersecurity. Stay informed and enhance your knowledge with our expert insights.</Text>
      <Box mt={8}>
        <Heading as="h2" size="xl">
          Top 10 Cybersecurity Tips for Small Businesses
        </Heading>
        <Text mt={2}>Practical advice to protect your business from cyber threats. Small businesses are often targeted by cybercriminals due to their perceived lack of security. This post provides actionable tips to help small businesses bolster their cybersecurity measures.</Text>
        <Link href="/blog/post-1" color="blue.500" mt={2}>
          Read More
        </Link>
      </Box>
      <Box mt={8}>
        <Heading as="h2" size="xl">
          Understanding the Latest Ransomware Threats
        </Heading>
        <Text mt={2}>Insights into recent ransomware attacks and how to defend against them. Ransomware attacks are on the rise, and understanding how they work is crucial for defending your organization. This post delves into recent ransomware trends and offers strategies for protection.</Text>
        <Link href="/blog/post-2" color="blue.500" mt={2}>
          Read More
        </Link>
      </Box>
      <Box mt={8}>
        <Heading as="h2" size="xl">
          The Importance of Regular Security Audits
        </Heading>
        <Text mt={2}>How regular security audits can strengthen your cybersecurity posture. Regular security audits are essential for identifying and addressing vulnerabilities in your systems. This post discusses the benefits of security audits and how they can help keep your organization secure.</Text>
        <Link href="/blog/post-3" color="blue.500" mt={2}>
          Read More
        </Link>
      </Box>
    </Box>
  );
};

export default Blog;
