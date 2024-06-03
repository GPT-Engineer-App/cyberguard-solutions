import { Box, Heading, Text, VStack, Input, Textarea, Button } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Box p={10}>
      <VStack spacing={8}>
        <Heading>Contact Us</Heading>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Subject" />
        <Textarea placeholder="Message" />
        <Button colorScheme="teal">Submit</Button>
        <Text>Email: bridges.cybersec@gmail.com</Text>
      </VStack>
    </Box>
  );
};

export default ContactUs;
