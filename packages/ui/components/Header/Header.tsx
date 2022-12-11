import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  menu: JSX.Element;
}
export function Header({ menu }: Props) {
  const headerSize = useBreakpointValue({ base: "3xl", xs: "4xl" });

  return (
    <Box px={{ base: 5, sm: 10, lg: 20 }}>
      <Box
        display={{ md: "flex" }}
        pb={5}
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Heading size={headerSize} whiteSpace="nowrap">
          Jhon Salazar
        </Heading>
        {menu}
      </Box>
    </Box>
  );
}
