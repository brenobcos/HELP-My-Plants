import { useContext } from "react";
import { Button, Flex, Heading, Input, Text, VStack } from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthContext";
import { InputComponent } from "../../../components/input";
import { FaCaretDown, FaEnvelope, FaLock, FaUser } from "react-icons/fa";

interface SignUpData {
  email: string;
  name: string;
  interest: string;
  password: string;
  confirm_password?: string;
}

export function RegisterForm() {
  const { SignUp } = useContext(AuthContext);

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
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo de 6 dígitos"),
    confirm_password: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({ resolver: yupResolver(registerSchema) });

  function onSubmitFunction(signup: SignUpData) {
    SignUp(signup);
  }

  return (
    <Flex
      onSubmit={handleSubmit(onSubmitFunction)}
      as="form"
      flexDirection="column"
      maxW="500px"
      w={["80vw", "60vw", "50vw", "30vw"]}
    >
      <Heading as="h3" fontSize="2xl" fontWeight="regular" textAlign="center">
        Cadastro
      </Heading>
      <Text fontSize="sm" mt={["4", "4", "6", "6"]} textAlign="center">
        Faça o cadastro para cuidar das suas plantas
      </Text>
      <VStack mt="6" spacing="4">
        <InputComponent
          {...register("name")}
          error={errors.name}
          icon={FaUser}
          placeholder="Nome"
        />
        <InputComponent
          {...register("email")}
          error={errors.email}
          icon={FaEnvelope}
          placeholder="Email"
        />
        <InputComponent
          {...register("interest")}
          error={errors.interest}
          icon={FaCaretDown}
          placeholder="Interesse"
          type="select"
        />
        <InputComponent
          {...register("password")}
          error={errors.password}
          icon={FaLock}
          placeholder="Senha"
          type="password"
        />
        <InputComponent
          {...register("confirm_password")}
          error={errors.confirm_password}
          icon={FaLock}
          placeholder="Confirmação de senha"
          type="password"
        />
      </VStack>
      <Button
        type="submit"
        _active={{
          bg: "green.400",
          transform: "scale(0.98)",
          borderColor: "green.800",
        }}
        _focus={{
          boxShadow: "0 0 1px 2px #184A2C, 0 1px 1px rgba(0, 0, 0, .15)",
        }}
        _hover={{ bg: "green.400", transform: "scale(1.01)" }}
        backgroundColor="green.400"
        color="green.800"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        mt="8"
        width="100%"
      >
        Cadastrar
      </Button>
    </Flex>
  );
}
