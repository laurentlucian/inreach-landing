import { Box, Button, Flex, Heading, HStack, Image, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import Layout from './components/Layout';
import SNACK from './assets/logos/snackclub.png';
import PH from './assets/logos/ph.png';
import SPACE from './assets/logos/spacecaps.png';
import OUTPLAY from './assets/logos/outplay.png';
import DRUID from './assets/logos/druid.png';
import LOUD from './assets/logos/loud.png';
import DEMO1 from './assets/demos/demo-1.png';
import DEMO2 from './assets/demos/demo-2.png';
import DEMO3 from './assets/demos/demo-3.png';
import DEMO4 from './assets/demos/demo-4.png';
import BG from './assets/bg.svg';
import FAST from './assets/icons/fast.svg';
import CHECK from './assets/icons/check.svg';
import DOTS from './assets/icons/dots.svg';
import BRUNO from './assets/bruno-avatar.png';
import CLAUDIO from './assets/claudio-avatar.png';
import MICHAEL from './assets/michael-avatar.png';
import FB from './assets/socials/facebook.png';
import TT from './assets/socials/twitter.png';
import YT from './assets/socials/youtube.png';
import TTV from './assets/socials/twitch.png';
import TK from './assets/socials/tik_tok.png';

const App = () => {
  const [isLargeScreen] = useMediaQuery('(min-width: 1050px)');

  return (
    <Layout>
      <Flex direction="column" align="center" mx="auto" pt="40px">
        <Heading size={['md', 'lg']} textAlign="center" lineHeight="45px">
          Never Wait On{' '}
          <Text as="span" color="brand.200">
            Your Creators
          </Text>{' '}
          To
          <br /> Send Metrics Again
        </Heading>
        <Text textAlign="center" whiteSpace="normal" my="15px">
          {isLargeScreen ? (
            <>
              Unlock your influencer marketing campaign by <br />
              collecting metrics directly from the social media as your <br />
              campaign runs.
            </>
          ) : (
            <>
              Unlock your influencer marketing <br />
              campaign by collecting metrics directly <br />
              from the social media as your campaign <br />
              runs.
            </>
          )}
        </Text>
        <Button
          as="a"
          href="https://forms.gle/3WsV65JG84iX14RE6"
          target="_blank"
          textDecoration="none"
          colorScheme="brand"
          px="25px"
        >
          Request a demo
        </Button>
        <Stack align="center" mt="30px">
          <Text fontWeight="bold" fontSize="12px" color="#A3A3A3">
            TRUSTED BY LEADERS IN INFLUENCER MARKETING
          </Text>
          <HStack spacing={7}>
            {/* <Image w="120px" src={SNACK} /> */}
            {/* <Image w="77px" src={SPACE} /> */}
            <Image w="30px" src={PH} />
            <Image w="105px" src={OUTPLAY} />
            <Image w="40px" src={DRUID} />
            <Image w="70px" src={LOUD} />
          </HStack>
        </Stack>
      </Flex>
      <Stack
        align="center"
        mt={['70px', '20px']}
        pt={['70px', '20px']}
        position="relative"
        w="100%"
        bg={['#202020', 'transparent']}
      >
        {isLargeScreen && (
          <>
            <Image w="1000px" src={DEMO1} />
            <Image zIndex="-1" w="1300px" top="100px" src={BG} position="absolute" />
          </>
        )}

        <Text as="h4" textAlign="center" fontSize={['18px', '24px']} fontWeight={600}>
          {isLargeScreen ? (
            <>
              <Text as="span" color="brand.200">
                in
              </Text>
              Reach is a data platform the
              <br /> built for the{' '}
              <Text as="span" color="brand.200">
                next generation of creators
              </Text>
            </>
          ) : (
            <>
              <Text as="span" color="brand.200">
                in
              </Text>
              Reach is a data platform <br />
              built for the{' '}
              <Text as="span" color="brand.200">
                next generation of creators
              </Text>
            </>
          )}
        </Text>
        <Text fontSize="14px" textAlign="center">
          Connect your creators and visualize their reach. {!isLargeScreen && <br />} No PhD required.
        </Text>
        <Stack
          direction={['column', 'column', 'row']}
          spacing={['35px', '150px']}
          pt={['10px', '40px']}
          pb={['40px', '30px']}
        >
          <Stack align="center">
            <Image w="34px" src={FAST} />
            <Text fontSize="24px" fontWeight={600}>
              Fast
            </Text>
            <Text textAlign="center" fontSize="14px">
              Collect metrics and build reports <br /> super fast. In minutes, not days or
              <br /> weeks.
            </Text>
          </Stack>
          <Stack align="center">
            <Image w="38px" src={CHECK} />
            <Text fontSize="24px" fontWeight={600}>
              Easy
            </Text>
            <Text textAlign="center" fontSize="14px">
              Plug 'n play and get the metrics you <br /> need. No complex knowledge <br /> needed.
            </Text>
          </Stack>
          <Stack align="center">
            <Image w="46px" src={DOTS} />
            <Text fontSize="24px" fontWeight={600}>
              Secure
            </Text>
            <Text textAlign="center" fontSize="14px">
              Built with privacy in mind, your data
              <br /> will never leave our servers.
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Flex
        mt="60px"
        direction={{ base: 'column-reverse', lg: 'row' }}
        px={{ base: '20px', lg: '0px' }}
        w={{ base: 'auto', lg: '1000px' }}
      >
        <Image src={DEMO2} mr={{ base: '0px', lg: '150px' }} mt={{ base: '20px', lg: '0px' }} />
        <Flex direction="column">
          <Text fontSize="14px" color="brand.200" fontWeight="500">
            VISUALIZE
          </Text>
          <Text fontSize="20px" lineHeight="30px" fontWeight="600">
            See the metrics that matter <br /> without the fluffiness.
          </Text>
          <Flex direction="column" mt="25px" pt="23px" pb="12px" borderRadius="10px" px="17px" bg="#202020">
            <Image src={LOUD} w="66px" />
            <Text mt="12px" fontSize="13px">
              ”in.reach is my go to. Literally will save you
              <br /> thousands a month in wasted aggregating
              <br /> metrics from multiple sources”
            </Text>
            <Flex mt="20px">
              <Image borderRadius="50px" boxSize="40px" src={BRUNO} />
              <Flex ml="15px" direction="column">
                <Text fontSize="13px" fontWeight="500">
                  Bruno Playhard
                </Text>
                <Text fontSize="13px">CEO</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        px={{ base: '20px', lg: '0px' }}
        w={{ base: 'auto', lg: '1000px' }}
        mt={{ base: '45px', lg: '100px' }}
      >
        <Flex direction="column">
          <Text fontSize="14px" color="brand.200" fontWeight="500">
            MANAGE
          </Text>
          <Text fontSize="20px" lineHeight="30px" fontWeight="600">
            Take advantage of our <br /> inventory for creators.
          </Text>
          <Flex direction="column" mt="25px" pt="15px" pb="12px" borderRadius="10px" px="17px" bg="#202020">
            <Image src={DRUID} w="35px" />
            <Text mt="12px" fontSize="13px">
              ”I used to spend 15-20 hrs/wk managing our campaigns. With in.reach, it cut it to 5-8 hrs/ wk.”
            </Text>
            <Flex mt="20px">
              <Image borderRadius="50px" boxSize="40px" src={CLAUDIO} />
              <Flex ml="15px" direction="column">
                <Text fontSize="13px" fontWeight="500">
                  Claudio Lima
                </Text>
                <Text fontSize="13px">Founder/CEO</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Image src={DEMO3} mt={{ base: '40px', lg: '0px' }} />
      </Flex>
      <Flex
        mt={{ base: '60px', lg: '90px' }}
        direction={{ base: 'column-reverse', lg: 'row' }}
        px={{ base: '20px', lg: '0px' }}
        w={{ base: 'auto', lg: '1000px' }}
      >
        <Image src={DEMO4} mr={{ base: '0px', lg: '150px' }} mt={{ base: '30px', lg: '0px' }} />
        <Flex direction="column">
          <Text fontSize="14px" color="brand.200" fontWeight="500">
            ANALYZE
          </Text>
          <Text fontSize="20px" lineHeight="30px" fontWeight="600">
            Find actionable insights, and <br /> generate beautiful reports for
            <br /> your clients.
          </Text>
          <Flex direction="column" mt="25px" pt="23px" pb="12px" borderRadius="10px" px="17px" bg="#202020">
            <Image src={OUTPLAY} w="70px" />
            <Text mt="12px" fontSize="13px">
              ”Since started using in.reach, our clients have
              <br /> been more happier and satisfied with the
              <br /> results we have shown”
            </Text>
            <Flex mt="20px">
              <Image borderRadius="50px" boxSize="40px" src={MICHAEL} />
              <Flex ml="15px" direction="column">
                <Text fontSize="13px" fontWeight="500">
                  Michael Valore
                </Text>
                <Text fontSize="13px">Founder/CEO</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        borderRadius="10px"
        mt={{ base: '30px', lg: '100px' }}
        justify="space-between"
        align="center"
        p="20px"
        direction={['column', 'row']}
        w={{ base: 'auto', lg: '926px' }}
        sx={{
          background: 'linear-gradient(96.96deg, rgba(43, 235, 169, 0.2) 1.34%, rgba(0, 0, 0, 0) 53.7%), #202020;',
        }}
      >
        <Text fontWeight="600" fontSize="20px" textAlign={['center', 'unset']}>
          Certified marketing partner of <br /> leading social platforms
        </Text>
        <HStack
          display={{ base: 'grid', lg: 'flex' }}
          gridTemplate="1fr 1fr / 1fr 1fr 1fr"
          gridRowGap="10px"
          gridColumnGap={{ base: '25px', lg: '0px' }}
          spacing={{ base: '0px', lg: '25px' }}
          mt={{ base: '25px', sm: '0px', lg: '0px' }}
          ml={{ base: '0px', sm: '20px', lg: '0px' }}
        >
          <Image src={FB} />
          <Image src={TT} />
          <Image src={YT} />
          <Image src={TTV} />
          <Image src={TK} />
        </HStack>
      </Flex>
    </Layout>
  );
};

export default App;
