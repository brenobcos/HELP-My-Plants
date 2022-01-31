import { useDisclosure } from "@chakra-ui/react";
import { ModalNewPlant } from "../../components/modals/modalAddPlant";
import { useUserPlants } from "../../providers/userPlantsProvider";
import { useAuth } from "../../providers/auth";
import { useState, useEffect } from "react";
import { usePlants } from "../../providers/plantsProvider";
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
  reminder?: string;
  last_watering?: string;
  details?: string;
  userId?: number;
  id?: number;
}

function Plants() {
  const { getUserPlants } = useUserPlants();
  const { plants, renderPlants } = usePlants();
  const { user, accessToken } = useAuth();

  useEffect(() => {
    getUserPlants(user.id, accessToken);
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
      <ModalNewPlant
        isOpen={isModalAddPlantOpen}
        onClose={onModalAddClose}
        plant={plantState}
      />
      ;
      {plants.map((plant: plant) => {
        return (
          <div key={plant.name}>
            <button onClick={() => onClickButton(plant)}>edit</button>
          </div>
        );
      })}
    </div>
  );
}

export default Plants;
