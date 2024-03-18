import { useRef, useEffect } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useToast,
  Text,
  Flex,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useAuthContext } from "../../store/authContext";
import { useExercises } from "../../hooks/api/useExercises";
import Loader from "../../components/Loader";
import ExercisesList from "../components/ExercisesList";

export default function CreateProgramModal({ onClose }) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const isOpen = useRef(true);
  
  const { get: getExercises, isLoading: exercisesIsLoading, data: exercisesData } = useExercises();

  return (
    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m={0} h="100%">
        {exercisesIsLoading && <Loader />}
        <ModalHeader p={2}>
          <Flex direction={"column"} align={"center"}>
            <Text mb={1}>Create Program</Text>
          </Flex>
        </ModalHeader>
        <ModalBody pb={5} p={2} overflowY={"scroll"}>
          <ExercisesList exercises={exercisesData.items}/>
        </ModalBody>

        <ModalFooter>
          <Button w="100%" onClick={onClose} bg="bg.1" color="bg.2" mr={3} size={"sm"}>
            Back
          </Button>
          <Button w="100%" variant={"outline"} colorScheme="bg.1" size={"sm"}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

CreateProgramModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
