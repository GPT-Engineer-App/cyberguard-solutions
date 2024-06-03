import { Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="2xl">
        Contact Us
      </Heading>
      <Text mt={4}>Feel free to reach out to us for any inquiries or support.</Text>
      <FormControl mt={8}>
        <FormLabel>Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Subject</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Message</FormLabel>
        <Textarea />
      </FormControl>
      <Button colorScheme="blue" mt={4}>
        Submit
      </Button>
      <Text mt={8}>
        <strong>Email:</strong> bridgesmwashighadi2@gmail.com
      </Text>
    </Box>
  );
};

export default ContactUs;
