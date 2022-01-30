import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { CardDashboard } from "../../components/CardDashboard";
import { useAuth } from "../../providers/auth";
import { useUserPlants } from "../../providers/userPlantsProvider";

function Dashboard() {
  const { userPlants, getUserPlants } = useUserPlants();
  const { user, accessToken } = useAuth();

  console.log(userPlants);

  useEffect(() => {
    getUserPlants(user.id, accessToken);
  },[]);

  return (
    <Flex maxW="100vw" h="100vh" >
      <Flex w="75rem" maxH="60rem" overflowX="scroll" mt="5" ml="5" gap="5">
        {userPlants.map((plant) => (
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
    </Flex>
  );
}

export default Dashboard;
