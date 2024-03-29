import { useRef, useState } from "react";
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
import ProgramEditor from "../components/ProgramEditor";

export default function CreateProgramModal({ onClose }) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const isOpen = useRef(true);
  
  const { get: getExercises, isLoading: exercisesIsLoading, data: exercisesData } = useExercises();
  const [currentStep, setCurrentStep] = useState(0)

  const [selectedExercises, setSelectedExercises] = useState({})
  const [setsAndReps, setSetsAndReps] = useState({})

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
          <ModalBody pb={5} p={2} overflowY={"scroll"}>
            <ExercisesList exercises={exercisesData.items} selectedExercises={selectedExercises} onSelect={setSelectedExercises} />
          </ModalBody></>}

        {currentStep === 1 &&
          <ModalBody pb={5} p={2} overflowY={'scroll'}>
            <ProgramEditor exercises={selectedExercises} onChange={setSetsAndReps}/>
          </ModalBody>
        }

        {currentStep === 2 && 
          <ModalBody>
            {/* <ProgramReview setSetsAndReps={setsAndReps}/> */}
          </ModalBody>
        }

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
