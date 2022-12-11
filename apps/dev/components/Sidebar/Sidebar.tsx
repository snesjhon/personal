import { Box, IconButton, VStack } from "@chakra-ui/react";
import { GithubIcon, InstagramIcon, TwitterIcon } from "ui/components/Icons";

export function Sidebar() {
  return (
    <VStack
      position="fixed"
      bottom="30%"
      ml="-5%"
      display={{ base: "none", xl: "block" }}
    >
      <Box>
        <IconButton
          as="a"
          aria-label="Github"
          variant="ghost"
          icon={<GithubIcon boxSize={8} color="cyan.700" />}
          href="https://github.com/snesjhon"
          target="_blank"
        />
      </Box>
      <Box>
        <IconButton
          as="a"
          aria-label="Instagram"
          variant="ghost"
          icon={<InstagramIcon boxSize={8} color="cyan.700" />}
          href="https://www.instagram.com/snesjhon/"
          target="_blank"
        />
      </Box>
      <Box>
        <IconButton
          as="a"
          aria-label="Twitter"
          variant="ghost"
          icon={<TwitterIcon boxSize={8} color="cyan.700" />}
          href="https://twitter.com/snesjhon"
          target="_blank"
        />
      </Box>
    </VStack>
  );
}
