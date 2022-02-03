import { DashboardsRender } from "../../components/DashboardAndPlants";
import { CardDashboard } from "../../components/CardDashboard";
import { useUserPlants } from "../../providers/UserPlantsProvider";
import { useEffect, useState } from "react";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ModalEditPlant } from "../../components/Modal/ModalEditPlant";
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
  reminder?: string;
  surname?: string;
  last_watering?: string;
  details?: string;
  userId?: number;
  id: number;
}

export function Dashboard() {
  const { userPlants, getUserPlants } = useUserPlants();

  useEffect(() => {
    getUserPlants();
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
      title="Meu Jardim"
      firstLink="/plants"
      firstText="Encontrar uma nova planta"
      topTitle={true}
    >
      {userPlants.length >= 1 ? (
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
          h="480px"
          mt={["20px", "0"]}
          overflowX="scroll"
          w={["90vw"]}
        >
          {userPlants.map((plant: plant, index) => (
            <CardDashboard
              key={index}
              name={plant.name}
              cientific_name={plant.cientific_name}
              height={plant.height}
              image={plant.image}
              info={plant.info}
              reminder={plant.reminder}
              lighting={plant.lighting}
              temperature={plant.temperature}
              water={plant.water}
              last_watering={plant.last_watering}
              onClick={() => onClickButton(plant)}
            />
          ))}
          <ModalEditPlant
            isOpen={isModalAddPlantOpen}
            onClose={onModalAddClose}
            plant={plantState}
          />
        </Flex>
      ) : (
        <Flex
          flexDirection="column"
          h="30vh"
          justify="space-evenly"
          mt={["15%", "7%", "3%", "3%"]}
          w={["90vw", "70vw", "50vw"]}
        >
          <Text textAlign="center">
            Você ainda não tem plantas no seu jardim.
          </Text>
          <Text textAlign="center">
            Adicione novas plantas clicando
            <Link to="/plants">
              <b>aqui</b>
            </Link>
            .
          </Text>
        </Flex>
      )}
    </DashboardsRender>
  );
}

