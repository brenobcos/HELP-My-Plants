import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import EditUser from "../../components/EditUser";
import Header from "../../components/header";
import {
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiChakraui,
} from "react-icons/si";

function AboutUs() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Header firstLink="curiosity" firstText="Como cuidar da sua planta" />
      <EditUser isOpen={isOpen} onClose={onClose} />
      <Button onClick={() => onOpen()}>Abrir Modal</Button>
      <Flex
        flexDir="column"
        borderRadius="50px 0 50px 0"
        border="2px solid"
        bgColor="#184A2C"
      >
        <Flex justifyContent="space-around">
          <SiTypescript color="white" />
          <SiReact color="white" />
          <SiHtml5 color="white" />
          <SiCss3 color="white" />
          <SiChakraui color="white" />
        </Flex>
        <Flex flexDir="column">
          <Text color="white">
            Projeto de conclusão de curso realizado pelos desenvolvedores
            citados, de tema livre.
          </Text>
          <Text color="white">
            A idéia foi desenvolver um protótipo funcional de um WebApp, focado
            em ajudar as pessoas a tererm um maior controle sobre a qualidade de
            suas plantas ornamentais.
          </Text>
          <Text color="white">
            Há a possibilidade de escalabilidade da aplicação para incluir um
            market place, leitor de QR Code para identificação, recomendação de
            plantas por variáveis filtros, dentre outros.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default AboutUs;
