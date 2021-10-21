import { HStack, Spacer, VStack, Box } from "@chakra-ui/react";
import { useState } from "react";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import TweetCanvas from "./components/TweetCanvas/TweetCanvas";
import TweetLinkInput from "./components/TweetLinkInput/TweetLinkInput";
import { TweetContext } from "./context/TweetContext";

function App() {
  const [tweetLink, setTweetLink] = useState("");
  const [tweetText, setTweetText] = useState("");
  const [tweetUser, setTweetUser] = useState("");
  const [backgroundType, setBackgroundType] = useState("Color");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [tweetBgColor, setTweetBgColor] = useState("");
  const [bgImageUrl, setBgImageUrl] = useState("");
  const [tweetTextColor, setTweetTextColor] = useState("");
  return (
    <div>
      <Header />
      <VStack>
        <TweetContext.Provider
          value={{
            tweetLink,
            setTweetLink,
            tweetText,
            setTweetText,
            tweetUser,
            setTweetUser,
            backgroundType,
            setBackgroundType,
            bgColor,
            setBgColor,
            tweetBgColor,
            setTweetBgColor,
            bgImageUrl,
            setBgImageUrl,
            tweetTextColor,
            setTweetTextColor,
          }}
        >
          <TweetLinkInput />
          <Box w="90vw" p="4" display={{ md: "flex" }}>
            <TweetCanvas />
            <Editor />
          </Box>
        </TweetContext.Provider>
      </VStack>
    </div>
  );
}

export default App;
