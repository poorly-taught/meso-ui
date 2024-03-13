import { useRef } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function CreateProgramModal({ isOpen, onClose }) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m={0} h="100%">
        <ModalHeader>Create Program</ModalHeader>
        <ModalBody pb={6}></ModalBody>

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
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func
};
