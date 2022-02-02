import { Flex, useDisclosure } from "@chakra-ui/react";
import { ModalNewPlant } from "../../components/modals/modalAddPlant";
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
  const { plants, renderPlants } = usePlants();

  useEffect(() => {
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
        alignItems="flex-start"
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
        h="450px"
        overflowX="scroll"
        w="90vw"
      >
        {plants.map((plant: plant, index) => (
          <CardDatabase
            key={index}
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
