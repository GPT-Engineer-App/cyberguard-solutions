import { HStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={4}>
      <Link as={NavLink} to="/">
        Home
      </Link>
      <Link as={NavLink} to="/about">
        About Us
      </Link>
      <Link as={NavLink} to="/services">
        Services
      </Link>
      <Link as={NavLink} to="/training">
        Training
      </Link>
      <Link as={NavLink} to="/blog">
        Blog
      </Link>
      <Link as={NavLink} to="/contact">
        Contact Us
      </Link>
    </HStack>
  );
};

export default Navigation;
