import {
  Box,
  Center,
  Divider,
  Heading,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { LifeEvent, LifeEventProps } from "./components";

const events: LifeEventProps[] = [
  {
    heading: "Amtrak",
    link: "amtrak.com",
    title: "Cross Country Train Trip Through America",
    year: "2022",
    images: [
      "/images/about/myavatar.jpg",
      "/images/about/myavatar.jpg",
      "/images/about/myavatar.jpg",
    ],
  },
];

export function About() {
  const headerSize = useBreakpointValue({ base: "xl" });
  return (
    <>
      <Box py={10}>
        <Center>
          <Heading size={headerSize}>Recent Events</Heading>
        </Center>
      </Box>
      <Divider border="1px solid black" borderColor="black" opacity={1} />
      <SimpleGrid columns={1}>
        <Box py={{ base: 0, md: 20 }}>
          {events.map((event) => (
            <LifeEvent key={event.title} {...event} />
          ))}
        </Box>
      </SimpleGrid>
    </>
  );
}
