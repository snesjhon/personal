import { Box, Text, Link, SimpleGrid, Image } from "@chakra-ui/react";

export interface LifeEventProps {
  year: string;
  heading: string;
  title: string;
  link: string;
  images?: string[];
}

export function LifeEvent({
  year,
  heading,
  title,
  link,
  images,
}: LifeEventProps) {
  return (
    <SimpleGrid columns={2}>
      <Box
        borderRight="1px solid black"
        textAlign="right"
        pt={10}
        pb={20}
        pr={10}
        position="relative"
        _after={{
          content: "''",
          height: "13px",
          width: "13px",
          position: "absolute",
          bgColor: "cyan.700",
          top: "-3px",
          right: "-7px",
          marginTop: 12,
          borderRadius: "50%",
        }}
      >
        <Text>{year}</Text>
      </Box>
      <Box pt={9} pb={10} pl={10}>
        <Link href={link} isExternal fontSize="sm" color="grey">
          {heading}
        </Link>
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
      </Box>
    </SimpleGrid>
  );
}
