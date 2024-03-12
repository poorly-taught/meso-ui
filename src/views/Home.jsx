import { CardHeader, Heading, Flex, Card, Box, Text, Circle} from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex bg='bg.1' direction={'column'} h={'100vh'} w={'100vw'} gap={4} pb={4}>
            
            <Flex bg='bg.1' direction={'row'} justify='center' align='center'>
                <Box w="90%" h='80%' pr={4} display={'flex'} justifyContent={'flex-end'} bg="bg.2" alignItems={'center'}>
                    <Text textStyle={'name'} fontSize={'30px'}> MESOGROWTH </Text>
                </Box>
            </Flex>

            <Flex bg='bg.1' direction={'row'} h={'30%'} justify='center' align='center'>
                <Card bg='bg.2' h='100%' w='90%'>
                    <CardHeader>
                        <Heading size='md'>Stop watch</Heading>
                    </CardHeader>
                </Card>
            </Flex>

            <Flex bg='bg.1' direction={'row'} flex={1} justify='center' align='flex-start'>
                <Card h='100%' w='90%' display={"flex"}>
                    <CardHeader>
                        <Heading size='md'>Calander</Heading>
                    </CardHeader>
                </Card>
            </Flex>

            <Flex direction={'row'} w='100%' pr={5} justify={'flex-end'}>
              <Circle size='40px' bg='bg.2' color='ft.1'>
                T
              </Circle>
            </Flex>
        </Flex>
    )
}