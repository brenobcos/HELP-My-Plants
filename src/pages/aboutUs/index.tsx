import { Flex, Text, theme } from "@chakra-ui/react";
import Header from "../../components/header";
import {
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiChakraui,
} from "react-icons/si";
import { CardAboutus } from "../../components/CardAboutus";

function AboutUs() {
  return (
    <>
      <Header firstLink="curiosity" firstText="Como cuidar da sua planta" />
      <Flex flexDir={["column-reverse", "column"]}>
        <CardAboutus />
        <Flex flexDir="column" w={["auto", "400px"]} padding={["0 10px", "0"]}>
          <Text
            color="green.800"
            alignSelf="center"
            fontSize="36px"
            fontWeight="500"
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
                A idéia foi desenvolver um protótipo funcional de um WebApp,
                focado em ajudar as pessoas a tererm um maior controle sobre a
                qualidade de suas plantas ornamentais.
              </Text>
              <Text color="gray.0" paddingBottom="20px">
                Há a possibilidade de escalabilidade da aplicação para incluir
                um market place, leitor de QR Code para identificação,
                recomendação de plantas por variáveis filtros, dentre outros.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default AboutUs;
