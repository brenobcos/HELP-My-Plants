import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../providers/auth";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HiMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
interface SignInData {
  email: string;
  password: string;
}

function LogInForm() {
  const signInSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const { signIn } = useAuth();
  const history = useHistory();

  function handleSignIn(data: SignInData) {
    signIn(data);
  }

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Text fontSize={28} textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}>
        Entrar
      </Text>
      <Text
        fontSize={14}
        textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        sx={{ paddingBottom: "15px" }}
      >
        Faça login para cuidar das suas plantas
      </Text>
      <Stack
        sx={{ alignItems: "center", justifyContent: "center", gap: "15px" }}
      >
        <FormControl
          as="form"
          isInvalid={!!errors}
          sx={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            flexDirection: "column",
          }}
          onSubmit={handleSubmit(handleSignIn)}
        >
          <InputGroup sx={{ display: "flex", flexDirection: "column" }}>
            <Input
              id="email"
              focusBorderColor="green.400"
              placeholder="E-mail"
              sx={{
                backgroundColor: "green.800",
                color: "green.100",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                height: "45px",
                border: "none",
              }}
              _placeholder={{ color: "green.100", fontWeight: "medium" }}
              isInvalid={!!errors.email}
              {...register("email")}
            />
            <InputRightElement
              children={
                <Icon
                  as={HiMail}
                  sx={{ color: "green.100", height: "24px", width: "24px" }}
                />
              }
            />

            {!!errors.email?.message && (
              <FormErrorMessage
                color="red.400"
                fontSize="10px"
                sx={{ paddingTop: "5px", margin: "0px" }}
              >
                {errors.email?.message}
              </FormErrorMessage>
            )}
          </InputGroup>
          <InputGroup sx={{ display: "flex", flexDirection: "column" }}>
            <Input
              id="password"
              focusBorderColor="green.400"
              placeholder="Senha"
              sx={{
                backgroundColor: "green.800",
                color: "green.100",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                height: "45px",
                border: "none",
              }}
              _placeholder={{ color: "green.100", fontWeight: "medium" }}
              type="password"
              isInvalid={!!errors.password}
              {...register("password")}
            />
            <InputRightElement
              children={
                <Icon
                  as={FaLock}
                  sx={{ color: "green.100", height: "24px", width: "24px" }}
                />
              }
            />
            {!!errors.password?.message && (
              <FormErrorMessage
                color="red.400"
                fontSize="10px"
                sx={{ paddingTop: "5px", margin: "0px" }}
              >
                {errors.password?.message}
              </FormErrorMessage>
            )}
          </InputGroup>
          <Text fontSize={12} textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}>
            Não tem uma conta ainda? Clique{" "}
            <b onClick={() => history.push("/signup")}>aqui.</b>
          </Text>
          <Button
            sx={{
              backgroundColor: "green.400",
              color: "green.800",
              width: "100%",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
            _hover={{ bg: "green.400", transform: "scale(1.01)" }}
            _active={{
              bg: "green.400",
              transform: "scale(0.98)",
              borderColor: "green.800",
            }}
            _focus={{
              boxShadow: "0 0 1px 2px #184A2C, 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            type="submit"
          >
            Entrar
          </Button>
        </FormControl>
      </Stack>
    </Box>
  );
}

export default LogInForm;
