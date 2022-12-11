import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Footer, Hero, Layout, SolidDivider } from "ui";
import {
  Experience,
  Goals,
  Projects,
  Sidebar,
  Technologies,
  Menu,
  Work,
} from "../components";

export default function Dev() {
  return (
    <Layout sidebar={<Sidebar />} menu={<Menu />}>
      <Box px={{ base: 5, sm: 10, lg: 20 }}>
        <Hero imageText>
          <Box pb={6}>
            <Heading size="xl" mb={4}>
              Software Engineer
            </Heading>
            <Heading
              position="relative"
              size="xl"
              _before={{ content: "'+'", position: "absolute", left: "-2rem" }}
            >
              Music Enthusiast
            </Heading>
          </Box>
          <Text>
            I specialize in creating and maintaining complex UI infrastructure.
            Oh yea, I also collect vinyls and love learning new things on
            youtube at 4am.
          </Text>
          <br />
          <Button
            as="a"
            href="mailto:snesjhon@gmail?subject=Hey Jhon Let's Talk"
            target="_blank"
            variant="cyan700"
          >
            Get in touch
          </Button>
        </Hero>
        <Technologies />
      </Box>
      <SolidDivider />
      <Experience />
      <SolidDivider />
      <Work />
      <SolidDivider />
      <Projects />
      <Goals />
      <SolidDivider />
      <Footer />
    </Layout>
  );
}
