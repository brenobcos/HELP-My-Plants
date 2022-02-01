import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../../services/index";
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
  id?: number;
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
      .catch((error) => console.log(error));
  }

  function addNewPlant(plant: plant) {
    api
      .post("/userPlants/", plant, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        console.log("Planta adicionada");
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
        console.log("Planta editada");
        getUserPlants(user.id);
      })
      .catch((error) => console.log(error));
  }

  function deleteUserPlant(plantId: number) {
    api
      .delete(`userPlants/${plantId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        console.log("Planta removida");
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
