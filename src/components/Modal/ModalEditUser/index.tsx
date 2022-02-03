import {
  Button,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useRadioGroup,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioCard from "./RadioCard";
import { useState } from "react";
import { useAuth } from "../../../providers/Auth";
import {EditableControls} from "../../EditableControls";

interface editUserProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UserProps {
  name: string;
  email: string;
}

function EditUser({ isOpen, onClose }: editUserProps) {
  const { user, patchUser } = useAuth();
  const [interest, setInterest] = useState(user.interest);
  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀ ÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Seu nome deve ter somente letras"
      ),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>({
    resolver: yupResolver(registerSchema),
  });


    function handleEdit(data: UserProps) {
      const newUser = {
        name: data.name,
        email: data.email,
        interest: interest,
      };
      patchUser(newUser);
      onClose();
    }


  const options = ["Hobby", "Profissional", "Estudante"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "interest",
    defaultValue: user.interest,
    onChange: (event) => setInterest(event),
  });
  const group = getRootProps();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(handleEdit)}
        width={["280px", "400px"]}
        borderRadius="50px 8px 50px 0px "
        border="3px solid transparent"
        bg="linear-gradient(#FFFFFF, #FFFFFF) padding-box,linear-gradient(50deg, #FFFFFF 25%, #46FF42 50%,#FFFFFF 75%) border-box"
      >
        <ModalHeader textAlign="center">Editar Usuário</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormLabel>Nome</FormLabel>
          <Editable
            display="flex"
            justifyContent="space-between"
            textAlign="left"
            defaultValue={user.name}
            fontSize="md"
            fontWeight="light"
          >
            <EditablePreview />
            <EditableInput {...register("name")} width={["150px", "260px"]} />
            <EditableControls />
          </Editable>
          {errors.name?.message && (
            <Text as="span" fontSize="0.7rem" color="red.700">
              {errors.name?.message}
            </Text>
          )}
          <Divider as="hr" borderColor="green.800" margin="8px 0" />
          <FormLabel>Email</FormLabel>
          <Editable
            display="flex"
            justifyContent="space-between"
            textAlign="left"
            defaultValue={user.email}
            fontSize="md"
            fontWeight="light"
          >
            <EditablePreview />
            <EditableInput {...register("email")} width={["150px", "260px"]} />
            <EditableControls />
          </Editable>
          {errors.email?.message && (
            <Text as="span" fontSize="0.7rem" color="red.700">
              {errors.email?.message}
            </Text>
          )}
          <Divider as="hr" borderColor="green.800" margin="8px 0" />
          <FormLabel>Interesse</FormLabel>
          <HStack
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            {...group}
          >
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </HStack>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="flex-end">
          <Button
            _hover={{ bg: "green.800" }}
            _active={{ borderColor: "none" }}
            _focus={{ borderColor: "none" }}
            color="white"
            bg="green.400"
            mr={3}
            borderRadius={"50px 0 50px 0"}
            type="submit"
          >
            SALVAR
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditUser;
