import { Flex, Image, Text, theme } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import {
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiChakraui,
} from "react-icons/si";
import { CardAboutus } from "../../components/CardAboutus";
import caique from "../../assets/avatarcaique.png";
import bruno from "../../assets/avatarbruno.jpg";
import breno from "../../assets/avatarbreno.png";
import luiza from "../../assets/avatarluiza.png";
import johnny from "../../assets/avatarjohnny.png";
import loginpage from "../../assets/loginpage.png";

export function AboutUs() {
  return (
    <Flex
      width={["auto", "auto", "100vw"]}
      height={["auto", "auto", "100vh"]}
      flexDir="column"
    >
      <Header firstLink="curiosity" firstText="Como cuidar da sua planta" />
      <Flex
        as="section"
        display={["none", "none", "flex"]}
        alignItems="center"
        justifyContent="space-around"
      >
        <Text
          as="h3"
          color="green.800"
          fontSize="36px"
          fontWeight="500"
          textAlign="center"
        >
          Devs
        </Text>
        <Text
          as="h3"
          color="green.800"
          alignSelf="center"
          fontSize="36px"
          fontWeight="500"
        >
          Sobre o App
        </Text>
      </Flex>
      <Flex
        as="main"
        flexDir={["column-reverse", "column-reverse", "row"]}
        justifyContent={["center", "center", "space-evenly"]}
        alignItems={["center", "center"]}
      >
        <Flex
          flexDir="column"
          w={["90%", "90%", "40%"]}
          justifyContent="space-evenly"
          position="relative"
        >
          <Text
            display={["block", "block", "none"]}
            margin="20px 0"
            color="green.800"
            fontSize="36px"
            fontWeight="500"
            textAlign="center"
          >
            Devs
          </Text>
          <Image
            objectFit="cover"
            box-shadow="inset 20px 14px 124px rgba(0, 0, 0, 0.18)"
            position="absolute"
            left={["40%", "50%"]}
            top="50%"
            sx={{ transform: "translate(-35%, -40%)" }}
            translateY="-50%"
            zIndex="-1"
            src={loginpage}
            opacity="60%"
            borderRadius="50%"
            width="375px"
          ></Image>
          <CardAboutus
            image={breno}
            name="Breno Carlos"
            linkedin="https://www.linkedin.com/in/devbrenocar/"
            github="https://github.com/brenobcos"
            office="Tech Leader"
          />
          <CardAboutus
            image={bruno}
            name="Bruno Tetzner"
            linkedin="https://www.linkedin.com/in/bruno-tetzner-a93091175/ "
            github="https://github.com/brunotetzner"
            office="Quality Assurance"
          />
          <CardAboutus
            image={caique}
            name="Caique Cavalheiro"
            linkedin="https://www.linkedin.com/in/caiquefcavalheiro/"
            github="https://github.com/Caique-Cavalheiro"
            office="Scrum Master"
          />
          <CardAboutus
            image={johnny}
            name="Johnny Gregório"
            linkedin="https://www.linkedin.com/in/johnny-gregorio-237737218/"
            github="https://github.com/johkker"
            office="Quality Assurance"
          />
          <CardAboutus
            image={luiza}
            name="Luiza Schmidt"
            linkedin="https://www.linkedin.com/in/luiza-schmidt-7946a51b2/"
            github="https://github.com/lsmescolotto"
            office="Product Owner"
          />
        </Flex>
        <Flex
          as="section"
          flexDir="column"
          w={["320px", "400px"]}
          padding={["0 10px", "0"]}
          h="100%"
        >
          <Text
            display={["block", "block", "none"]}
            margin="20px 0"
            color="green.800"
            fontSize="36px"
            fontWeight="500"
            textAlign="center"
          >
            Sobre o App
          </Text>
          <Flex
            flexDir="column"
            borderRadius="50px 0 50px 0"
            border="2px solid"
            bgColor="#184A2C"
            opacity="70%"
          >
            <Flex justifyContent="space-around" padding="30px 0">
              <SiTypescript
                style={{ borderRadius: "10", width: "42px", height: "42px" }}
                color={theme.colors.green[100]}
              />
              <SiReact
                color={theme.colors.green[100]}
                style={{ width: "42px", height: "42px" }}
              />
              <SiHtml5
                color={theme.colors.green[100]}
                style={{ width: "42px", height: "42px" }}
              />
              <SiCss3
                color={theme.colors.green[100]}
                style={{ width: "42px", height: "42px" }}
              />
              <SiChakraui
                color={theme.colors.green[100]}
                style={{ width: "42px", height: "42px" }}
              />
            </Flex>
            <Flex padding="0 22px 0 30px" gap="5" flexDir="column">
              <Text color="gray.0">
                Projeto de conclusão de curso realizado pelos desenvolvedores
                citados, de tema livre.
              </Text>
              <Text color="gray.0">
                A ideia foi desenvolver um protótipo funcional de um WebApp,
                focado em ajudar as pessoas a ter um maior controle sobre a
                qualidade de suas plantas ornamentais.
              </Text>
              <Text color="gray.0" paddingBottom="20px">
                Há a possibilidade de escalabilidade da aplicação para incluir
                um market place, leitor de QR Code para identificação e
                recomendação de plantas por diversos filtros.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
