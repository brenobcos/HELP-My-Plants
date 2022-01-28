//Criar a base do modal
//pesquisar no chakra
//fazer as requisições para trazer os dados e coloca-los como conteúdo dos inputs
/*
            titulo(nome da planta)
    apelido(input)
    
    Info(text):
    
    lembrete(input)
    detalhes(textArea(mas faz um input primeiro))


    icone???????
    ultima rega??????

    botão cancelar          botão adicionar
          
 **/

//organizar o formulário e mandar para a api
import ModalNewPlant from "../../components/modals/modalNewPlant";
import { useDisclosure } from "@chakra-ui/react";
import { usePlants } from "../../providers/plantsProvider";
function Plants() {
  const {
    isOpen: isCreatePlantOpen,
    onOpen: onCreatePlantOpen,
    onClose: onCreatePlantClose,
  } = useDisclosure();

  // const { plants } = usePlants();
  // console.log(plants);

  // plants.map(plant =>
  //   <>
  //   <ModalNewPlant
  //   isOpen={isCreatePlantOpen}
  //   onClose={onCreatePlantClose}
  //   plant={plant}
  //   /> )
  //   <button onClick={onCreatePlantOpen}>open modal</button>;
  //   </>
  return <div>plants</div>;
}

export default Plants;
