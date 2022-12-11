import {
  Box,
  Button,
  Heading,
  Img,
  Spinner,
  Square,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export function About() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const beforeItem = useBreakpointValue({
    base: "-10%",
    sm: "-5%",
    md: "-15%",
  });
  const afterItemTop = useBreakpointValue({
    base: "-10%",
    sm: "-8%",
    md: "45%",
  });
  const afterItemRight = useBreakpointValue({
    base: 0,
    sm: 0,
    md: "-30%",
  });
  const borderColor = useColorModeValue("#fafafa", "gray.800");

  useEffect(() => {
    if (!isLoaded && imageRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [isLoaded]);

  return (
    <Box
      display={{ md: "grid" }}
      justifyContent="space-between"
      py={20}
      gridGap={{ md: "6rem", lg: "8rem" }}
      gridTemplateColumns={{ md: "1fr 1fr" }}
    >
      <Box mr={10}>
        <Box
          position="relative"
          _before={{
            content: "''",
            position: "absolute",
            top: "-5%",
            right: beforeItem,
            width: "100%",
            height: "110%",
            border: "2px solid",
            borderColor: !borderColor,
            borderRadius: "5px",
            zIndex: 0,
            opacity: isLoaded ? 1 : 0,
          }}
          _after={{
            content: "'About me'",
            position: "absolute",
            top: afterItemTop,
            right: afterItemRight,
            backgroundColor: borderColor,
            padding: 2,
            zIndex: 1,
            opacity: isLoaded ? 1 : 0,
          }}
        >
          {!isLoaded && (
            <Square>
              <Spinner />
            </Square>
          )}
          <Img
            alt="Avatar"
            src="/images/myavatar.jpg"
            border="1px solid"
            borderColor="gray.300"
            sx={{ filter: "grayscale(1)" }}
            zIndex={3}
            borderRadius="5px"
            position="relative"
            ref={imageRef}
            onLoad={() => setIsLoaded(true)}
          />
        </Box>
      </Box>
      <Box pt={{ base: 20, md: 10, lg: 20 }} pl={{ base: 6, sm: 10, md: 0 }}>
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
          I specialize in creating and maintaining complex UI infrastructure. Oh
          yea, I also collect vinyls and love learning new things on youtube at
          4am.
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
      </Box>
    </Box>
  );
}
