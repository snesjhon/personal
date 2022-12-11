import {
  Box,
  Container,
  Divider,
  Flex,
  Slide,
  useColorModeValue,
  VStack,
  Heading,
  IconButton,
  Fade,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";

import { ArrowUpIcon } from "@chakra-ui/icons";
import { Header } from "../Header";
import { SolidDivider } from "../SolidDivider";

interface Props {
  children: JSX.Element | JSX.Element[];
  menu: JSX.Element;
  sidebar?: JSX.Element;
}

export function Layout({ children, sidebar, menu }: Props) {
  const [showHeader, setShowHeader] = useState(false);
  const borderColor = useColorModeValue("gray.800", "#fafafa");
  const headerBg = useColorModeValue("#fafafa", "gray.800");
  // const loggin = debounce(() => {
  //   if (window.scrollY > 200 && !showHeader) {
  //     setShowHeader(true);
  //   } else {
  //     setShowHeader(false);
  //   }
  // }, 30);

  // useEffect(() => {
  //   window.addEventListener("scroll", loggin);
  //   return () => {
  //     window.removeEventListener("scroll", loggin);
  //   };
  // }, [loggin]);

  return (
    <Container
      position="relative"
      maxW="container.lg"
      my={{ base: 0, sm: 3 }}
      px={{ base: 0, sm: 4 }}
    >
      {sidebar && sidebar}
      <Box position="absolute" right="0">
        <VStack
          position="fixed"
          bottom="30%"
          display={{ base: "none", xl: "block" }}
        >
          <Box>
            <Fade in={showHeader}>
              <IconButton
                icon={<ArrowUpIcon />}
                aria-label="Up Icon"
                border="1px solid"
                variant="ghost"
                color="cyan.700"
                boxSize={10}
                onClick={() =>
                  document.documentElement.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              />
            </Fade>
          </Box>
        </VStack>
      </Box>
      <Box border="2px solid" borderColor={borderColor}>
        <Slide
          direction="top"
          in={showHeader}
          style={{
            position: "sticky",
            zIndex: 10,
          }}
        >
          <Box
            bg={headerBg}
            py={3}
            px={{ base: 8, md: 10 }}
            w="100%"
            borderBottom="2px solid"
            borderColor={borderColor}
          >
            <Flex
              px={{ md: 4 }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Heading size="md">JS</Heading>
              {menu}
            </Flex>
          </Box>
        </Slide>
        <Header menu={menu} />
        <SolidDivider />
      </Box>
      {children}
    </Container>
  );
}
