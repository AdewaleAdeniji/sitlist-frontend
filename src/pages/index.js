import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  Spacer,
  Link,
} from '@chakra-ui/react';

const LandingPage = () => {
  return (
    <Box bg="gray.100">
      <Header />

      <Center py={20}>
        <Box maxW="lg" textAlign="center">
          {/* ...rest of the content */}
        </Box>
      </Center>

      <Box maxW="6xl" mx="auto" mt={16} p={8}>
        {/* ...features section */}
      </Box>

      <Footer />
    </Box>
  );
};

const Header = () => {
  return (
    <Flex bg="teal.500" p={4} align="center">
      <Box>
        <Heading as="h1" size="lg" color="white">
          Waitlist SAAS
        </Heading>
      </Box>
      <Spacer />
      <Stack direction="row" spacing={4}>
        <Link color="white">Home</Link>
        <Link color="white">Features</Link>
        <Link color="white">Pricing</Link>
        <Button colorScheme="teal">Get Started</Button>
      </Stack>
    </Flex>
  );
};

const Footer = () => {
  return (
    <Box bg="gray.300" py={8} textAlign="center">
      <Text>&copy; 2023 Waitlist SAAS. All rights reserved.</Text>
    </Box>
  );
};

// ...FeatureCard component and export statement
export default LandingPage;