import {
  Flex,
  Button,
  Stack,
  Card,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Text,
  Circle,
} from "@chakra-ui/react";

import { useRef, useState, useEffect } from "react";

export default function Home() {
  const parentRef = useRef(null);
  const [parentHeight, setParentHeight] = useState(0);

  useEffect(() => {
    if (parentRef.current) {
      const height = parentRef.current.getBoundingClientRect().height;
      setParentHeight(height);
    }
  }, [parentRef]);

  return (
    <Flex bg="bg.1" direction={"column"} h={"100vh"} w={"100vw"} gap={4} pb={4}>
      <Flex bg="bg.2" direction={"row"} justify="center" align="center">
        <Text textStyle={"name"} fontSize={"30px"}>
          {" "}
          MESOGROWTH{" "}
        </Text>
      </Flex>

      <Flex
        bg="bg.1"
        direction={"row"}
        h={"30%"}
        justify="center"
        align="center"
      >
        <Card bg="bg.2" h="100%" w="95%"></Card>
      </Flex>

      <Flex
        bg="bg.1"
        direction={"row"}
        flex={1}
        justify="center"
        align="flex-start"
      >
        <Card h="100%" w="95%" display={"flex"}>
          <Tabs isFitted colorScheme="bg.2" h="100%">
            <TabList mb="0" h="10%">
              <Tab textStyle={"name"}>Programs</Tab>
              <Tab textStyle={"name"}>Cycles</Tab>
            </TabList>
            <TabPanels h="90%">
              <TabPanel
                h="100%"
                display={"flex"}
                flexDir={"column"}
                flex={1}
                p={5}
                gap={"5px"}
              >
                <Flex direction={"row"} flex={1} ref={parentRef}>
                  <Stack
                    w="100%"
                    maxH={`${parentHeight}px`}
                    overflowY={"scroll"}
                  >
                    <Card mb="5px" h='80px' bg="bg.2" p={2.5} color={"bg.1"}>
                      <Text>test</Text>
                    </Card>
                    <Card mb="5px" h='80px' bg="bg.2" p={2.5} color={"bg.1"}>
                      <Text>test</Text>
                    </Card>
                    <Card mb="5px" h='80px' bg="bg.2" p={2.5} color={"bg.1"}>
                      <Text>test</Text>
                    </Card>
                    <Card mb="5px" h='80px' bg="bg.2" p={2.5} color={"bg.1"}>
                      <Text>test</Text>
                    </Card>
                    <Card mb="5px" h='80px' bg="bg.2" p={2.5} color={"bg.1"}>
                      <Text>test</Text>
                    </Card>
                    <Card mb="5px" h='80px' bg="bg.2" p={2.5} color={"bg.1"}>
                      <Text>test</Text>
                    </Card>
                    <Card mb="5px" h='80px' bg="bg.2" p={2.5} color={"bg.1"}>
                      <Text>test</Text>
                    </Card>
                    <Card mb="5px" h='80px' bg="bg.2" p={2.5} color={"bg.1"}>
                      <Text>test</Text>
                    </Card>
                  </Stack>
                </Flex>
                <Flex direction={"row"}>
                  <Button
                    colorScheme="bg.1"
                    w="100%"
                    variant="outline"
                    size={"sm"}
                  >
                    Create Program
                  </Button>
                </Flex>
              </TabPanel>
              <TabPanel h="100%" display={"flex"} flexDir={"column"} flex={1}>
                <p>two!</p>
              </TabPanel>
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
