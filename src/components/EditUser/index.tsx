import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import EditableControls from "../EditableControls.tsx/EditableControls";

interface editUserProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UserProps {
  name: string;
  email: string;
  interest: string;
}

function EditUser({ isOpen, onClose }: editUserProps) {
  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀ ÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Seu nome deve ter somente letras"
      ),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    interest: yup.string().required("Interesse obrigatório"),
  });
  const { register, handleSubmit } = useForm<UserProps>({
    resolver: yupResolver(registerSchema),
  });

  function handleEditUser(data: UserProps) {
    //função de patch no usuário
    console.log(data);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius="50px 0 50px 0"
        bg="#fff"
        border="3px solid green.400"
      >
        <ModalHeader textAlign="center">Editar Usuário</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl as="form" onSubmit={handleSubmit(handleEditUser)}>
            <FormLabel>Nome</FormLabel>
            <Editable
              textAlign="left"
              defaultValue="Ransegan"
              fontSize="md"
              fontWeight="light"
            >
              <EditablePreview />
              <EditableInput {...register("name")} />
            </Editable>
            <FormLabel>Email</FormLabel>
            <Editable
              textAlign="left"
              defaultValue="Email"
              fontSize="md"
              fontWeight="light"
            >
              <EditablePreview />
              <EditableInput {...register("email")} />
              <EditableControls />
            </Editable>
            <FormLabel>Interesse</FormLabel>
            <RadioGroup
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              defaultValue="1"
              name="form-name"
            >
              <Radio value="1" {...register("interest")}>
                Radio1
              </Radio>
              <Radio value="2" {...register("interest")}>
                Radio2
              </Radio>
              <Radio value="3" {...register("interest")}>
                Radio3
              </Radio>
            </RadioGroup>
          </FormControl>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="space-between">
          <Button
            onClick={onClose}
            color="white"
            _hover={{ bg: "red.700" }}
            _active={{ borderColor: "none" }}
            _focus={{ borderColor: "none" }}
            bg="red.400"
            mr={3}
            borderRadius={"50px 0 50px 0"}
          >
            Cancel
          </Button>
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
