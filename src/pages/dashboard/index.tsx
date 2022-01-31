import { DashboardsRender } from "../../components/dashboardAndPlants";
import { CardDashboard } from "../../components/CardDashboard";
import { useUserPlants } from "../../providers/userPlantsProvider";
import { useAuth } from "../../providers/auth";
import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";

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
  const { user, accessToken } = useAuth();

  useEffect(() => {
    getUserPlants(user.id, accessToken);
  }, []);

  return (
    <DashboardsRender
      title="Meu Jardim"
      firstLink="/plants"
      firstText="Encontrar uma nova planta"
    >
      <Flex w="900px" h="500px" overflowX="scroll" position="fixed" bottom="5px" gap="25px">
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
          />
        ))}
      </Flex>
    </DashboardsRender>
  );
}

export default Dashboard;
