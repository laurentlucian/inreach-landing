import { Button, Flex, HStack, Image, Link, Text, useMediaQuery } from '@chakra-ui/react';
import Logo from '/favicon.svg';

const Nav = () => {
  const [isLargeScreen] = useMediaQuery('(min-width: 1050px)');
  return (
    <Flex py={{ base: '15px', lg: '20px' }} w="100%" px={{ base: '15px', lg: '60px' }} justify="space-between">
      <HStack>
        <Image src={Logo} boxSize="20px" />
        <Text as="h1" fontSize="20px">
          <Text as="span" color="brand.200">
            in
          </Text>
          Reach
        </Text>
      </HStack>
      {isLargeScreen && (
        <HStack spacing={4}>
          <Button as="a" textDecoration="none" href="https://app.inreach.gg/" px={4} fontWeight="normal">
            Login
          </Button>
          <Button as="a" href="https://forms.gle/3WsV65JG84iX14RE6" target="_blank" px={5} colorScheme="brand">
            Try for free
          </Button>
        </HStack>
      )}
    </Flex>
  );
};

export default Nav;
