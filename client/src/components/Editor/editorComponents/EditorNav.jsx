import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useContext } from "react";
import ColorBgTab from "./ColorBgTab";
import ImageBgTab from "./ImageBgTab";
import {TweetContext} from "../../../context/TweetContext"

function EditorNav() {
  const { setBackgroundType } = useContext(TweetContext);
  return (
    <Tabs isFitted>
      <TabList>
        <Tab onClick={() => setBackgroundType("Image")} _focus={{ boxShadow: "none", borderTopLeftRadius: "1rem" }}>
          Image
        </Tab>
        <Tab onClick={() => setBackgroundType("Color")} _focus={{ boxShadow: "none" }}>Color</Tab>
        <Tab onClick={() => setBackgroundType("Gradient")} _focus={{ boxShadow: "none", borderTopRightRadius: "1rem" }}>
          Gradient
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ImageBgTab />
        </TabPanel>
        <TabPanel>
          <ColorBgTab />
        </TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default EditorNav;
