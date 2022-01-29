import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

import { api } from "../../services";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../auth";
interface PlantsProviderData {
  plants: Array<object>;
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

  useEffect(() => {
    renderPlants();
  }, []);

  return (
    <PlantsContext.Provider value={{ plants }}>
      {children}
    </PlantsContext.Provider>
  );
}
