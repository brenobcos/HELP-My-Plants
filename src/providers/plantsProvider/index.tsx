import { createContext, useState, ReactNode, useContext } from "react";

import { api } from "../../services";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../auth";

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
  surname?: string;
  last_watering?: string;
  details?: string;
  userId?: number;
  id?: number;
}
interface PlantsProviderData {
  plants: Array<plant>;
  renderPlants: () => void;
}

interface PlantsProps {
  children: ReactNode;
}

export const PlantsContext = createContext<PlantsProviderData>(
  {} as PlantsProviderData
);

export function usePlants() {
  const context = useContext(PlantsContext);
  return context;
}
export function PlantsProvider({ children }: PlantsProps) {
  const toast = useToast();

  const [plants, setPlants] = useState([]);

  const { accessToken } = useAuth();
  function renderPlants() {
    api
      .get("/plants", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setPlants(response.data);
      })
      .catch((err) => {
        toast({
          title: "Não foi possível renderizar as plantas",
          position: "top",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  }

  return (
    <PlantsContext.Provider value={{ plants, renderPlants }}>
      {children}
    </PlantsContext.Provider>
  );
}
