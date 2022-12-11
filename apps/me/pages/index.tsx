import { Box, Heading, Text } from "@chakra-ui/react";
import { Hero, Footer, Layout, SolidDivider } from "ui";
import { Life, Menu } from "../components";

export default function Me() {
  return (
    <Layout menu={<Menu />}>
      <Box px={{ base: 5, sm: 10, lg: 20 }}>
        <Hero>
          <Box pb={6}>
            <Heading size="xl" mb={4}>
              Hello!
            </Heading>
          </Box>
        </Hero>
      </Box>
      <SolidDivider />
      <Life />
      <Footer />
    </Layout>
  );
}
