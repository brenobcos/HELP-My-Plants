import { DashboardsRender } from "../../components/dashboardAndPlants";
import { CardDashboard } from "../../components/CardDashboard";
import { useUserPlants } from "../../providers/userPlantsProvider";
import { useAuth } from "../../providers/auth";
import { useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
      {userPlants.length>=1 ?  {userPlants.map((plant) => (
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
      ))}:
      <Flex flexDirection="column">
        <Text>Você ainda não tem plantas no seu jardim.</Text>
        <Text>Adicione plantas ao seu jardim clicando <Link to="/plants">aqui</Link>.</Text>
      </Flex>
      }
     
    </DashboardsRender>
  );
}

export default Dashboard;
