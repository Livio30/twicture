import {
  Flex,
  Heading,
  VStack,
  IconButton,
  useColorMode,
  Spacer,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaGithub } from "react-icons/fa";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "light";
  return (
    <VStack p={5}>
      <Flex w="80%">
        <Heading size="lg" fontWeight="semibold" color="cyan.400">
          Twicture
        </Heading>
        <Spacer />
        <IconButton
          _focus={{boxShadow:"none"}}
          icon={<FaInstagram />}
          variant="ghost"
          colorScheme="cyan"
          isRound="true"
          fontSize="1.5rem"
          as="a"
          target="_blank"
          href="https://www.instagram.com/_mr.codeaddict_/"
          />
        <IconButton
          _focus={{boxShadow:"none"}}
          icon={<FaGithub />}
          variant="ghost"
          colorScheme="cyan"
          isRound="true"
          fontSize="1.5rem"
          ml="5"
          mr="5"
          as="a"
          target="_blank"
          href="https://github.com/Livio30"
        />
        <IconButton
          _focus={{boxShadow:"none"}}
          icon={isDark ? <FaSun /> : <FaMoon />}
          variant="ghost"
          onClick={toggleColorMode}
          colorScheme="cyan"
          isRound="true"
          fontSize="1.5rem"
        />
      </Flex>
    </VStack>
  );
}

export default Header;
