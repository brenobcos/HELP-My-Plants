import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../../services/index";
import { useAuth } from "../auth";
interface UserPlantsProviderProps {
  children: ReactNode;
}

interface plant {
  name: string;
  cientific_name: string;
  water: number;
  lighting: {};
  temperature: {};
  height: {};
  info: string;
  image: string;
  userId?: number;
  id?: number;
}
interface UserPlantsContextData {
  getUserPlants: (userId: number, token: string) => void;
  addNewPlant: (plant: plant, token: string) => void;
  changeUserPlant: (plant: plant, token: string) => void;
  deleteUserPlant: (plantId: number, token: string) => void;
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

  function getUserPlants(userId: number) {
    api
      .get(`/userPlants/?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setUserPlants(response.data);
        console.log(userPlants);
      })
      .catch((error) => console.log(error));
  }

  function addNewPlant(plant: plant, token: string) {
    api
      .post("/userPlants/", plant, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        console.log("adicionando ao carrinho");
        getUserPlants(user.id);
      })
      .catch((error) => console.log(error));
  }

  function changeUserPlant(plant: plant) {
    api
      .patch(`/userPlants/${plant.id}`, plant, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        console.log("adicionando ao carrinho");
        getUserPlants(user.id);
      })
      .catch((error) => console.log(error));
  }

  function deleteUserPlant(plantId: number, token: string) {
    api
      .delete(`userPlants/${plantId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        console.log("adicionando ao carrinho");
        getUserPlants(user.id);
      })
      .catch((error) => console.log(error));
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
