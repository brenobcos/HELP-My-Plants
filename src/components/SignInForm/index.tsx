import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../providers/auth";
import { InputComponent } from "../input";
import { Box, Button, FormControl, Stack, Text } from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";

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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        mb: "6%",
        width: ["100vw", "400px", "500px"],
      }}
    >
      <Text fontSize={["2xl", "4xl"]}>Entrar</Text>
      <Text
        fontSize={["sm", "md"]}
        sx={{ paddingBottom: ["15px", "20px", "30px"] }}
      >
        Faça login para cuidar das suas plantas :)
      </Text>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <FormControl
          as="form"
          sx={{
            width: ["90%", "80%", "70%"],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            flexDirection: "column",
          }}
          onSubmit={handleSubmit(handleSignIn)}
        >
          <InputComponent
            {...register("email")}
            error={errors.email}
            icon={FaEnvelope}
            placeholder="E-mail"
          />
          <InputComponent
            {...register("password")}
            error={errors.password}
            icon={FaLock}
            placeholder="Senha"
            type="password"
          />
          <Text
            fontSize={["xs", "sm"]}
            textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          >
            Não tem uma conta ainda? Clique{" "}
            <b onClick={() => history.push("/signup")}>aqui.</b>
          </Text>
          <Button
            sx={{
              backgroundColor: "green.100",
              color: "green.800",
              width: "80%",
              height: "3vw",
              maxHeight: "70px",
              minHeight: "45px",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",

              fontSize: [12, 18],
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
