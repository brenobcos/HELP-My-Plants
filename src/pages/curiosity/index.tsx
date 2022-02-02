import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import garden from "../../assets/garden.jpg";
import care from "../../assets/careplants.jpg";
import vase from "../../assets/vaseplant.jpg";
import clean from "../../assets/cleanplant.jpeg";
import inside from "../../assets/insideplant.jpg";
import light from "../../assets/light.png";
import fertilizer from "../../assets/fertilizer.jpg";
import pruning from "../../assets/pruning.png";

import Header from "../../components/header";
import { AccordionComponent } from "../../components/AccordionComponent";

export function Curiosity() {
  return (
    <div>
      <Header firstLink="/aboutus" firstText="Conheça nossa equipe" />
      <Flex
        sx={{
          justifyContent: "space-evenly",
        }}
      >
        <Flex
          flexDir="column"
          width="55%"
          gap="30px"
          display={["none", "none", "flex"]}
        >
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="clean">
            Como higienizar sua planta
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
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="inside">
            Plantas para interiores: saiba como escolher
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
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="garden">
            Como escolher plantas para o jardim
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
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="vase">
            Dicas de como usar vasos na decoração
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
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="care">
            Dicas de como cuidar das plantas em casa
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
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="fertilizer">
            Como adubar as plantas em vasos
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
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="pruning">
            Como podar plantas: dicas essenciais
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
          <Heading as="h2" fontSize="1.75rem" textAlign="center" id="light">
            Iluminação para jardim: 3 dicas para adicionar luz ao seu projeto.
          </Heading>
          <Image
            src={light}
            width="40%"
            alignSelf="center"
            borderRadius="50px 8px 50px 0px "
          />

          <Text as="p">
            1. Definir o estilo do projeto.
            <br />
            O primeiro passo é entender qual é o objetivo do jardim. Em alguns
            casos, ele será meramente decorativo e, portanto, o foco deve ser em
            fornecer a iluminação certa para destacar todas as cores das plantas
            e objetos.
            <br />
            2. Escolher as lâmpadas adequadas.
            <br />
            Primeiramente, observe a quantidade de metros quadrados que é
            iluminado por cada modelo, essa informação vem na própria embalagem.
            <br />
            3. Utilizar técnicas de iluminação.
            <br />
            As principais são o backlight, no qual uma luz mais fraca é
            posicionada horizontalmente no fundo do jardim para criar efeitos de
            sombra, e o up light, em que refletores projetarão a luz de baixo
            para cima.
          </Text>
        </Flex>
        <Box
          position="relative"
          w={["90%", "90%", "40%"]}
          display={["none", "none", "flex"]}
        >
          <Flex
            id="content--container"
            width={["100%", "100%", "40%"]}
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
                borderRadius="50px 8px 50px 0px "
                border="2px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box, linear-gradient(5deg, rgba(191,223,215,0) 30%, rgba(24,74,44,1) 50%, rgba(191,223,215,0) 70%) border-box;"
              >
                Como higienizar sua planta
              </Box>
            </Box>
            <Box>
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#inside")}
                borderRadius="50px 8px 50px 0px "
                border="2px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box, linear-gradient(5deg, rgba(191,223,215,0) 30%, rgba(24,74,44,1) 50%, rgba(191,223,215,0) 70%) border-box;"
              >
                Plantas para interiores: saiba como escolher
              </Box>
            </Box>
            <Box>
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#garden")}
                borderRadius="50px 8px 50px 0px "
                border="2px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box, linear-gradient(5deg, rgba(191,223,215,0) 30%, rgba(24,74,44,1) 50%, rgba(191,223,215,0) 70%) border-box;"
              >
                Como escolher plantas para o jardim
              </Box>
            </Box>
            <Box>
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#vase")}
                borderRadius="50px 8px 50px 0px "
                border="2px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box, linear-gradient(5deg, rgba(191,223,215,0) 30%, rgba(24,74,44,1) 50%, rgba(191,223,215,0) 70%) border-box;"
              >
                Dicas de como usar vasos na decoração
              </Box>
            </Box>
            <Box>
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#care")}
                borderRadius="50px 8px 50px 0px "
                border="2px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box, linear-gradient(5deg, rgba(191,223,215,0) 30%, rgba(24,74,44,1) 50%, rgba(191,223,215,0) 70%) border-box;"
              >
                Dicas de como cuidar das plantas em casa
              </Box>
            </Box>
            <Box>
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#fertilizer")}
                borderRadius="50px 8px 50px 0px "
                border="2px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box, linear-gradient(5deg, rgba(191,223,215,0) 30%, rgba(24,74,44,1) 50%, rgba(191,223,215,0) 70%) border-box;"
              >
                Como adubar as plantas em vasos
              </Box>
            </Box>
            <Box>
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#pruning")}
                borderRadius="50px 8px 50px 0px "
                border="2px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box, linear-gradient(5deg, rgba(191,223,215,0) 30%, rgba(24,74,44,1) 50%, rgba(191,223,215,0) 70%) border-box;"
              >
                Como podar plantas: dicas essenciais
              </Box>
            </Box>
            <Box mb="4">
              <Box
                padding="2"
                cursor="pointer"
                onClick={() => (window.location.href = "#light")}
                borderRadius="50px 8px 50px 0px "
                border="2px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box, linear-gradient(5deg, rgba(191,223,215,0) 30%, rgba(24,74,44,1) 50%, rgba(191,223,215,0) 70%) border-box;"
              >
                Dicas para planejar a iluminação do jardim
              </Box>
            </Box>
          </Flex>
        </Box>
        <AccordionComponent />
      </Flex>
    </div>
  );
}
