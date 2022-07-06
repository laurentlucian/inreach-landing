import { Button, Flex, HStack, Image, Link, Text } from '@chakra-ui/react';
import Logo from '../public/favicon.svg';

const Nav = () => {
  return (
    <Flex py={5} w="100%" px="60px" justify="space-between">
      <HStack>
        <Image src={Logo} boxSize="20px" />
        {/* <Text as="h1" fontSize="20px">
          <Text as="span" color="brand.200">
            in
          </Text>
          .reach
        </Text> */}
        <Text as="h1" fontSize="20px">
          InReach
        </Text>
      </HStack>
      <HStack spacing={4}>
        <Button as="a" textDecoration="none" href="https://app.inreach.gg/" px={4} fontWeight="normal">
          Login
        </Button>
        <Button px={5} colorScheme="brand" disabled>
          Try for free
        </Button>
      </HStack>
    </Flex>
  );
};

export default Nav;
