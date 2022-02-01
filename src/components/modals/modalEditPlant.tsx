import {
  Modal,
  ModalContent,
  ModalOverlay,
  Divider,
  FormLabel,
  Button,
  ModalHeader,
  ModalBody,
  EditableInput,
  Editable,
  EditablePreview,
  ModalCloseButton,
  Text,
  Flex,
} from "@chakra-ui/react";

import { StyledInput, StyledTextArea } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUserPlants } from "../../providers/userPlantsProvider";
import EditableControls from "../../components/EditableControls/EditableControls";

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
  reminder?: string;
  surname?: string;
  last_watering?: string;
  details?: string;
  userId?: number;
  id: number;
}

interface ModalNewPlantProps {
  isOpen: boolean;
  onClose: () => void;
  plant: plant;
}

interface EditPlantData {
  surname: string;
  reminder: string;
  details: string;
  last_watering: string;
}

export function ModalEditPlant({ isOpen, onClose, plant }: ModalNewPlantProps) {
  const registerPlantSchema = yup.object().shape({
    surname: yup
      .string()
      .required("Campo obrigatório")
      .max(30, "Seu apelido pode ter no maxímo trinta caracteres"),
    reminder: yup
      .string()
      .max(80, "Seu lembrete pode ter no maxímo oitenta caracteres"),

    last_watering: yup.string().required("Campo obrigatório"),
  });

  const { changeUserPlant, deleteUserPlant } = useUserPlants();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditPlantData>({ resolver: yupResolver(registerPlantSchema) });

  function handleEditPlant(data: EditPlantData) {
    plant.surname = data.surname;
    plant.last_watering = data.last_watering;
    plant.details = data.details;
    plant.reminder = data.reminder;
    changeUserPlant(plant);
  }

  function handleDelete() {
    deleteUserPlant(plant.id);
    onClose();
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(handleEditPlant)}
        width={["280px", "400px"]}
        borderRadius="50px 8px 50px 0px "
        maxHeight="85%"
        border="3px solid transparent"
        bg="linear-gradient(#FFFFFF, #FFFFFF) padding-box,linear-gradient(50deg, #FFFFFF 25%, #46FF42 50%,#FFFFFF 75%) border-box"
      >
        <ModalHeader w="100%" textAlign="center">
          {plant.name}
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <FormLabel fontWeight="bold">Apelido</FormLabel>
          <Editable
            textAlign="left"
            defaultValue={plant.surname}
            fontSize="md"
            fontWeight="light"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <EditablePreview maxHeight="40px" overflow="auto" />
            <EditableInput
              id="9"
              {...register("surname")}
              width={["150px", "260px"]}
            />
            <EditableControls />
          </Editable>
          {errors.surname?.message && (
            <Text as="span" fontSize="0.7rem" color="red.700">
              {errors.surname?.message}
            </Text>
          )}
          <Divider as="hr" borderColor="green.800" margin="8px 0" />

          <FormLabel fontWeight="bold">Lembrete</FormLabel>
          <Editable
            textAlign="left"
            defaultValue={plant.reminder}
            fontSize="md"
            fontWeight="light"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <EditablePreview maxHeight="40px" overflow="auto" />
            <EditableInput
              {...register("reminder")}
              width={["150px", "260px"]}
              id="10"
            />
            <EditableControls />
          </Editable>
          {errors.reminder?.message && (
            <Text as="span" fontSize="0.7rem" color="red.700">
              {errors.reminder?.message}
            </Text>
          )}
          <Divider as="hr" borderColor="green.800" margin="8px 0" />

          <FormLabel fontWeight="bold">Detalhes</FormLabel>

          <StyledTextArea {...register("details")}>
            {plant.details}
          </StyledTextArea>
          <Divider as="hr" borderColor="green.800" margin="4px 0" />

          <Divider as="hr" borderColor="green.800" margin="8px 0" />

          <FormLabel fontWeight="bold">Ultima rega</FormLabel>
          <Flex flexDirection="column">
            <StyledInput
              type="date"
              defaultValue={plant.last_watering}
              {...register("last_watering")}
              id="12"
            />
            {errors.last_watering?.message && (
              <Text as="span" fontSize="0.7rem" color="red.700">
                {errors.last_watering?.message}
              </Text>
            )}
          </Flex>

          <Divider as="hr" borderColor="green.800" margin="8px 0" />
          <Flex justifyContent="space-between">
            {!!plant.id && (
              <Button
                onClick={handleDelete}
                _hover={{ bg: "red.800" }}
                _active={{ borderColor: "none" }}
                _focus={{ borderColor: "none" }}
                color="white"
                bg="red.400"
                mr={3}
                borderRadius={"50px 0 50px 0"}
                mt="10px"
                w="35%"
              >
                remover
              </Button>
            )}
            <Button
              onClick={() => onClose()}
              _hover={{ bg: "green.800" }}
              _active={{ borderColor: "none" }}
              _focus={{ borderColor: "none" }}
              color="white"
              bg="green.400"
              mr={3}
              borderRadius={"50px 0 50px 0"}
              mt="10px"
              type="submit"
              w="35%"
            >
              adicionar
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
