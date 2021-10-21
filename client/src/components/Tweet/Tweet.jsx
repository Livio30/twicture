import { useContext, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { TweetContext } from "../../context/TweetContext";

function Tweet() {
  const { tweetText, tweetBgColor, tweetTextColor, } = useContext(TweetContext);
  // var tweetTextColor = tweetBgColor == "white" ? true : false;
  return (
    <Box
      bg={tweetBgColor}
      style={{ opacity: "0.8" }}
      borderRadius=".5rem"
      p="1.5rem"
    >
      <Text color={tweetTextColor}>{tweetText}</Text>
    </Box>
  );
}

export default Tweet;
