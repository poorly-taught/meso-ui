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
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useAuthContext } from "../../store/authContext";
import { useExercises } from "../../hooks/api/useExercises";
import Loader from "../../components/Loader";

export default function CreateProgramModal({ onClose }) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const isOpen = useRef(true);

  const authContext = useAuthContext();
  const { get: getExercises, isLoading: exercisesIsLoading, data: exercisesData } = useExercises(authContext.token);

  const toast = useToast();

  useEffect(() => {
    if (!authContext.isAuthed) return;
    async function doIt() {
      try {
        await getExercises();
      } catch (error) {
        toast();
      }
    }

    doIt();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authContext.isAuthed]);

  return (
    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m={0} h="100%">
       {exercisesIsLoading  && <Loader />}
        <ModalHeader>Create Program</ModalHeader>
        <ModalBody pb={5} overflowY={'scroll'}>
          {exercisesData.items.map((e, i) => {
            return <div key={i}>{e.name}</div>;
          })}
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} bg="bg.1" color="bg.2" mr={3}>
            Cancel
          </Button>
          <Button variant={"outline"} colorScheme="bg.1">
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
