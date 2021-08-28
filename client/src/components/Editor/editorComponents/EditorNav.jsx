import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ColorBgTab from "./ColorBgTab";
import ImageBgTab from "./ImageBgTab";

function EditorNav() {
  return (
    <Tabs isFitted>
      <TabList>
        <Tab _focus={{ boxShadow: "none", borderTopLeftRadius: "1rem" }}>
          Image
        </Tab>
        <Tab _focus={{ boxShadow: "none" }}>Color</Tab>
        <Tab _focus={{ boxShadow: "none", borderTopRightRadius: "1rem" }}>
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
