import {
  Box,
  Center,
  Divider,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

export function Life() {
  const headerSize = useBreakpointValue({ base: "2xl", xs: "4xl" });
  return (
    <>
      <Box py={10}>
        <Center>
          <Heading size={headerSize}>About Me</Heading>
        </Center>
      </Box>
      <Divider border="1px solid black" borderColor="black" opacity={1} />
      <SimpleGrid columns={1}>
        <Box py={{ base: 0, md: 20 }}>
          <Job
            title="First Tattoo"
            year="Jan 2023"
            company="Reclamare Gallery and Tattoo"
            link="http://www.reclamareart.com/"
          />
          <Job
            title="Co-Founder"
            year="2020 - Present"
            company="RedOak"
            link="https://redoakui.com/"
          />
          <Job
            title="Sr. UI Engineer"
            year="2018 - Present"
            company="conDati"
            link="https://www.condati.com/"
          />
        </Box>
      </SimpleGrid>
    </>
  );
}

function Job({
  year,
  company,
  title,
  link,
}: {
  year: string;
  company: string;
  title: string;
  link: string;
}) {
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
        <Text fontSize="sm">{year}</Text>
      </Box>
      <Box pt={9} pb={20} pl={10}>
        <Link href={link} isExternal fontSize="sm" color="grey">
          {company}
        </Link>
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
      </Box>
    </SimpleGrid>
  );
}
