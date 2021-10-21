import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { TweetContext } from "../../context/TweetContext";
import Tweet from "../Tweet/Tweet";

function TweetCanvas() {
  const { tweetText, backgroundType, bgColor, setBgColor, bgImageUrl } =
    useContext(TweetContext);
  if (backgroundType === "Image") {
    setBgColor("none");
    var styles = {
      backgroundImage: `url(${bgImageUrl})`,
    };
  } else if (backgroundType === "color") {
  }
  return (
    <Box
      style={styles}
      bg={bgColor}
      borderRadius="1rem"
      w="100%"
      h="75vh"
      m="4"
    >
      <Center w="100%" h="100%" px="3rem">
        <Tweet />
      </Center>
    </Box>
  );
}

export default TweetCanvas;
