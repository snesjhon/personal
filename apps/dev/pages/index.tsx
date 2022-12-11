import { Box } from "@chakra-ui/react";
import { About, Footer, Layout, SolidDivider } from "ui";
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
        <About />
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
