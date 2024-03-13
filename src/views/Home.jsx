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
          <Tabs isFitted colorScheme="bg.2" p={0} h="100%" m={0}>
            <TabList m="0" h="10%">
              <Tab textStyle={"name"}>Programs</Tab>
              <Tab textStyle={"name"}>Cycles</Tab>
            </TabList>

            <TabPanels h="90%" m={0} p={0}>
              <TabPanel
                h="100%"
                m={0}
                pt={2}
                pl={5}
                pr={5}
                pb={5}
                display={"flex"}
                flexDir={"column"}
                flex={1}
              >
                <Flex m={0} mb={2} direction={"row"} flex={1} ref={parentRef}>
                  <Stack
                    w="100%"
                    m={0}
                    maxH={`${parentHeight + parentHeight * 0.1}px`}
                    overflowY={"scroll"}
                  >
                    <Card mb="5px" bg="bg.2" p={2.5} color={"bg.1"}>
                      <Flex direction={"row"} flex={1} gap={5}>
                        <Flex direction={"column"} flex={1}>
                          <Text textStyle={"name"}>Workout name here</Text>
                          <Text opacity={0.7}>
                            bench press, extension, ....
                          </Text>
                        </Flex>
                        <Flex
                          direction={"column"}
                          justify={"center"}
                          align={"center"}
                          w="45%"
                          h="100%"
                        >
                          <Flex
                            direction={"row"}
                            justify={"space-between"}
                            align={"center"}
                            w="100%"
                            h="100%"
                          >
                            <Button
                              h="60px"
                              w="60px"
                              borderRadius={"50%"}
                              variant={"outline"}
                              colorScheme="bg.1"
                            >
                              Edit
                            </Button>
                            <Button
                              h="60px"
                              w="60px"
                              borderRadius={"50%"}
                              variant={"outline"}
                              colorScheme=""
                            >
                              Start
                            </Button>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Card>
                    <Card mb="5px" bg="bg.2" p={2.5} color={"bg.1"}>
                      <Flex direction={"row"} flex={1} gap={5}>
                        <Flex direction={"column"} flex={1}>
                          <Text textStyle={"name"}>Workout name here</Text>
                          <Text opacity={0.7}>
                            bench press, extension, ....
                          </Text>
                        </Flex>
                        <Flex
                          direction={"column"}
                          justify={"center"}
                          align={"center"}
                          w="45%"
                          h="100%"
                        >
                          <Flex
                            direction={"row"}
                            justify={"space-between"}
                            align={"center"}
                            w="100%"
                            h="100%"
                          >
                            <Button
                              h="60px"
                              w="60px"
                              borderRadius={"50%"}
                              variant={"outline"}
                              colorScheme="bg.1"
                            >
                              Edit
                            </Button>
                            <Button
                              h="60px"
                              w="60px"
                              borderRadius={"50%"}
                              variant={"outline"}
                              colorScheme=""
                            >
                              Start
                            </Button>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Card>
                    <Card mb="5px" bg="bg.2" p={2.5} color={"bg.1"}>
                      <Flex direction={"row"} flex={1} gap={5}>
                        <Flex direction={"column"} flex={1}>
                          <Text textStyle={"name"}>Workout name here</Text>
                          <Text opacity={0.7}>
                            bench press, extension, ....
                          </Text>
                        </Flex>
                        <Flex
                          direction={"column"}
                          justify={"center"}
                          align={"center"}
                          w="45%"
                          h="100%"
                        >
                          <Flex
                            direction={"row"}
                            justify={"space-between"}
                            align={"center"}
                            w="100%"
                            h="100%"
                          >
                            <Button
                              h="60px"
                              w="60px"
                              borderRadius={"50%"}
                              variant={"outline"}
                              colorScheme="bg.1"
                            >
                              Edit
                            </Button>
                            <Button
                              h="60px"
                              w="60px"
                              borderRadius={"50%"}
                              variant={"outline"}
                              colorScheme=""
                            >
                              Start
                            </Button>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Card>
                    <Card mb="5px" bg="bg.2" p={2.5} color={"bg.1"}>
                      <Flex direction={"row"} flex={1} gap={5}>
                        <Flex direction={"column"} flex={1}>
                          <Text textStyle={"name"}>Workout name here</Text>
                          <Text opacity={0.7}>
                            bench press, extension, ....
                          </Text>
                        </Flex>
                        <Flex
                          direction={"column"}
                          justify={"center"}
                          align={"center"}
                          w="45%"
                          h="100%"
                        >
                          <Flex
                            direction={"row"}
                            justify={"space-between"}
                            align={"center"}
                            w="100%"
                            h="100%"
                          >
                            <Button
                              h="60px"
                              w="60px"
                              borderRadius={"50%"}
                              variant={"outline"}
                              colorScheme="bg.1"
                            >
                              Edit
                            </Button>
                            <Button
                              h="60px"
                              w="60px"
                              borderRadius={"50%"}
                              variant={"outline"}
                              colorScheme=""
                            >
                              Start
                            </Button>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Card>
                  </Stack>
                </Flex>

                <Flex m={0} direction={"row"}>
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
