import { Box, Center, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ChromePicker } from "react-color";
import "./ColorBgTab.css";

function ColorBgTab() {
  const [bgColor, setBgColor] = useState("#ffffff");
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
      <Text>{bgColor}</Text>
    </Box>
  );
}

export default ColorBgTab;
