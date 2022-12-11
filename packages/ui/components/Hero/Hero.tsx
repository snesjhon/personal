import {
  Box,
  Image,
  Spinner,
  Square,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
  imageText?: boolean;
}
export function Hero({ children, imageText = false }: Props) {
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
          _after={
            imageText
              ? {
                  content: "'About me'",
                  position: "absolute",
                  top: afterItemTop,
                  right: afterItemRight,
                  backgroundColor: borderColor,
                  padding: 2,
                  zIndex: 1,
                  opacity: isLoaded ? 1 : 0,
                }
              : undefined
          }
        >
          <Image
            alt="Avatar"
            src="/images/myavatar.jpg"
            border="1px solid"
            borderColor="gray.300"
            sx={{ filter: "grayscale(1)" }}
            zIndex={3}
            borderRadius="5px"
            position="relative"
            fallback={
              <Square>
                <Spinner />
              </Square>
            }
            onLoad={() => setIsLoaded(true)}
          />
        </Box>
      </Box>
      <Box pt={{ base: 20, md: 10, lg: 20 }} pl={{ base: 6, sm: 10, md: 0 }}>
        {children}
      </Box>
    </Box>
  );
}
