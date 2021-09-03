import { useContext } from "react";
import { Box, Text } from "@chakra-ui/react";
import { TweetContext } from "../../context/TweetContext";

function Tweet({color}) {
  const { tweetText } = useContext(TweetContext);
  return (
    <Box style={{backgroundColor:{color}}} p="2rem">
      <Text>{tweetText}</Text>
    </Box>
  );
}

export default Tweet;
