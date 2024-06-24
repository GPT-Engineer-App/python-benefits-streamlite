import { Container, Text, VStack, Heading, Box, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={6}>Benefits of Python and Streamlit</Heading>
        <Box p={4} borderWidth={1} borderRadius="lg" w="100%">
          <Heading as="h2" size="lg" mb={4}>Python</Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Easy to learn and use
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Versatile and powerful
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Extensive libraries and frameworks
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Strong community support
            </ListItem>
          </List>
        </Box>
        <Box p={4} borderWidth={1} borderRadius="lg" w="100%">
          <Heading as="h2" size="lg" mb={4}>Streamlit</Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Quick to develop and deploy
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Interactive and visually appealing
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Integrates well with Python
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Open-source and free
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;