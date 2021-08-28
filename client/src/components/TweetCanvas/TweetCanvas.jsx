import { Box, Center, Container, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { TweetContext } from "../../context/TweetContext";

function TweetCanvas() {
  const { tweetData } = useContext(TweetContext);
  return (
    <Box bg="darkorange" borderRadius="1rem" w="100%" h="75vh" m="4">
        <Center w="100%" h="100%" px="5rem">
          <Box bg="black" borderRadius="1rem">{tweetData}</Box>
        </Center>
    </Box>
  );
}

export default TweetCanvas;
