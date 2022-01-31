import { Button, Flex, Heading, Select, Text, VStack } from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../providers/auth/index";
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
  const { SignUp } = useAuth();

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

  function onSignUp(signup: SignUpData) {
    SignUp(signup);
  }

  return (
    <Flex
      onSubmit={handleSubmit(onSignUp)}
      alignItems="center"
      as="form"
      flexDirection="column"
      position="relative"
      // bottom={["auto", "auto","50px"]}
      maxW="500px"
      width={["100vw", "400px", "500px"]}
    >
      <Heading
        as="h3"
        fontSize={["3xl", "3xl", "4xl"]}
        fontWeight="regular"
        textAlign="center"
      >
        Cadastro
      </Heading>
      <Text fontSize={["sm"]} textAlign="center">
        Faça o cadastro para cuidar das suas plantas
      </Text>
      <VStack mt="4" spacing="2">
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
        <Flex flexDirection="column" w={["90%", "90%", "80%", "80%"]}>
          <Select
            {...register("interest")}
            icon={<FaCaretDown />}
            placeholder={"Interesse"}
            _placeholder={{ color: "green.100", fontWeight: "medium" }}
            backgroundColor="green.800"
            border="none"
            color="green.100"
            filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            focusBorderColor="green.400"
            height="45px"
            w="100%"
          >
            <option style={{ color: "black" }} value="hobby">
              Hobby
            </option>
            <option style={{ color: "black" }} value="professional">
              Profissional
            </option>
            <option style={{ color: "black" }} value="student">
              Estudante
            </option>
          </Select>
          <Text fontSize="xs" color="red.700" h="10px">
            {errors?.interest?.message}
          </Text>
        </Flex>

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
        backgroundColor="green.100"
        color="green.800"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        height="3vw"
        maxHeight="70px"
        minHeight="45px"
        mt="2"
        w={["89%", "83%", "59%"]}
        maxW={["332px", "100%", "100%"]}
      >
        Cadastrar
      </Button>
    </Flex>
  );
}
