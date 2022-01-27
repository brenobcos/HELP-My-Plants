import { Flex, Button, Text, Heading, Image } from "@chakra-ui/react";
// import img from "./assets/landingpagelarge.png";
const img = require("../../assets/landingpagelarge.png");
function LandingPage() {
  return (
    <Flex w="100vw" h="100vh" justifyContent="center" flexDirection="column">
      <Flex flexDirection="column" w="30%">
        <Heading marginBottom="5%" fontSize="32px">
          MANTENHA SUAS PLANTAS SAÚDAVEIS
        </Heading>
        <Text>
          Plantas reduzem o nível de stress e melhoram seu humor - O que as
          tornam perfeitas para sua casa e escritório.
        </Text>
        <Button
          w="190px"
          h="70px"
          borderRadius="10px"
          color="gray.0"
          background="green.1000"
        >
          Cadastrar
        </Button>
      </Flex>
      <Image src={img} />
    </Flex>
  );
}

export default LandingPage;
