import { useDisclosure } from "@chakra-ui/react";
import ModalNewPlant from "../../components/modals/modalAddPlant";
import { usePlants } from "../../providers/plantsProvider";
import { useState, useEffect } from "react";
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
  const { plants, renderPlants } = usePlants();

  useEffect(() => {
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
      <ModalNewPlant
        isOpen={isModalAddPlantOpen}
        onClose={onModalAddClose}
        plant={plantState}
      />
      ;
      {plants.map((plant: plant) => {
        return (
          <div key={plant.name}>
            <button onClick={() => onClickButton(plant)}>+</button>
          </div>
        );
      })}
    </div>
  );
}

export default Plants;
