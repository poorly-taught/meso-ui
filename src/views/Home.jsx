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

export default function Home() {
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
          <Tabs isFitted colorScheme="bg.1">
            <TabList mb="1em">
              <Tab textStyle={'name'}>Programs</Tab>
              <Tab textStyle={'name'}>Cycles</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Stack direction={'row'} justify={'center'}>
                  <Button colorScheme="bg.1" variant="outline" size={"sm"}>
                    Create Program
                  </Button>
                </Stack>
              </TabPanel>
              <TabPanel>
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
