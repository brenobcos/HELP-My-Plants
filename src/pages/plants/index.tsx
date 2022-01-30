import { useDisclosure } from "@chakra-ui/react";
import ModalEditPlant from "../../components/modals/modalEditPlant";
import ModalNewPlant from "../../components/modals/modalAddPlant";
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
  last_watering?: string;
  details?: string;
  userId?: number;
  id?: number;
}

function Plants() {
  const { getUserPlants, userPlants } = useUserPlants();
  const { plants, renderPlants } = usePlants();
  const { user, accessToken } = useAuth();

  useEffect(() => {
    getUserPlants(user.id, accessToken);
    renderPlants();
  }, []);

  const [plantState, setPlantState] = useState<plant>({} as plant);

  const {
    isOpen: isModalAddPlantOpen,
    onOpen: onCartOpen,
    onClose: onModalAddClose,
  } = useDisclosure();

  console.log(plantState);

  function onClickButton(plant: plant) {
    onCartOpen();
    setPlantState(plant);
  }
  return (
    <div>
      <ModalEditPlant
        isOpen={isModalAddPlantOpen}
        onClose={onModalAddClose}
        plant={plantState}
      />
      ;
      {userPlants.map((plant: plant) => {
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
