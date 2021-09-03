import { Box, Center, Text } from "@chakra-ui/react";
import EditorNav from "./editorComponents/EditorNav";

function Editor() {
  return (
    <Box border="1px" borderColor="cyan.400" w="100%" borderRadius="1rem" m="4" h="75vh">
      <Center mt="1"><Text fontSize={["sm", "md", "lg"]}>Select Tweet Background</Text></Center>
      <EditorNav/>
    </Box>
  );
}

export default Editor;
