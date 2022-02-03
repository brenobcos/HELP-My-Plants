import { createContext, ReactNode, useContext, useState } from "react";

import { useToast } from "@chakra-ui/react";

import { api } from "../../services/index";
import { useHistory } from "react-router-dom";

interface AuthProviderProps {
  children: ReactNode;
}

interface SignUpData {
  email: string;
  name: string;
  interest: string;
  password: string;
  confirm_password?: string;
}

interface User {
  id: number;
  email: string;
  name: string;
  interest: string;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface PatchUser {
  email: string;
  name: string;
  interest: string;
}

interface AuthContextData {
  user: User;
  accessToken: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  SignUp: ({ name, email, password, interest }: SignUpData) => void;
  patchUser: (patchData: PatchUser) => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

function AuthProvider({ children }: AuthProviderProps) {
  const history = useHistory();
  const toast = useToast();

  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@HelpMyPlants:accessToken");
    const user = localStorage.getItem("@HelpMyPlants:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  async function signIn({ email, password }: SignInCredentials) {
    api
      .post("/login", { email, password })
      .then((res) => {
        history.push("/dashboard");
        toast({
          title: `Bem vindo, ${res.data.user.name}!!!!`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        const { accessToken, user } = res.data;
        localStorage.setItem("@HelpMyPlants:user", JSON.stringify(user));
        localStorage.setItem("@HelpMyPlants:accessToken", accessToken);

        setData({ accessToken, user });
      })
      .catch((err) => {
        toast({
          title: "Senha ou email incorreto.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  }

  async function SignUp({ name, email, password, interest }: SignUpData) {
    api
      .post("/users", { name, email, password, interest })
      .then((res) => {
        history.push("/");
        toast({
          title: `Bem vindo ${name}`,
          description: "Cadastro realizado com sucesso",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "Email já cadastrado.",
          description: "Tente outro Email",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  }

  function signOut() {
    localStorage.removeItem("@HelpMyPlants:accessToken");
    localStorage.removeItem("@HelpMyPlants:user");
    setData({} as AuthState);
  }

  async function patchUser(patchData: PatchUser) {
    await api
      .patch(
        `/users/${data.user.id}`,
        { ...patchData },
        {
          headers: { Authorization: `Bearer ${data.accessToken}` },
        }
      )
      .then((res) => {
        localStorage.setItem(
          "@HelpMyPlants:user",
          JSON.stringify({
            name: res.data.name,
            email: res.data.email,
            id: res.data.id,
            interest: res.data.interest,
          })
        );
        toast({
          title: "Usuário Atualizado",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .then((_) => attUser())
      .catch(() =>
        toast({
          title: "Erro ao atualizar!",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  }

  function attUser() {
    setData(() => {
      const accessToken = localStorage.getItem("@HelpMyPlants:accessToken");
      const user = localStorage.getItem("@HelpMyPlants:user");

      if (accessToken && user) {
        return { accessToken, user: JSON.parse(user) };
      }

      return {} as AuthState;
    });
  }

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signIn,
        signOut,
        SignUp,
        patchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
