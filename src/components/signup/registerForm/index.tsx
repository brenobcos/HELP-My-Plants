import { useContext } from "react";
import { Button, Flex, Heading, Input, Text, VStack } from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/auth";

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
      w={["90vw", "60vw", "50vw", "30vw"]}
    >
      <Heading as="h3" fontSize="2xl" fontWeight="regular" textAlign="center">
        Cadastro
      </Heading>
      <Text fontSize="sm" mt={["4", "4", "6", "6"]} textAlign="center">
        Faça o cadastro para cuidar das suas plantas
      </Text>
      <VStack mt="6" spacing="4">
        <Input {...register("name")} error={errors.name} placeholder="Nome" />
        <Input
          {...register("email")}
          error={errors.email}
          placeholder="Email"
        />
        <Input
          {...register("interest")}
          error={errors.interest}
          placeholder="Interesse"
          type="select"
        />
        <Input
          {...register("password")}
          error={errors.password}
          placeholder="Senha"
          type="password"
        />
        <Input
          {...register("confirm_password")}
          error={errors.confirm_password}
          placeholder="Confirmação de senha"
          type="password"
        />
      </VStack>
      <Button
        type="submit"
        _hover={{ bg: "green.400" }}
        bg="green.100"
        color="green.800"
        fontSize="md"
        mt="12"
      >
        Cadastrar
      </Button>
    </Flex>
  );
}
