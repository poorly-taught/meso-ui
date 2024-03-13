import { Stack } from "@chakra-ui/react";
import PropTypes from 'prop-types';

export default function ProgramsList({ height }) {
  return (
    <Stack
      w="100%"
      m={0}
      maxH={`${height + (height * 0.1)}px`}
      overflowY={"scroll"}
    >
    </Stack>
  );
}

ProgramsList.propTypes = {
    height: PropTypes.number.isRequired
}


// <Card mb="5px" bg="bg.2" p={2.5} color={"bg.1"}>
//   <Flex direction={"row"} flex={1} gap={5}>
//     <Flex direction={"column"} flex={1}>
//       <Text textStyle={"name"}>Workout name here</Text>
//       <Text opacity={0.7}>
//         bench press, extension, ....
//       </Text>
//     </Flex>
//     <Flex
//       direction={"column"}
//       justify={"center"}
//       align={"center"}
//       w="45%"
//       h="100%"
//     >
//       <Flex
//         direction={"row"}
//         justify={"space-between"}
//         align={"center"}
//         w="100%"
//         h="100%"
//       >
//         <Button
//           h="60px"
//           w="60px"
//           borderRadius={"50%"}
//           variant={"outline"}
//           colorScheme="bg.1"
//         >
//           Edit
//         </Button>
//         <Button
//           h="60px"
//           w="60px"
//           borderRadius={"50%"}
//           variant={"outline"}
//           colorScheme=""
//         >
//           Start
//         </Button>
//       </Flex>
//     </Flex>
//   </Flex>
// </Card>
