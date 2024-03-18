import { useEffect, useRef, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  Text,
  Flex,
  Input
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useExercises } from "../../hooks/api/useExercises";
import Loader from "../../components/Loader";
import ExercisesList from "../components/ExercisesList";

export default function CreateProgramModal({ onClose }) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const isOpen = useRef(true);

  const { get: getExercises, isLoading: exercisesIsLoading, data: exercisesData } = useExercises();
  const [selectedExercises, setSelectedExercises] = useState({})

  return (
    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m={0} h="100%">
        {exercisesIsLoading && <Loader />}
        <ModalHeader p={2}>
          <Flex direction={"column"} align={"center"}>
            <Text mb={1}>Select Exercises</Text>
          </Flex>
        </ModalHeader>

        <Card p={2} ml={2} mr={2} mb={1} bg='bg.2'>
          <Input
            name='exerciseSearchBar'
            focusBorderColor="bg.1"
            variant="outline"
          />
          <Text mt={1} textStyle='name' fontSize={15}>Number of exercises selected {Object.keys(selectedExercises).length}</Text>
        </Card>
        <ModalBody pb={5} p={2} overflowY={"scroll"}>
          <ExercisesList exercises={exercisesData.items} onSelect={setSelectedExercises} />
        </ModalBody>

        <ModalFooter>
          <Button w="100%" onClick={onClose} bg="bg.1" color="bg.2" mr={3} size={"sm"}>
            Back
          </Button>
          <Button w="100%" variant={"outline"} colorScheme="bg.1" size={"sm"}>
            Next
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

CreateProgramModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
