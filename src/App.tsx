import { Box, Button, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import Layout from './components/Layout';
import SNACK from './public/logos/snackclub.png';
import PH from './public/logos/ph.png';
import SPACE from './public/logos/spacecaps.png';
import OUTPLAY from './public/logos/outplay.png';
import DRUID from './public/logos/druid.png';
import LOUD from './public/logos/loud.png';
import DEMO1 from './public/demos/demo-1.png';
import DEMO2 from './public/demos/demo-2.png';
import DEMO3 from './public/demos/demo-3.png';
import DEMO4 from './public/demos/demo-4.png';
import BG from './public/bg.svg';
import FAST from './public/icons/fast.png';
import CHECK from './public/icons/check.png';
import DOTS from './public/icons/dots.png';
import BRUNO from './public/bruno-avatar.png';
import CLAUDIO from './public/claudio-avatar.png';
import MICHAEL from './public/michael-avatar.png';
import FB from './public/socials/facebook.png';
import TT from './public/socials/twitter.png';
import YT from './public/socials/youtube.png';
import DC from './public/socials/discord.png';
import TTV from './public/socials/twitch.png';
import TK from './public/socials/tik_tok.png';

const App = () => {
  return (
    <Layout>
      <Flex direction="column" align="center" mx="auto" pt="40px" w="60ch">
        <Heading size="lg" textAlign="center" lineHeight="45px">
          Never Wait On{' '}
          <Text as="span" color="brand.200">
            Your Creators
          </Text>{' '}
          To
          <br /> Send Metrics Again
        </Heading>
        <Text textAlign="center" whiteSpace="normal" mb="15px">
          Unlock your influencer marketing campaign by
          <br /> collecting metrics directly from the social media as your
          <br /> campaign runs.
        </Text>
        <Button colorScheme="brand" px="25px" disabled>
          Request a demo
        </Button>
        <Stack align="center" mt="30px">
          <Text fontWeight="bold" fontSize="12px" color="#A3A3A3">
            TRUSTED BY LEADERS IN INFLUENCER MARKETING
          </Text>
          <HStack spacing={7}>
            {/* <Image src={SNACK} /> */}
            {/* <Image src={SPACE} /> */}
            <Image src={OUTPLAY} />
            <Image src={DRUID} />
            <Image src={PH} />
            <Image src={LOUD} />
          </HStack>
        </Stack>
      </Flex>
      <Stack align="center" pt="40px" position="relative">
        <Box w="800px">
          <Image src={DEMO1} />
        </Box>
        <Box w="1000px">
          <Image zIndex="-1" top="100px" src={BG} position="absolute" />
        </Box>
        <Text as="h4" textAlign="center" fontSize="24px" fontWeight={600}>
          <Text as="span" color="brand.200">
            in
          </Text>
          .reach is a data platform
          <br /> built for{' '}
          <Text as="span" color="brand.200">
            the next generation of creators
          </Text>
          .
        </Text>
        <Text fontSize="14px">Connect your creators and visualize their reach. No PhD required.</Text>
        <HStack spacing="60px" pt="40px">
          <Stack align="center">
            <Image src={FAST} />
            <Text fontSize="24px" fontWeight={600}>
              Fast
            </Text>
            <Text textAlign="center" fontSize="14px">
              Collect metrics and build reports <br /> super fast. In minutes, not days or
              <br /> weeks.
            </Text>
          </Stack>
          <Stack align="center">
            <Image src={CHECK} />
            <Text fontSize="24px" fontWeight={600}>
              Easy
            </Text>
            <Text textAlign="center" fontSize="14px">
              Plug 'n play and get the metrics you <br /> need. No complex knowledge <br /> needed.
            </Text>
          </Stack>
          <Stack align="center">
            <Image src={DOTS} />
            <Text fontSize="24px" fontWeight={600}>
              Secure
            </Text>
            <Text textAlign="center" fontSize="14px">
              Built with privacy in mind, your data
              <br /> will never leave our servers.
            </Text>
          </Stack>
        </HStack>
      </Stack>
      <Flex mt="60px" w="980px">
        <Image src={DEMO2} mr="90px" />
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
      <Flex mt="100px">
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
              ”I used to spend 15-20 hrs/wk managing our <br /> campaigns. With in.reach, it cut it to 5-8 hrs/
              <br />
              wk.”
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
        <Image src={DEMO3} />
      </Flex>
      <Flex mt="60px" w="980px">
        <Image src={DEMO4} mr="90px" />
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
        mt="30px"
        justify="space-between"
        p="20px"
        w="926px"
        sx={{
          background: 'linear-gradient(96.96deg, rgba(43, 235, 169, 0.2) 1.34%, rgba(0, 0, 0, 0) 53.7%), #202020;',
        }}
      >
        <Text fontWeight="600" fontSize="20px">
          Certified marketing partner of <br /> leading social platforms
        </Text>
        <HStack spacing="25px">
          <Image src={FB} />
          <Image src={TT} />
          <Image src={YT} />
          <Image src={DC} />
          <Image src={TTV} />
          <Image src={TK} />
          <Image />
        </HStack>
      </Flex>
    </Layout>
  );
};

export default App;
