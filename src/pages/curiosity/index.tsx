import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import Header from "../../components/header";

function Curiosity() {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Header firstLink="/aboutus" firstText="Conheça nossa equipe" />
      <Flex id="content--container" sx={{ width: "100vw", height: "100%" }}>
        <Accordion>
          <AccordionItem border="none">
            <Box as="h2">
              <AccordionButton
                borderRadius="50px 8px 50px 0px "
                border="2px solid transparent"
                bg="linear-gradient(#EAFBF2, #EAFBF2) padding-box, linear-gradient(35deg, rgba(191,223,215,0) 30%, rgba(24,74,44,1) 50%, rgba(191,223,215,0) 70%) border-box;"
              >
                <Box flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
}

export default Curiosity;
