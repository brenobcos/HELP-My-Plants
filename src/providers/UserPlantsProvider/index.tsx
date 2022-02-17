import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../services/index";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../Auth";
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
  last_watering?: Date;
  details?: string;
  userId?: number;
  id: number;
}
interface UserPlantsContextData {
  getUserPlants: () => void;
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

  useEffect(() => {
    if (!!user) {
      getUserPlants();
    }
  }, [user]);

  function getUserPlants() {
    api
      .get(`/userPlants/?userId=${user.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setUserPlants(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function addNewPlant(plant: plant) {
    await api
      .post("/userPlants/", plant, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        getUserPlants();
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
        getUserPlants();
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
        if (userPlants.length > 1) {
          getUserPlants();
        } else {
          setUserPlants([]);
        }

        toast({
          title: "Planta removida",
          description: "Escolha uma nova planta na pagína de plantas",
          status: "info",
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
