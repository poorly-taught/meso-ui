import { Flex, Button, Card, Tabs, TabList, Tab, TabPanel, TabPanels, Text, Circle } from "@chakra-ui/react";

import { useState } from "react";
import CreateProgramModal from "./workflows/CreateProgramModal";

export default function Home() {
  const [createProgramModalIsOpen, setCreateProgramModalIsOpen] = useState(false);

  return (
    <Flex bg="bg.1" direction={"column"} h={"100vh"} w={"100vw"} gap={4} pb={4}>
      <Flex bg="bg.2" direction={"row"} justify="center" align="center">
        <Text textStyle={"name"} fontSize={"30px"}>
          {" "}
          MESOGROWTH{" "}
        </Text>
      </Flex>

      <Flex bg="bg.1" direction={"row"} h={"30%"} justify="center" align="center">
        <Card bg="bg.2" h="100%" w="95%"></Card>
      </Flex>

      <Flex bg="bg.1" direction={"row"} flex={1} justify="center" align="flex-start">
        <Card h="100%" w="95%" display={"flex"}>
          <Tabs isFitted colorScheme="bg.2" p={0} h="100%" m={0}>
            <TabList m="0" h="10%">
              <Tab textStyle={"name"}>Programs</Tab>
              <Tab textStyle={"name"}>Cycles</Tab>
            </TabList>

            <TabPanels h="90%" m={0} p={0}>
              <TabPanel h="100%" m={0} p={5} pl={2} display={"flex"} flexDir={"column"} flex={1}>
                {createProgramModalIsOpen && <CreateProgramModal onClose={() => setCreateProgramModalIsOpen(false)} />}
                <Flex m={0} mb={2} direction={"row"} flex={1}></Flex>

                <Flex m={0} direction={"row"}>
                  <Button
                    onClick={() => setCreateProgramModalIsOpen(true)}
                    colorScheme="bg.1"
                    w="100%"
                    variant="outline"
                    size={"sm"}
                  >
                    Create Program
                  </Button>
                </Flex>
              </TabPanel>

              <TabPanel h="100%" display={"flex"} flexDir={"column"} flex={1}></TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </Flex>

      <Flex direction={"row"} pr={5} justify={"flex-end"}>
        <Circle size="40px" bg="bg.2" color="ft.1">
          T
        </Circle>
      </Flex>
    </Flex>
  );
}
