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
import { useAuth } from "../../providers/auth/index";
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
  id: number;
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
export function ModalNewPlant({ isOpen, onClose, plant }: ModalNewPlantProps) {
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

  const { user } = useAuth();
  const { addNewPlant } = useUserPlants();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPlantData>({ resolver: yupResolver(registerPlantSchema) });

  function handleAddPlant(data: NewPlantData) {
    addNewPlant({
      ...plant,
      surname: data.surname,
      last_watering: data.last_watering,
      details: data.details,
      userId: user.id,
      reminder: data.reminder,
    });
    onClose();
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(handleAddPlant)}
        width={["280px", "400px"]}
        maxHeight="85%"
        borderRadius="50px 8px 50px 0px "
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
            defaultValue={plant.name}
            fontSize="md"
            fontWeight="light"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <EditablePreview maxHeight="40px" overflow="auto" />
            <EditableInput
              {...register("surname")}
              width={["150px", "260px"]}
              id="2"
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
            defaultValue="algo que você não pode esquecer"
            fontSize="md"
            fontWeight="light"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            maxBlockSize="200px"
          >
            <EditablePreview maxHeight="40px" overflow="auto" />
            <EditableInput
              {...register("reminder")}
              width={["150px", "260px"]}
              id="3"
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

          <StyledTextArea
            defaultValue={"Mais informações que você achar relevante aqui:)"}
            {...register("details")}
          />

          <Divider as="hr" borderColor="green.800" margin="4px 0" />

          <FormLabel fontWeight="bold">Ultima rega</FormLabel>
          <Flex flexDirection="column">
            <StyledInput type="date" {...register("last_watering")} id="5" />
            {errors.last_watering?.message && (
              <Text as="span" fontSize="0.7rem" color="red.700">
                {errors.last_watering?.message}
              </Text>
            )}
          </Flex>

          <Divider as="hr" borderColor="green.800" margin="8px 0" />

          <Button
            _hover={{ bg: "green.800" }}
            _active={{ borderColor: "none" }}
            _focus={{ borderColor: "none" }}
            color="white"
            bg="green.400"
            mr={3}
            borderRadius={"50px 0 50px 0"}
            marginLeft="67%"
            mt="10px"
            type="submit"
            w="35%"
          >
            adicionar
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
