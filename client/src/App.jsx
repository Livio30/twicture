import { HStack, Spacer, VStack, Box } from "@chakra-ui/react";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import TweetCanvas from "./components/TweetCanvas/TweetCanvas";
import TweetLinkInput from "./components/TweetLinkInput/TweetLinkInput";

function App() {
  return (
    <div>
      <Header />
      <VStack>
        <TweetLinkInput />
        <Box w="90vw" p="4"display={{ md: "flex" }}>
          <TweetCanvas />
          <Editor />
        </Box>
      </VStack>
    </div>
  );
}

export default App;
