import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import Nav from './Nav';
import Footer from './Footer';

type LayoutProps = {};

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Flex direction="column" align="center" maxW="1135px" mx="auto">
        <Nav />
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
