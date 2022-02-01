import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../../services/index";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../auth";
interface UserPlantsProviderProps {
  children: ReactNode;
}

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
  last_watering?: string;
  details?: string;
  userId?: number;
  id: number;
}
interface UserPlantsContextData {
  getUserPlants: (userId: number) => void;
  addNewPlant: (plant: plant) => void;
  changeUserPlant: (plant: plant) => void;
  deleteUserPlant: (plantId: number) => void;
  userPlants: plant[];
}

const UserPlantsContext = createContext<UserPlantsContextData>(
  {} as UserPlantsContextData
);

function useUserPlants() {
  const context = useContext(UserPlantsContext);
  return context;
}
function UserPlantsProvider({ children }: UserPlantsProviderProps) {
  const [userPlants, setUserPlants] = useState<plant[]>([]);
  const { user, accessToken } = useAuth();

  const toast = useToast();

  function getUserPlants(userId: number) {
    api
      .get(`/userPlants/?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setUserPlants(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Ops... Algo deu errado",
          description:
            "Não foi possivel buscar suas plantas, recarregue a pagína ou tente novamente mais tarde",
          status: "error",
          duration: 6000,
          isClosable: true,
        });
      });
  }

  function addNewPlant(plant: plant) {
    api
      .post("/userPlants/", plant, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        getUserPlants(user.id);
        toast({
          title: "Informações registradas.",
          description: "Planta adicionada ao jardim",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Ops... Algo deu errado",
          description: "As informações não foram cadastradas, tente novamente.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  }

  function changeUserPlant(plant: plant) {
    api
      .patch(`/userPlants/${plant.id}`, plant, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        getUserPlants(user.id);
        toast({
          title: "Planta editada.",
          description: "As alterações foram salvas com sucesso",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Ops... Algo deu errado",
          description: "As informações não foram cadastradas, tente novamente.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  }

  function deleteUserPlant(plantId: number) {
    api
      .delete(`userPlants/${plantId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        getUserPlants(user.id);
        toast({
          title: "Planta removida",
          description: "Escolha uma nova planta na pagína de plantas",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Ops... Algo deu errado",
          description: "Não foi possível excluir a planta, tente novamente.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  }
  return (
    <UserPlantsContext.Provider
      value={{
        getUserPlants,
        addNewPlant,
        changeUserPlant,
        deleteUserPlant,
        userPlants,
      }}
    >
      {children}
    </UserPlantsContext.Provider>
  );
}

export { UserPlantsProvider, useUserPlants };
