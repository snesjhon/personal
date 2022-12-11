import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Flex, useBreakpointValue } from "@chakra-ui/react";

export function Menu(): JSX.Element {
  const btnSize = useBreakpointValue({ base: "sm", sm: "md" });
  return (
    <Flex justifyContent="space-between">
      <Button
        variant="ghostCyan"
        size={btnSize}
        onClick={() =>
          document
            .querySelector("#portfolio")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Portfolio
      </Button>
      <Button
        variant="ghostCyan"
        size={btnSize}
        onClick={() =>
          document
            .querySelector("#projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Projects
      </Button>
      <Button
        as="a"
        href="/resume.pdf"
        size={btnSize}
        target="_blank"
        variant="ghostCyan"
        rightIcon={<ExternalLinkIcon />}
      >
        Resume
      </Button>
    </Flex>
  );
}
