import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";

import garden from "../../assets/garden.jpg";
import care from "../../assets/careplants.jpg";
import vase from "../../assets/vaseplant.jpg";
import clean from "../../assets/cleanplant.jpeg";
import inside from "../../assets/insideplant.jpg";
import light from "../../assets/light.png";
import fertilizer from "../../assets/fertilizer.jpg";
import pruning from "../../assets/pruning.png";

export function AccordionComponent() {
  return (
    <>
      <Flex
        id="content--container"
        width={["100%", "100%", "40%"]}
        margin="20px 30px"
        flexDir="column"
        gap="5px"
        display={["flex", "flex", "none"]}
      >
        <Accordion allowToggle>
          <AccordionItem border="none">
            <Box as="h2">
              <AccordionButton
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
                _hover={{ filter: "brightness(0.8)" }}
              >
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Higienize a sua planta
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4}>
              <Image src={clean} mb="5" />
              Lavar as folhas com água é sem dúvidas a melhor alternativa. Se a
              sua planta for bem pequena, você poderá também lavar debaixo de
              uma torneira no tanque ou lavabo, podendo até esfregar o dedo de
              leve pra retirar o excesso de pó. Limpeza com pano. Outra opção é
              utilizar um pano macio úmido, ou pedaços de algodão úmidos.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle>
          <AccordionItem border="none">
            <Box as="h2">
              <AccordionButton
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
                _hover={{ filter: "brightness(0.8)" }}
              >
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Como escolher plantas para interiores
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4}>
              <Image src={inside} mb="5" />
              Enquanto uma parte das plantas precisa de bastante incidência da
              luz solar e têm ciclos bem definidos, o ideal ao escolher sua
              planta para interior é justamente o oposto: as plantas ideais,
              especialmente para apartamentos, são aquelas que gostam de sombra
              ou mesmo que são sensíveis ao excesso de sol.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle>
          <AccordionItem border="none">
            <Box as="h2">
              <AccordionButton
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
                _hover={{ filter: "brightness(0.8)" }}
              >
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Plantas ideais para seu jardim
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4}>
              <Image src={garden} mb="5" />
              Definir o objectivo do seu jardim é normalmente o passo que
              antecede a escolha e aquisição das plantas propriamente dita.{" "}
              <br />
              A imagem mental de um jardim coberto de flores de mil e uma cores
              é algo que lhe agrada? Prefere as plantas ornamentais? Sempre
              sonhou com uma pequena horta, de legumes ou ervas aromáticas?
              <br />A variedade é um ponto forte e até aconselhado, mas se é um
              novato na área da jardinagem, comece com um jardim pequeno para
              poder experimentar e ter sucesso, antes de o expandir!
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle>
          <AccordionItem border="none">
            <Box as="h2">
              <AccordionButton
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
                _hover={{ filter: "brightness(0.8)" }}
              >
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Como usar vasos para decorar
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4}>
              <Image src={vase} mb="5" />
              Um vaso decorativo pode harmonizar com o estilo da decoração ou,
              então, brincar com contraste. No segundo caso, ele se tornará um
              destaque do ambiente e deve ter um design diferenciado.
              <br />
              De modo geral, analisar o estilo de decoração é importante para
              garantir que o acessório converse com a escolha do mobiliário,
              paleta de cores e outros objetos do espaço. “Seguir o mesmo estilo
              do ambiente é uma aposta segura.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle>
          <AccordionItem border="none">
            <Box as="h2">
              <AccordionButton
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
                _hover={{ filter: "brightness(0.8)" }}
              >
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Cuidando das plantas de casa
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4}>
              <Image src={care} mb="5" />
              Escolha a espécie adequada. Não é qualquer tipo de planta que vai
              se ambientar à sua casa.
              <br />
              Regue na hora certa. As plantas tem seu próprio tempo e demonstram
              quando precisam de água, é só ficar atento.
              <br />
              Troque os vasos sempre que necessário.
              <br />
              Higienize suas plantas
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle>
          <AccordionItem border="none">
            <Box as="h2">
              <AccordionButton
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
                _hover={{ filter: "brightness(0.8)" }}
              >
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Adubando plantas em vasos
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4}>
              <Image src={fertilizer} mb="5" />
              Aposte em cascas de alimentos como adubo para horta em vasos. As
              cascas de frutas e outros alimentos (ovos, leguminosas, entre
              outros) são uma boa opção de adubo orgânico caseiro para a sua
              horta em vasos. Ricas em nutrientes, quando misturadas à terra de
              plantio, essas cascas liberam mais energia para as variedades.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle>
          <AccordionItem border="none">
            <Box as="h2">
              <AccordionButton
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
                _hover={{ filter: "brightness(0.8)" }}
              >
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Como realizar a poda
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4}>
              <Image src={pruning} mb="5" />
              Primeiramente, é preciso saber identificar onde corte deve ser
              feito. O local exato para a realização da poda é na bifurcação dos
              galhos, onde se observa um pequeno círculo, chamado de anel.
              <br />
              Quando pensamos no outono, a primeira imagem que vem a nossa
              cabeça é a de folhas secas e amareladas caindo dos galhos das
              árvores. Mas esse é também o período, segundo especialistas, mais
              favorável para podar e adubar as plantas.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle>
          <AccordionItem border="none">
            <Box as="h2">
              <AccordionButton
                borderRadius="50px 0px"
                border="3px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box,linear-gradient(175deg, #FFFFFF 0%, #46FF42 70%,#FFFFFF 75%) border-box"
                fontWeight="bold"
                _hover={{ filter: "brightness(0.8)" }}
              >
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Planejando a iluminação do seu jardim
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4}>
              <Image src={light} mb="5" />
              1. Definir o estilo do projeto.
              <br />
              O primeiro passo é entender qual é o objetivo do jardim. Em alguns
              casos, ele será meramente decorativo e, portanto, o foco deve ser
              em fornecer a iluminação certa para destacar todas as cores das
              plantas e objetos.
              <br />
              2. Escolher as lâmpadas adequadas.
              <br />
              Primeiramente, observe a quantidade de metros quadrados que é
              iluminado por cada modelo, essa informação vem na própria
              embalagem.
              <br />
              3. Utilizar técnicas de iluminação.
              <br />
              As principais são o backlight, no qual uma luz mais fraca é
              posicionada horizontalmente no fundo do jardim para criar efeitos
              de sombra, e o up light, em que refletores projetarão a luz de
              baixo para cima.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </>
  );
}
