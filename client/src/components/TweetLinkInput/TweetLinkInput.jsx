import { Input } from "@chakra-ui/react";
import { useState } from "react";

function TweetLinkInput() {
  const [search, setSearch] = useState("");
  const [tweetLink, setTweetLink] = useState("");
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getTweet = (e) => {
    e.preventDefault();
    setTweetLink(search);
    setSearch("");
    console.log(tweetLink);
  };
  return (
    <form onSubmit={getTweet}>
        <Input
          onChange={updateSearch}
          w="60vw"
          size="lg"
          placeholder="Enter Tweet Link"
          variant="filled"
          value={search}
          color="cyan.400"
        />
    </form>
  );
}

export default TweetLinkInput;
