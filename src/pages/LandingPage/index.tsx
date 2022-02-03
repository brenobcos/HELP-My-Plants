import { Flex, Button, Text, Heading, Image, Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
import { FaUser } from "react-icons/fa";
import imgFooter from "../../assets/imagem-footer.png";

const img = require("../../assets/Plant Image.png");

export function LandingPage() {
  const history = useHistory();
  return (
    <Flex maxW="100vw" h="100vh" flexDirection="column">
      <Header
        firstLink="aboutus"
        secondLink="curiosity"
        firstText="Conheça nosso time"
        secondText="Como cuidar da sua planta"
        firstIcon={FaUser}
        firstLabel="Login"
        iconLink="/signin"
      />
      <Flex
        as="main"
        justifyContent={[
          "space-around",
          "space-around",
          "space-around",
          "space-evenly",
        ]}
        flexDirection={["column", "column", "column", "row"]}
        alignItems="center"
        height={["85%", "100%", "auto"]}
      >
        <Flex
          as="section"
          mr={["0", "0", "0", "2.5%"]}
          flexDirection="column"
          w={["90%", "90%", "90%", "40%"]}
          justifyContent="space-around"
          gap="20px"
        >
          <Flex flexDir="column" justifyContent="space-between" h="50%">
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
            marginTop="10px"
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
      <Flex
        as="footer"
        borderRadius="30px 0 0 0"
        bg="green.1000"
        w="60%"
        mt="auto"
        ml="auto"
        color="gray.0"
        border="none"
        display={["none", "none", "none", "inherit"]}
        justifyContent="flex-start"
      >
        <Box backgroundColor="green.200" borderRadius="30px 0 0 0">
          <Image
            backgroundColor="green.200"
            width="150px"
            src={imgFooter}
            borderRadius="30px 0 0 0"
          />
        </Box>
        <Flex alignItems="center" ml="3%" fontSize="xs" justifyContent="center">
          “Deus Todo-Poderoso foi quem primeiro plantou um jardim. Na verdade,
          plantar jardins é o mais puro dos prazeres humanos” – Francis Bacon,
          (1625) Sobre Jardins
        </Flex>
      </Flex>
    </Flex>
  );
}
