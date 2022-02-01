import { DashboardsRender } from "../../components/dashboardAndPlants";
import { CardDashboard } from "../../components/CardDashboard";
import { useUserPlants } from "../../providers/userPlantsProvider";
import { useAuth } from "../../providers/auth";
import { useEffect, useState } from "react";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ModalEditPlant } from "../../components/modals/modalEditPlant";


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

function Dashboard() {
  const { userPlants, getUserPlants } = useUserPlants();
  const { user } = useAuth();

  useEffect(() => {
    getUserPlants(user.id);
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
    >
      {userPlants.length >= 1 ? (
        <Flex
          w="900px"
          h="500px"
          overflowX="scroll"
          position="fixed"
          bottom="5px"
          gap="25px"
        >
          {userPlants.map((plant: plant) => (
            <CardDashboard
              key={plant.id}
              name={plant.name}
              cientific_name={plant.cientific_name}
              height={plant.height}
              image={plant.image}
              info={plant.info}
              lighting={plant.lighting}
              temperature={plant.temperature}
              water={plant.water}
              last_watering={plant.last_watering}
              onClick={()=>onClickButton(plant)}
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
            Adicione novas plantas clicando{" "}
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

export default Dashboard;
