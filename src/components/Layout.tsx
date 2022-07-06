import { Box, Button, Container, Divider, Flex, HStack, Image, Link, Stack, Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import Nav from './Nav';
import Logo from '../public/favicon.svg';

type LayoutProps = {};

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Flex direction="column" align="center" maxW="1135px" mx="auto">
        {/* <Box w={{ base: '100vw', sm: '450px', md: '750px', xl: '1135px' }} border="1px solid #E74B2D" px={13}> */}
        <Nav />
        {children}
      </Flex>
      <Flex direction="column" w="100%" bg="#202020" mt="40px" pt="60px">
        <Stack align="center">
          <Text as="h4" fontSize="30px" fontWeight="600">
            Unlock your creators'{' '}
            <Text as="span" color="brand.200">
              full potential
            </Text>
            .
          </Text>
          <Button colorScheme="brand" w="143px" disabled>
            Book a demo
          </Button>
        </Stack>
        <Divider mt="60px" mb="20px" />
        <Flex justify="space-between" px="40px" pb="10px">
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
          <Link href="https://app.inreach.gg/privacy-policy" fontSize="12px">
            Privacy Policy
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Layout;
