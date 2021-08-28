import { Box, Input, Text, Switch, HStack, useBoolean } from "@chakra-ui/react";
import { useState } from "react";

function ImageBgTab() {
    const [searchImage, setSearchImage] = useState(false)

  return (
    <Box>
      <HStack>
        <Text>Search Image</Text>
        <Switch _focus={{ boxShadow: "none"}} onChange={()=> setSearchImage(!searchImage)} size="sm" />
      </HStack>
      {searchImage ? <Input variant="flushed" placeholder="Enter Keywork" /> : <Input variant="flushed" placeholder="Enter Image Link"/> }
    </Box>
  );
}

export default ImageBgTab;
