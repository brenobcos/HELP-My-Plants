import { Button, useDisclosure } from "@chakra-ui/react";
import EditUser from "../../components/EditUser";
import Header from "../../components/header";

function AboutUs() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Header firstLink="curiosity" firstText="Como cuidar da sua planta" />
      <EditUser isOpen={isOpen} onClose={onClose} />
      <Button onClick={() => onOpen()}>Abrir Modal</Button>
    </>
  );
}

export default AboutUs;
