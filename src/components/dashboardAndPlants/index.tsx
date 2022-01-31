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
    <Flex flexDirection="column" h="100vh" justify="space-between" w="100vw">
      <Header
        firstLink={firstLink}
        firstText={firstText}
        secondLink="/curiosity"
        secondText="Como cuidar da sua planta"
      />
      <Flex flexDirection="column" h="calc(100vh - 100px)" paddingLeft="5vw">
        <Heading as="h3" fontWeight="regular" fontSize="xl">
          {title}
        </Heading>
        <Flex w="100vw" justifyContent="center">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
