import { Flex, Button, Text, Heading, Image, Center } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const img = require("../../assets/Plant Image.png");
const imgFooter = require("../../assets/landingpagesmall.png");

function LandingPage() {
  const history = useHistory();
  return (
    <Flex maxW="100vw" h="100vh" flexDirection="column">
      <Center w="100%" h="15%" bg="red">
        SUBSTITUA PELO HEADER AQUI :D
      </Center>
      <Flex
        justifyContent={[
          "space-around",
          "space-around",
          "space-around",
          "space-evenly",
        ]}
        mr={["0", "0", "0", "8%"]}
        flexDirection={["column", "column", "column", "row"]}
        alignItems="center"
        height={["85%", "100%", "100%", "auto"]}
      >
        <Flex
          mr={["0", "0", "0", "2.5%"]}
          flexDirection="column"
          w={["90%", "90%", "90%", "40%"]}
          h={["50%", "50%", "50%", "80%"]}
          justifyContent="space-evenly"
        >
          <Heading fontSize={["2xl", "4xl", "5xl", "6xl"]} fontWeight="800">
            MANTENHA SUAS PLANTAS SAÚDAVEIS
          </Heading>
          <Text fontSize={["sm", "md", "lg", "2xl"]}>
            Plantas reduzem o nível de stress e melhoram seu humor - O que as
            tornam perfeitas para sua casa e escritório.
          </Text>
          <Button
            onClick={() => history.push("/signup")}
            w={["179px", "183px", "185px", "190px"]}
            h={["46px", "52px", "62px", "70px"]}
            fontSize="22px"
            borderRadius="10px"
            color="gray.0"
            background="green.1000"
            backgroundColor="green.800"
            _hover={{ border: "2px solid", borderColor: "green.500" }}
          >
            Cadastre-se
          </Button>
        </Flex>

        <Image
          width={["220px", "300px", "300px", "500px"]}
          height={["220px", "300px", "300px", "500px"]}
          opacity={["0.5", "0.5", "0.5", "1"]}
          src={img}
        />
      </Flex>
      <Center
        borderRadius="15px 0 0 0"
        bg="green.1000"
        w="70%"
        h="119px"
        mt="auto"
        ml="auto"
        color="gray.0"
        display={["none", "none", "none", "inherit"]}
      >
        <Center bg="green.100" w="200px" h="100%" borderRadius="15px 0 0 0">
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
