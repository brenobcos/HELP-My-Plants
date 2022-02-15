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
import { useUserPlants } from "../../providers/UserPlantsProvider";
import { EditableControls } from "../EditableControls";

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
  last_watering?: Date;
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
  last_watering: Date;
}

export function ModalEditPlant({ isOpen, onClose, plant }: ModalNewPlantProps) {
  const registerPlantSchema = yup.object().shape({
    surname: yup
      .string()
      .required("Campo obrigatório")
      .max(20, "Seu apelido pode ter no maxímo vinte caracteres"),
    reminder: yup
      .string()
      .max(60, "Seu lembrete pode ter no maxímo sessenta caracteres"),

    last_watering: yup
      .date()
      .required("Campo obrigatório")
      .nullable()
      .typeError("Campo Obrigatório"),
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
    onClose();
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
        <ModalHeader
          w="97%"
          textAlign="center"
          fontSize="1.18rem"
          paddingBottom="1%"
        >
          {plant.name}
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <FormLabel fontWeight="bold" marginBottom="0">
            Apelido
          </FormLabel>
          <Editable
            textAlign="left"
            defaultValue={plant.name}
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
          <Divider as="hr" borderColor="green.800" margin="4px 0" />

          <FormLabel fontWeight="bold" marginBottom="0">
            Lembrete
          </FormLabel>
          <Editable
            textAlign="left"
            defaultValue={plant.reminder}
            fontSize="sm"
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
          <Divider as="hr" borderColor="green.800" margin="4px 0" />

          <FormLabel fontWeight="bold" marginBottom="0">
            Detalhes
          </FormLabel>

          <StyledTextArea
            defaultValue={plant.details}
            {...register("details")}
          />

          <Divider as="hr" borderColor="green.800" margin="4px 0" />

          <FormLabel fontWeight="bold" marginBottom="0">
            Ultima rega
          </FormLabel>
          <Flex flexDirection="column">
            <StyledInput
              type="date"
              // defaultValue={plant.last_watering}
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
                borderRadius={"50px 0 50px 0"}
                mt="2px"
                fontSize={["0.75rem", "1rem"]}
                w={["35%", "30%"]}
              >
                remover
              </Button>
            )}
            <Button
              _hover={{ bg: "green.800" }}
              _active={{ borderColor: "none" }}
              _focus={{ borderColor: "none" }}
              color="white"
              bg="green.400"
              borderRadius={"50px 0 50px 0"}
              mt="2px"
              type="submit"
              fontSize={["0.75rem", "1rem"]}
              w={["35%", "30%"]}
            >
              editar
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
