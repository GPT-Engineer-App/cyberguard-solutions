import { Container, Box, Heading, Text, VStack, HStack, Button, IconButton, Image, SimpleGrid, Link, Input, Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import { FaShieldAlt, FaSearch, FaClipboardCheck, FaExclamationTriangle, FaBook, FaSatelliteDish, FaBolt, FaCog, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <HStack justifyContent="space-between" py={4}>
        <Heading size="lg">B&J CyberGuard Solutions</Heading>
        <HStack spacing={4}>
          <Link href="#home">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="#services">Services</Link>
          <Link href="#training">Training</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#contact">Contact Us</Link>
        </HStack>
      </HStack>

      {/* Main Banner */}
      <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
        <Image src="https://images.unsplash.com/photo-1555399784-17946f55db19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwYmFubmVyfGVufDB8fHx8MTcxNzQxNzI2MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Cybersecurity Banner" borderRadius="md" />
        <Heading mt={4}>Securing Your Digital World</Heading>
        <Text fontSize="lg" mt={2}>
          Expert Cybersecurity Services & Training Solutions
        </Text>
        <HStack spacing={4} mt={4} justifyContent="center">
          <Button colorScheme="blue" as={RouterLink} to="/learn-more">
            Learn More
          </Button>
          <Button colorScheme="green" as={RouterLink} to="/get-started">
            Get Started
          </Button>
        </HStack>
      </Box>

      {/* Introduction Section */}
      <Box py={10} textAlign="center">
        <Text fontSize="xl">Welcome to B&J CyberGuard Solutions, your trusted partner in cybersecurity. We provide top-notch security services and comprehensive training programs to safeguard your digital assets. Whether you're looking to protect your business from cyber threats or enhance your team's security skills, we have the expertise to meet your needs.</Text>
      </Box>

      {/* Featured Services */}
      <Box py={10}>
        <Heading textAlign="center" mb={6}>
          Featured Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <VStack>
            <IconButton aria-label="Penetration Testing" icon={<FaShieldAlt />} size="lg" isRound />
            <Text fontWeight="bold">Penetration Testing</Text>
            <Text textAlign="center">Simulate real-world attacks to identify vulnerabilities.</Text>
            <Button variant="link" colorScheme="blue" as={RouterLink} to="/learn-more">
              Learn More
            </Button>
          </VStack>
          <VStack>
            <IconButton aria-label="Vulnerability Assessment" icon={<FaSearch />} size="lg" isRound />
            <Text fontWeight="bold">Vulnerability Assessment</Text>
            <Text textAlign="center">Identify and address potential security weaknesses.</Text>
            <Button variant="link" colorScheme="blue" as={RouterLink} to="/learn-more">
              Learn More
            </Button>
          </VStack>
          <VStack>
            <IconButton aria-label="Security Audits" icon={<FaClipboardCheck />} size="lg" isRound />
            <Text fontWeight="bold">Security Audits</Text>
            <Text textAlign="center">Comprehensive reviews of your security posture.</Text>
            <Button variant="link" colorScheme="blue" as={RouterLink} to="/learn-more">
              Learn More
            </Button>
          </VStack>
          <VStack>
            <IconButton aria-label="Incident Response" icon={<FaExclamationTriangle />} size="lg" isRound />
            <Text fontWeight="bold">Incident Response</Text>
            <Text textAlign="center">Rapid action plans to mitigate cyber incidents.</Text>
            <Button variant="link" colorScheme="blue" as={RouterLink} to="/learn-more">
              Learn More
            </Button>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Training Programs Highlight */}
      <Box py={10} bg="gray.100" borderRadius="md">
        <Heading textAlign="center" mb={6}>
          Training Programs
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <VStack>
            <IconButton aria-label="Cybersecurity Basics" icon={<FaBook />} size="lg" isRound />
            <Text fontWeight="bold">Cybersecurity Basics</Text>
            <Text textAlign="center">Fundamental principles for beginners.</Text>
            <Button variant="link" colorScheme="blue" as={RouterLink} to="/explore-training">
              Explore Training
            </Button>
          </VStack>
          <VStack>
            <IconButton aria-label="Advanced Threat Detection" icon={<FaSatelliteDish />} size="lg" isRound />
            <Text fontWeight="bold">Advanced Threat Detection</Text>
            <Text textAlign="center">Techniques to identify and respond to advanced threats.</Text>
            <Button variant="link" colorScheme="blue" as={RouterLink} to="/explore-training">
              Explore Training
            </Button>
          </VStack>
          <VStack>
            <IconButton aria-label="Incident Response Training" icon={<FaBolt />} size="lg" isRound />
            <Text fontWeight="bold">Incident Response Training</Text>
            <Text textAlign="center">Effective strategies for managing cyber incidents.</Text>
            <Button variant="link" colorScheme="blue" as={RouterLink} to="/explore-training">
              Explore Training
            </Button>
          </VStack>
          <VStack>
            <IconButton aria-label="Custom Training Solutions" icon={<FaCog />} size="lg" isRound />
            <Text fontWeight="bold">Custom Training Solutions</Text>
            <Text textAlign="center">Tailored training programs to meet your specific needs.</Text>
            <Button variant="link" colorScheme="blue" as={RouterLink} to="/explore-training">
              Explore Training
            </Button>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Testimonials */}
      <Box py={10} textAlign="center">
        <Heading mb={6}>Testimonials</Heading>
        <Text fontSize="lg" fontStyle="italic">
          "B&J CyberGuard Solutions significantly improved our security posture. Their expertise and dedication are unmatched."
        </Text>
        <Text fontWeight="bold" mt={2}>
          John Doe, CEO of SecureTech
        </Text>
      </Box>

      {/* Footer */}
      <Box py={10} bg="gray.200" borderRadius="md" textAlign="center">
        <HStack justifyContent="center" spacing={4} mb={4}>
          <Link href="#home">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="#services">Services</Link>
          <Link href="#training">Training</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#contact">Contact Us</Link>
        </HStack>
        <HStack justifyContent="center" spacing={4} mb={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" isRound />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" isRound />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" isRound />
        </HStack>
        <Text>Stay updated with the latest in cybersecurity.</Text>
        <Input placeholder="Enter your email" size="md" mt={2} />
        <Button colorScheme="blue" mt={2}>
          Subscribe
        </Button>
      </Box>
    </Container>
  );
};

export default Index;
