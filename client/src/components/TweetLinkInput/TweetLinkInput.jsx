import { Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { TweetContext } from "../../context/TweetContext";

function TweetLinkInput() {
  const [search, setSearch] = useState("");
  const { tweetLink, setTweetLink, setTweetText } =
    useContext(TweetContext);
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getTweet = (e) => {
    e.preventDefault();
    setTweetLink(search);
    setSearch("");
    var tweetId = new URL(tweetLink).pathname.split("/")[3];
    const data = { tweetId };
    fetch("http://localhost:5000/api/tweets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success: ", data);
        setTweetText(data.data.text)
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
    // console.log(tweetData);
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
