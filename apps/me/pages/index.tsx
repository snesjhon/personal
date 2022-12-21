import {
  Box,
  Button,
  Heading,
  Icon,
  IconButton,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Hero, Footer, Layout, SolidDivider, GithubIcon } from "ui";
import { About, Menu } from "../components";

export default function Me() {
  return (
    <Layout menu={<Menu />}>
      <Box px={{ base: 5, sm: 10, lg: 20 }}>
        <Hero>
          <Box pb={6}>
            <Heading size="lg" mb={4}>
              Hello!
            </Heading>
            <Text mb={4}>
              I&apos;m a developer based out of beautiful{" "}
              <Button variant="linkCyan" href={""} as="a" target="_blank">
                Sacramento
              </Button>
            </Text>
            <Heading size="md" mb={3}>
              Some Things About Me:
            </Heading>
            <UnorderedList mb={3}>
              <ListItem>
                Grew Up In{" "}
                <Button variant="linkCyan" href={""} as="a" target="_blank">
                  Oakland, CA
                </Button>
              </ListItem>
              <ListItem>Started Learning Web Dev through Xanga</ListItem>
              <ListItem>
                Went to UC Davis to study Psychology & Sociology
              </ListItem>
              <ListItem>Working on coll stuff in @Shopify</ListItem>
            </UnorderedList>
            <Heading size="md" mb={3}>
              Follow me
            </Heading>
            <SimpleGrid columns={5} gap="3">
              <IconButton
                as="a"
                aria-label="Github"
                variant="ghost"
                icon={<GithubIcon boxSize={7} color="cyan.700" />}
                href="https://github.com/snesjhon"
                target="_blank"
              />
            </SimpleGrid>
          </Box>
        </Hero>
      </Box>
      <SolidDivider />
      <About />
      <Footer />
    </Layout>
  );
}
