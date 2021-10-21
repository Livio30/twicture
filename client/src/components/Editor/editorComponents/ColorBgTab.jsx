import { Box, Center, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ChromePicker } from "react-color";
import { TweetContext } from "../../../context/TweetContext";
import "./ColorBgTab.css";
import TweetBg from "./TweetBg";

function ColorBgTab() {
  const {bgColor, setBgColor} = useContext(TweetContext);
  return (
    <Box>
      <Text>Choose color</Text>
      <Center>
        <ChromePicker
          className="color-palette"
          color={bgColor}
          onChange={(updatedColor) => setBgColor(updatedColor.hex)}
        />
      </Center>
      <TweetBg/>
    </Box>
  );
}

export default ColorBgTab;
