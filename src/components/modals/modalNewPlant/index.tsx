import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Modal,
} from "@chakra-ui/react";
import { useUserPlants } from "../../../providers/userPlantsProvider";
import { useAuth } from "../../../providers/auth";

interface plant {
  name: string;
  cientific_name: string;
  water: number;
  lighting: {};
  temperature: {};
  height: {};
  info: string;
  image: string;
  userId?: number;
  id?: number;
}

interface ModalNewPlantProps {
  onClose: () => void;
  isOpen: boolean;
  plant: plant;
}
function ModalNewPlant({ isOpen, onClose, plant }: ModalNewPlantProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent></ModalContent>
    </Modal>
  );
}

export default ModalNewPlant;
