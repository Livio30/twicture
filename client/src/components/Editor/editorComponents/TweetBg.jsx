import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { NotAllowedIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { TweetContext } from "../../../context/TweetContext";

function TweetBg() {
  const { setTweetBgColor, setTweetTextColor } = useContext(TweetContext);
  return (
    <Box>
      <HStack mt="1rem">
        <Text>Select Tweet Background:</Text>
        <Icon
          onClick={() => setTweetBgColor("")}
          as={NotAllowedIcon}
          _hover={{ cursor: "pointer" }}
          w={6}
          h={6}
          color="red.500"
        />
        <Box
          onClick={() => setTweetBgColor("black")}
          _hover={{ cursor: "pointer" }}
          bg="black"
          borderRadius="50%"
          p=".75rem"
        ></Box>
        <Box
          onClick={() => setTweetBgColor("white")}
          _hover={{ cursor: "pointer" }}
          bg="white"
          borderRadius="50%"
          p=".75rem"
        ></Box>
      </HStack>
      <HStack mt="1rem">
        <Text>Select text color:</Text>
        <Box
          onClick={() => setTweetTextColor("black")}
          _hover={{ cursor: "pointer" }}
          bg="black"
          borderRadius="50%"
          p=".75rem"
        ></Box>
        <Box
          onClick={() => setTweetTextColor("white")}
          bg="white"
          borderRadius="50%"
          _hover={{ cursor: "pointer" }}
          p=".75rem"
        ></Box>
      </HStack>
    </Box>
  );
}

export default TweetBg;
