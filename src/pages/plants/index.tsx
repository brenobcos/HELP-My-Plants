import { useDisclosure } from "@chakra-ui/react";
import { ModalNewPlant } from "../../components/modals/modalAddPlant";
import { useUserPlants } from "../../providers/userPlantsProvider";
import { useAuth } from "../../providers/auth";
import { useState, useEffect } from "react";
import { usePlants } from "../../providers/plantsProvider";
import { CardDatabase } from "../../components/CardDatabase";

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
    <div>
      ;
      {plants.map((plant: plant) => {
        return (
          <div key={plant.name}>
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
            <ModalNewPlant
              isOpen={isModalAddPlantOpen}
              onClose={onModalAddClose}
              plant={plantState}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Plants;
