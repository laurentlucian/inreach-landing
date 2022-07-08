import { Button, Divider, Flex, HStack, Image, Link, Stack, Text } from '@chakra-ui/react';
import Logo from '/favicon.svg';

const Footer = () => {
  return (
    <Flex direction="column" align="center" w="100%" bg="#202020" mt="40px" pt="60px">
      <Stack align="center" w={['300px', 'auto']} spacing="30px">
        <Text as="h4" fontSize="30px" fontWeight="600" textAlign={{ base: 'center', lg: 'unset' }}>
          Unlock your creators'{' '}
          <Text as="span" color="brand.200">
            full potential
          </Text>
        </Text>
        <Button as="a" href="https://forms.gle/3WsV65JG84iX14RE6" target="_blank" colorScheme="brand" w="143px">
          Book a demo
        </Button>
      </Stack>
      <Divider mt="60px" mb="20px" />
      <Flex w="100%" align="center" justify="space-between" px="40px" pb="20px">
        <HStack>
          <Image src={Logo} boxSize="20px" />
          <Text as="h1" fontSize="20px">
            <Text as="span" color="brand.200">
              in
            </Text>
            Reach
          </Text>
        </HStack>
        <Link href="https://app.inreach.gg/privacy-policy" fontSize="12px">
          Privacy Policy
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
