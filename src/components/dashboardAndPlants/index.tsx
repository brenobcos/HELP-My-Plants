import Header from "../header";
import { Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DashboardsRenderProps {
  children?: ReactNode;
  title: string;
  firstLink: string;
  firstText: string;
}

export function DashboardsRender({
  children,
  title,
  firstLink,
  firstText,
}: DashboardsRenderProps) {
  return (
    <Flex h="100vh" w="100vw">
      <Header
        firstLink={firstLink}
        firstText={firstText}
        secondLink="/curiosity"
        secondText="Como cuidar da sua planta"
      />
      <Flex flexDirection="column" paddingLeft="5vw">
        <Heading>{title}</Heading>
        <Flex overflow="scroll hidden">{children}</Flex>
      </Flex>
    </Flex>
  );
}
