import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Divider,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import {
  ReactIcon,
  ReduxIcon,
  ChakraIcon,
  WebpackIcon,
  WordpressIcon,
  WebflowIcon,
  DockerIcon,
  FirebaseIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  PythonIcon,
  HTMLIcon,
  CSSIcon,
  SQLIcon,
} from "ui/components/Icons";

function AboutIcon({
  IconCmpt,
  text,
}: {
  IconCmpt: FunctionComponent<IconProps>;
  text: string;
}) {
  const iconColor = useColorModeValue("gray.900", "#fafafa");
  const textColor = useColorModeValue("gray.600", "gray.400");
  return (
    <Box textAlign="center">
      <IconCmpt color={iconColor} boxSize={{ base: 10, md: 12 }} mb={2} />
      <Text fontSize="xs" color={textColor}>
        {text}
      </Text>
    </Box>
  );
}

export function Technologies() {
  const borderColor = useColorModeValue("#fafafa", "gray.800");
  return (
    <Flex py={10} justifyContent="space-between">
      <Box>
        <Text pb={{ base: 5, sm: 10 }} fontSize="lg" fontWeight="bold">
          Technologies
        </Text>
        <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 3, sm: 10 }}>
          <AboutIcon IconCmpt={ReactIcon} text="React" />
          <AboutIcon IconCmpt={ReduxIcon} text="Redux" />
          <AboutIcon IconCmpt={ChakraIcon} text="Chakra UI" />
          <AboutIcon IconCmpt={WebpackIcon} text="Webpack" />
          <AboutIcon IconCmpt={WordpressIcon} text="Wordpress" />
          <AboutIcon IconCmpt={WebflowIcon} text="Webflow" />
          <AboutIcon IconCmpt={DockerIcon} text="Docker" />
          <AboutIcon IconCmpt={FirebaseIcon} text="Firebase" />
        </SimpleGrid>
      </Box>
      <Divider
        as="div"
        orientation="vertical"
        height="auto"
        borderColor={borderColor}
        opacity={1}
      />
      <Box>
        <Text pb={{ base: 5, sm: 10 }} fontSize="lg" fontWeight="bold">
          Languages
        </Text>
        <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 3, sm: 10 }}>
          <AboutIcon IconCmpt={JavaScriptIcon} text="JavaScript" />
          <AboutIcon IconCmpt={TypeScriptIcon} text="TypeScript" />
          <AboutIcon IconCmpt={PythonIcon} text="Python" />
          <AboutIcon IconCmpt={HTMLIcon} text="HTML" />
          <AboutIcon IconCmpt={CSSIcon} text="CSS" />
          <AboutIcon IconCmpt={SQLIcon} text="SQL" />
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
