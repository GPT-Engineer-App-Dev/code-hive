import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.700" color="white" padding={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">CodeLearn</Heading>
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Courses</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.500" color="white" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Learn to Code, Anytime, Anywhere</Heading>
        <Text fontSize="xl" mb={6}>Join our community and start your coding journey today.</Text>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </Box>

      {/* Featured Courses Section */}
      <Container maxW="container.xl" py={20}>
        <Heading as="h3" size="xl" mb={10} textAlign="center">Featured Courses</Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          <Box bg="gray.100" p={5} borderRadius="md" boxShadow="md" width="300px" mb={10}>
            <Image src="course1.jpg" alt="Course 1" mb={4} borderRadius="md" />
            <Heading as="h4" size="md" mb={2}>Course Title 1</Heading>
            <Text mb={4}>Brief description of the course.</Text>
            <Button colorScheme="teal">Learn More</Button>
          </Box>
          <Box bg="gray.100" p={5} borderRadius="md" boxShadow="md" width="300px" mb={10}>
            <Image src="course2.jpg" alt="Course 2" mb={4} borderRadius="md" />
            <Heading as="h4" size="md" mb={2}>Course Title 2</Heading>
            <Text mb={4}>Brief description of the course.</Text>
            <Button colorScheme="teal">Learn More</Button>
          </Box>
          <Box bg="gray.100" p={5} borderRadius="md" boxShadow="md" width="300px" mb={10}>
            <Image src="course3.jpg" alt="Course 3" mb={4} borderRadius="md" />
            <Heading as="h4" size="md" mb={2}>Course Title 3</Heading>
            <Text mb={4}>Brief description of the course.</Text>
            <Button colorScheme="teal">Learn More</Button>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box bg="blue.700" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center" wrap="wrap">
            <Text>&copy; 2023 CodeLearn. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;