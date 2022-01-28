import { createContext, useState, ReactNode } from "react";

import { api } from "../../services";
import { useToast } from "@chakra-ui/react";

interface PlantsProviderData {
  plants: Array<object>;
  renderPlants: () => void;
}

interface PlantsProps {
  children: ReactNode;
}

export const PlantsContext = createContext<PlantsProviderData>(
  {} as PlantsProviderData
);

export function PlantsProvider({ children }: PlantsProps) {
  const toast = useToast();

  const [plants, setPlants] = useState([]);

  function renderPlants() {
    api
      .get("/plants")
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
