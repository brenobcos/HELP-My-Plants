import { Flex, Button, Text, Heading, Image, Center } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
// import img from "./assets/landingpagelarge.png";
const img = require("../../assets/landingpagelarge.png");
const imgFooter = require("../../assets/landingpagesmall.png");
function LandingPage() {
  const history = useHistory();
  return (
    <Flex maxW="100vw" h="100vh" flexDirection="column">
      <Center w="100%" h="15%" bg="red">
        SUBSTITUA PELO HEADER AQUI :D
      </Center>
      <Flex
        justifyContent="flex-start"
        mt="1%"
        ml={["0", "0", "0", "8%"]}
        flexDirection={["column", "column", "column", "row"]}
        alignItems="center"
      >
        <Flex
          mr={["0", "0", "0", "2.5%"]}
          flexDirection="column"
          w={["90%", "90%", "90%", "40%"]}
        >
          <Heading
            marginBottom="5%"
            fontSize={["2xl", "4xl", "5xl", "6xl"]}
            fontWeight="bold"
          >
            MANTENHA SUAS PLANTAS SAÚDAVEIS
          </Heading>
          <Text fontSize={["sm", "md", "lg", "2xl"]}>
            Plantas reduzem o nível de stress e melhoram seu humor - O que as
            tornam perfeitas para sua casa e escritório.
          </Text>
          <Button
            onClick={() => history.push("/signup")}
            w="190px"
            h="70px"
            fontSize="22px"
            borderRadius="10px"
            color="gray.0"
            background="green.1000"
            backgroundColor="green.800"
            mt="2.5%"
            _hover={{ border: "2px solid", borderColor: "green.500" }}
          >
            Cadastrar
          </Button>
        </Flex>
        <Center
          width={["200px", "300px", "400px", "550px"]}
          height={["200px", "300px", "400px", "550px"]}
          borderRadius="50%"
          bg="green.400"
          position="relative"
          ml={["0", "0", "0", "5%"]}
        >
          <Image
            width={["150px", "220px", "320px", "400px"]}
            height={["150px", "220px", "320px", "400px"]}
            src={img}
          />
        </Center>
      </Flex>
      <Center
        bg="green.1000"
        w="70%"
        h="119px"
        mt="auto"
        ml="auto"
        color="gray.0"
        display={["none", "none", "none", "inherit"]}
      >
        <Center bg="green.100" w="200px" h="100%">
          <Image src={imgFooter} />
        </Center>
        <Text ml="3%">
          “Deus Todo-Poderoso foi quem primeiro plantou um jardim. Na verdade,
          plantar jardins é o mais puro dos prazeres humanos” – Francis Bacon,
          (1625) Sobre Jardins
        </Text>
      </Center>
    </Flex>
  );
}

export default LandingPage;
