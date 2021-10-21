import { Box, Input, Text, Switch, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { TweetContext } from "../../../context/TweetContext";
import TweetBg from "./TweetBg";

function ImageBgTab() {
  const [searchImage, setSearchImage] = useState(false);
  const [search, setSearch] = useState("");
  const { setBgImageUrl } = useContext(TweetContext);
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getBgImage = (e) => {
    e.preventDefault();
    setBgImageUrl(search);
    setSearch("");
  };

  return (
    // <Box>
    //   <HStack>
    //     <Text>Search Image</Text>
    //     <Switch _focus={{ boxShadow: "none"}} onChange={()=> setSearchImage(!searchImage)} size="sm" />
    //   </HStack>
    //   {searchImage ? <Input variant="flushed" placeholder="Enter Keywork" /> : <Input variant="flushed" placeholder="Enter Image Link"/> }
    //   <TweetBg />
    // </Box>
    <Box>
      {/* <form onSubmit={getBgImage}>
        <Input
          onChange={updateSearch}
          variant="flushed"
          value={search}
          color="cyan.400"
          placeholder="Search Image"
        />
      </form> */}
      <TweetBg />
    </Box>
  );
}

export default ImageBgTab;
