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
  Textarea,
  Flex,
  Input,
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
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m={0} h="100%">
        {exercisesIsLoading && <Loader />}
        <ModalHeader p={2}>
          <Flex direction={"column"} align={"center"}>
            <Text mb={1}>New Program</Text>
          </Flex>
        </ModalHeader>

        {currentStep === 0 && <>
          <Card p={2} ml={2} mr={2} mb={1} bg='bg.2'>
            <Text textStyle='name' fontSize={15}>Search and Select Exercises</Text>
            <Input
              size='sm'
              name='exerciseSearchBar'
              focusBorderColor="bg.1"
              variant="outline"
            />
            <Text mt={1} textStyle='name' fontSize={15}>Number of exercises selected {Object.keys(selectedExercises).length}</Text>
          </Card>
          <ModalBody pb={5} p={2} overflowY={"scroll"}>
            <ExercisesList exercises={exercisesData.items} selectedExercises={selectedExercises} onSelect={setSelectedExercises} />
          </ModalBody></>}

        {currentStep === 1 && <>
          <Card p={2} ml={2} mr={2} mb={1} bg='bg.2'>
            <Text textStyle='name' fontSize={15}>Name</Text>
            <Input size='sm' name='programName' focusBorderColor="bg.1" variant='outline'></Input>
            <Text textStyle='name' fontSize={15}>Description</Text>
            <Textarea size='sm' name='programDescription' focusBorderColor="bg.1" variant='outline'></Textarea>
          </Card>
          <ModalBody>
            
          </ModalBody>
        </>}

        <ModalFooter>
          <Button w="100%" onClick={() => {
            if (currentStep === 0) {
              onClose();
              return;
            }
            setCurrentStep((prev) => {
              prev--
              return prev;
            })
          }} bg="bg.1" color="bg.2" mr={3} size={"sm"}>
            Back
          </Button>
          <Button onClick={() => setCurrentStep((prev) => {
            prev++;
            return prev
          })} w="100%" variant={"outline"} colorScheme="bg.1" size={"sm"}>
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
