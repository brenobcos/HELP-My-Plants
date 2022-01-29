import {
  Modal,
  ModalContent,
  ModalOverlay,
  Heading,
  Flex,
  Text,
  Button,
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

  function handleAddPlant(data: NewPlantData) {
    plant.surname = data.surname;
    plant.last_watering = data.last_watering;
    plant.details = data.details;
    plant.userId = user.id;
    addNewPlant(plant);
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius={"50px 0 50px 0"}>
        <Heading w="100%" textAlign="center">
          {plant.name}
        </Heading>
        <Flex
          as="form"
          flexDirection="column"
          onSubmit={handleSubmit(handleAddPlant)}
          ml={8}
        >
          <Text fontWeight="bold" mt="10px">
            Apelido
          </Text>
          <input type="text" placeholder="apelido" {...register("surname")} />
          <Text mt="10px" fontWeight="bold">
            Lembrete
          </Text>

          <input type="text" placeholder="lembrete" {...register("reminder")} />
          <Text mt="10px" fontWeight="bold">
            detalhes
          </Text>

          <input type="text" placeholder="detalhes" {...register("details")} />
          <Text mt="10px" fontWeight="bold">
            Ultima rega
          </Text>

          <input
            type="text"
            placeholder="ultima rega"
            {...register("last_watering")}
          />
          <Button
            _hover={{ bg: "green.800" }}
            _active={{ borderColor: "none" }}
            _focus={{ borderColor: "none" }}
            color="white"
            bg="green.400"
            mr={3}
            mb={3}
            borderRadius={"50px 0 50px 0"}
            type="submit"
            marginLeft="auto"
            w="30%"
          >
            adicionar
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
}

export default ModalNewPlant;
