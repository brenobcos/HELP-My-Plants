import {
  Modal,
  ModalContent,
  ModalOverlay,
  Heading,
  Flex,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { useAuth } from "../../providers/auth/index";
import { useUserPlants } from "../../providers/userPlantsProvider";
interface plantMinMax {
  min: number;
  max: number;
}
interface plant {
  name: string;
  cientific_name: string;
  water: number;
  lighting: plantMinMax;
  temperature: plantMinMax;
  height: plantMinMax;
  info: string;
  image: string;
  surname?: string;
  last_watering?: string;
  details?: string;
  userId?: number;
  id?: number;
}

interface ModalNewPlantProps {
  isOpen: boolean;
  onClose: () => void;
  plant: plant;
}

interface NewPlantData {
  surname: string;
  reminder: string;
  details: string;
  last_watering: string;
}
function ModalNewPlant({ isOpen, onClose, plant }: ModalNewPlantProps) {
  const { user } = useAuth();
  const { addNewPlant } = useUserPlants();
  const { register, handleSubmit } = useForm<NewPlantData>();
  console.log(plant);

  function handleAddPlant(data: NewPlantData) {
    plant.surname = data.surname;
    plant.last_watering = data.last_watering;
    plant.details = data.details;
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Heading>{plant.name}</Heading>
        <Flex
          as="form"
          flexDirection="column"
          onSubmit={handleSubmit(handleAddPlant)}
        >
          <input type="text" placeholder="apelido" {...register("surname")} />
          <input type="text" placeholder="lembrete" {...register("reminder")} />
          <input type="text" placeholder="detalhes" {...register("details")} />
          <input
            type="text"
            placeholder="ultima rega"
            {...register("last_watering")}
          />
          <button type="submit">adicionar</button>
        </Flex>
      </ModalContent>
    </Modal>
  );
}

export default ModalNewPlant;
