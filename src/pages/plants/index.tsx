import { Flex, useDisclosure } from "@chakra-ui/react";
import { ModalNewPlant } from "../../components/modals/modalAddPlant";
import { useUserPlants } from "../../providers/userPlantsProvider";
import { useAuth } from "../../providers/auth";
import { useState, useEffect } from "react";
import { usePlants } from "../../providers/plantsProvider";
import { CardDatabase } from "../../components/CardDatabase";
import { DashboardsRender } from "../../components/dashboardAndPlants";
import { theme } from "../../styles/theme";

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
  id: number;
}

function Plants() {
  const { getUserPlants } = useUserPlants();
  const { plants, renderPlants } = usePlants();
  const { user } = useAuth();

  useEffect(() => {
    getUserPlants(user.id);
    renderPlants();
  }, []);

  const [plantState, setPlantState] = useState<plant>({} as plant);

  const {
    isOpen: isModalAddPlantOpen,
    onOpen: onModalOpen,
    onClose: onModalAddClose,
  } = useDisclosure();

  function onClickButton(plant: plant) {
    onModalOpen();
    setPlantState(plant);
  }
  return (
    <DashboardsRender
      firstLink="/dashboard"
      firstText="Meu Jardim"
      title="Adicione uma nova planta ao seu jardim"
    >
      <Flex
        w={["90vw"]}
        h="450px"
        overflowX="scroll"
        css={{
          "&::-webkit-scrollbar": {
            width: "1px",
          },
          "&::-webkit-scrollbar-track": {
            width: "1px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: `${theme.colors.green[400]}`,
            borderRadius: "24px",
          },
        }}
        gap="25px"
        alignItems="flex-start"
      >
        {plants.map((plant: plant) => (
          <CardDatabase
            key={plant.id}
            id={plant.id}
            name={plant.name}
            cientific_name={plant.cientific_name}
            height={plant.height}
            image={plant.image}
            info={plant.info}
            lighting={plant.lighting}
            temperature={plant.temperature}
            water={plant.water}
            onClick={() => onClickButton(plant)}
          />
        ))}
      </Flex>
      <ModalNewPlant
        isOpen={isModalAddPlantOpen}
        onClose={onModalAddClose}
        plant={plantState}
      />
    </DashboardsRender>
  );
}

export default Plants;
