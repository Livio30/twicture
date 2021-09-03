import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { TweetContext } from "../../context/TweetContext";
import Tweet from "../Tweet/Tweet";

function TweetCanvas() {
  const { tweetText, backgroundType, bgColor, setBgColor } = useContext(TweetContext);
  if(backgroundType === "Image"){
    setBgColor("white")
  }
  return (
    <Box bg={bgColor} borderRadius="1rem" w="100%" h="75vh" m="4">
        <Center w="100%" h="100%" px="3rem">
          <Text>{backgroundType}</Text>
          <Tweet color="red"/>
        </Center>
    </Box>
  );
}

export default TweetCanvas;
