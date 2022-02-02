import Header from "../header";
import { Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DashboardsRenderProps {
  children?: ReactNode;
  title: string;
  firstLink: string;
  firstText: string;
  topTitle?: boolean;
}

export function DashboardsRender({
  children,
  title,
  firstLink,
  firstText,
  topTitle = false,
}: DashboardsRenderProps) {
  return (
    <Flex flexDirection="column" h={["auto"]} justify="space-between" w="100vw">
      <Header
        firstLink={firstLink}
        firstText={firstText}
        secondLink="/curiosity"
        secondText="Como cuidar da sua planta"
      />
      <Flex
        flexDirection="column"
        // h={["auto", "auto", "calc(100vh - 100px)", "calc(100vh - 100px)"]}
        // minH="calc(100vh - 100px)"
      >
        {topTitle ? (
          <Heading
            as="h3"
            top={["22vh", "13vh", "13vh", "12vh"]}
            fontSize="3xl"
            fontWeight="regular"
            right={["25vw", "10vw", "35vw", "37vw"]}
            position="fixed"
          >
            {title}
          </Heading>
        ) : (
          <Heading
            as="h3"
            fontWeight="regular"
            fontSize="xl"
            mb={["15px", "9px"]}
            ml={["5vw", "0"]}
            mr={["5vw", "0"]}
          >
            {title}
          </Heading>
        )}

        <Flex justifyContent="center" w="100%">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
