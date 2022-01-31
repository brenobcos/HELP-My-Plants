import { Flex, Button, Text, Heading, Image, Center, Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Header from "../../components/header";
import { FaRegUser } from "react-icons/fa";

const img = require("../../assets/Plant Image.png");
const imgFooter = require("../../assets/landingpagesmall.png");

function LandingPage() {
  const history = useHistory();
  return (
    <Flex maxW="100vw" h="100vh" flexDirection="column">
        <Header
          firstLink="aboutus"
          secondLink="curiosity"
          firstText="Conheça nosso time"
          secondText="Como cuidar da sua planta"
          firstIcon={FaRegUser}
          firstLabel="Login"
          iconLink="/signin"
        />
      <Flex
        justifyContent={[
          "space-around",
          "space-around",
          "space-around",
          "space-evenly",
        ]}
        flexDirection={["column", "column", "column", "row"]}
        alignItems="center"
        height={["85%", "100%", "100%", "auto"]}
      >
        <Flex
          mr={["0", "0", "0", "2.5%"]}
          flexDirection="column"
          w={["90%", "90%", "90%", "40%"]}
          h={["50%", "50%", "50%", "80%"]}
          gap="20px"
        >
          <Flex flexDir="column">
            <Heading fontSize={["2xl", "4xl"]} fontWeight="800">
              MANTENHA SUAS PLANTAS SAUDÁVEIS
            </Heading>
            <Text fontSize={["sm", "md"]}>
              Plantas reduzem o nível de stress e melhoram seu humor - O que as
              tornam perfeitas para sua casa e escritório.
            </Text>
          </Flex>
          <Button
            onClick={() => history.push("/signup")}
            w={["179px", "183px"]}
            h={["46px", "52px"]}
            fontSize="1.188rem"
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

          width={["220px", "300px", "350px"]}
          height={["220px", "300px", "350px"]}
          opacity={["0.5", "0.5", "0.5", "1"]}
          src={img}
        />
      </Flex>
      {/* <Center
        borderRadius="15px 0 0 0"
        bg="green.1000"
        w="70%"
        ml="auto"
        color="gray.0"
        display={["none", "none", "none", "inherit"]}
      >
        <Center  borderRadius="15px 0 0 0">
        </Center>
        <Text ml="3%" fontSize="sm">
          “Deus Todo-Poderoso foi quem primeiro plantou um jardim. Na verdade,
          plantar jardins é o mais puro dos prazeres humanos” – Francis Bacon,
          (1625) Sobre Jardins
        </Text>
      </Center> */}
    </Flex>
  );
}

export default LandingPage;
