import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";

import garden from "../../assets/garden.jpg";
import care from "../../assets/careplants.jpg";
import vase from "../../assets/vaseplant.jpg";
import clean from "../../assets/cleanplant.jpeg";
import inside from "../../assets/insideplant.jpg";
import light from "../../assets/light.png";
import fertilizer from "../../assets/fertilizer.jpg";
import pruning from "../../assets/pruning.png";

import { Header } from "../../components/Header";
import { AccordionComponent } from "../../components/AccordionComponent";

export function Curiosity() {
  return (
    <Box height="100%">
      <Header firstLink="/aboutus" firstText="Conheça nossa equipe" />
      <Flex
        sx={{
          justifyContent: "space-evenly",
        }}
      >
        <Flex
          flexDir="column"
          width="100%"
          margin="0 40px"
          gap="30px"
          display={["none", "none", "flex"]}
        >
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="clean">
            Higienize a sua planta
          </Heading>
          <Image
            src={clean}
            width="40%"
            alignSelf="center"
            borderRadius="50px 8px 50px 0px "
          />
          <Text as="p">
            Lavar as folhas com água é sem dúvidas a melhor alternativa. Se a
            sua planta for bem pequena, você poderá também lavar debaixo de uma
            torneira no tanque ou lavabo, podendo até esfregar o dedo de leve
            pra retirar o excesso de pó. Limpeza com pano. Outra opção é
            utilizar um pano macio úmido, ou pedaços de algodão úmidos.
          </Text>
          <Divider h="1px" opacity="1" backgroundColor="green.1000" />
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="inside">
            Como escolher plantas para interiores
          </Heading>
          <Image
            src={inside}
            width="40%"
            alignSelf="center"
            borderRadius="50px 8px 50px 0px "
          />

          <Text as="p">
            Enquanto uma parte das plantas precisa de bastante incidência da luz
            solar e têm ciclos bem definidos, o ideal ao escolher sua planta
            para interior é justamente o oposto: as plantas ideais,
            especialmente para apartamentos, são aquelas que gostam de sombra ou
            mesmo que são sensíveis ao excesso de sol.
          </Text>
          <Divider h="1px" opacity="1" backgroundColor="green.1000" />
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="garden">
            Plantas ideais para seu jardim
          </Heading>
          <Image
            src={garden}
            width="40%"
            alignSelf="center"
            borderRadius="50px 8px 50px 0px "
          />

          <Text as="p">
            Definir o objectivo do seu jardim é normalmente o passo que antecede
            a escolha e aquisição das plantas propriamente dita. <br />
            A imagem mental de um jardim coberto de flores de mil e uma cores é
            algo que lhe agrada? Prefere as plantas ornamentais? Sempre sonhou
            com uma pequena horta, de legumes ou ervas aromáticas?
            <br />A variedade é um ponto forte e até aconselhado, mas se é um
            novato na área da jardinagem, comece com um jardim pequeno para
            poder experimentar e ter sucesso, antes de o expandir!
          </Text>
          <Divider h="1px" opacity="1" backgroundColor="green.1000" />
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="vase">
            Como usar vasos para decorar
          </Heading>
          <Image
            src={vase}
            width="40%"
            alignSelf="center"
            borderRadius="50px 8px 50px 0px "
          />

          <Text as="p">
            Um vaso decorativo pode harmonizar com o estilo da decoração ou,
            então, brincar com contraste. No segundo caso, ele se tornará um
            destaque do ambiente e deve ter um design diferenciado.
            <br />
            De modo geral, analisar o estilo de decoração é importante para
            garantir que o acessório converse com a escolha do mobiliário,
            paleta de cores e outros objetos do espaço. “Seguir o mesmo estilo
            do ambiente é uma aposta segura.
          </Text>
          <Divider h="1px" opacity="1" backgroundColor="green.1000" />
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="care">
            Cuidando das plantas de casa
          </Heading>
          <Image
            src={care}
            width="40%"
            alignSelf="center"
            borderRadius="50px 8px 50px 0px "
          />

          <Text as="p">
            Escolha a espécie adequada. Não é qualquer tipo de planta que vai se
            ambientar à sua casa. Regue na hora certa.
            <br />
            As plantas tem seu próprio tempo e demonstram quando precisam de
            água, é só ficar atento. Troque os vasos sempre que necessário,
            higienize suas plantas.
          </Text>
          <Divider h="1px" opacity="1" backgroundColor="green.1000" />
          <Heading
            as="h2"
            fontSize="1.75rem"
            textAlign="center"
            id="fertilizer"
          >
            Adubando plantas em vasos
          </Heading>
          <Image
            src={fertilizer}
            width="40%"
            alignSelf="center"
            borderRadius="50px 8px 50px 0px "
          />

          <Text as="p">
            Aposte em cascas de alimentos como adubo para horta em vasos. As
            cascas de frutas e outros alimentos (ovos, leguminosas, entre
            outros) são uma boa opção de adubo orgânico caseiro para a sua horta
            em vasos. Ricas em nutrientes, quando misturadas à terra de plantio,
            essas cascas liberam mais energia para as variedades.
          </Text>
          <Divider h="1px" opacity="1" backgroundColor="green.1000" />
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="pruning">
            Como realizar a poda
          </Heading>
          <Image
            src={pruning}
            width="40%"
            alignSelf="center"
            borderRadius="50px 8px 50px 0px "
          />

          <Text as="p">
            Primeiramente, é preciso saber identificar onde corte deve ser
            feito. O local exato para a realização da poda é na bifurcação dos
            galhos, onde se observa um pequeno círculo, chamado de anel.
            <br />
            Quando pensamos no outono, a primeira imagem que vem a nossa cabeça
            é a de folhas secas e amareladas caindo dos galhos das árvores. Mas
            esse é também o período, segundo especialistas, mais favorável para
            podar e adubar as plantas.
          </Text>
          <Divider h="1px" opacity="1" backgroundColor="green.1000" />
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="light">
            Planejando a iluminação do seu jardim
          </Heading>
          <Image
            src={light}
            width="40%"
            alignSelf="center"
            borderRadius="50px 8px 50px 0px "
          />

          <Box marginBottom="20px">
            <Text as="div" textAlign="justify">
              <Text fontWeight="bold">1. Definir o estilo do projeto.</Text>
              O primeiro passo é entender qual é o objetivo do jardim. Em alguns
              casos, ele será meramente decorativo e, portanto, o foco deve ser
              em fornecer a iluminação certa para destacar todas as cores das
              plantas e objetos.
              <br />
              <br />
              <Text fontWeight="bold">2. Escolher as lâmpadas adequadas.</Text>
              Primeiramente, observe a quantidade de metros quadrados que é
              iluminado por cada modelo, essa informação vem na própria
              embalagem.
              <br />
              <br />
              <Text fontWeight="bold">3. Utilizar técnicas de iluminação.</Text>
              As principais são o backlight, no qual uma luz mais fraca é
              posicionada horizontalmente no fundo do jardim para criar efeitos
              de sombra, e o up light, em que refletores projetarão a luz de
              baixo para cima.
            </Text>
          </Box>
        </Flex>
        <Box
          position="relative"
          width="100%"
          display={["none", "none", "flex"]}
          justifyContent="center"
        >
          <Flex
            id="content--container"
            height="315px"
            flexDir="column"
            gap="5px"
            position="fixed"
          >
            <Box>
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#clean")}
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
              >
                <Text margin="0 10px">Higienize a sua planta</Text>
              </Box>
            </Box>
            <Box>
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#inside")}
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
              >
                <Text margin="0 10px">
                  Como escolher plantas para interiores
                </Text>
              </Box>
            </Box>
            <Box>
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#garden")}
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
              >
                <Text margin="0 10px">Plantas ideais para seu jardim</Text>
              </Box>
            </Box>
            <Box>
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#vase")}
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
              >
                <Text margin="0 10px">Como usar vasos para decorar</Text>
              </Box>
            </Box>
            <Box>
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#care")}
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
              >
                <Text margin="0 10px">Cuidando das plantas de casa</Text>
              </Box>
            </Box>
            <Box>
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#fertilizer")}
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
              >
                <Text margin="0 10px">Adubando plantas em vasos</Text>
              </Box>
            </Box>
            <Box>
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#pruning")}
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
              >
                <Text margin="0 10px">Como realizar a poda</Text>
              </Box>
            </Box>
            <Box mb="4">
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#light")}
                borderRadius="50px 0px"
                fontWeight="bold"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
              >
                <Text margin="0 10px">
                  Planejando a iluminição do seu jardim
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
        <AccordionComponent />
      </Flex>
    </Box>
  );
}
