import { Box } from "@chakra-ui/react";
import { About, Footer, Layout, SolidDivider } from "ui";
import { Menu } from "../components";

export default function Me() {
  return (
    <Layout menu={<Menu />}>
      <Box px={{ base: 5, sm: 10, lg: 20 }}>
        <About />
      </Box>
      <Footer />
    </Layout>
  );
}
