import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "../styles/theme";
import { PlantsProvider } from "./plantsProvider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ChakraProvider theme={theme}>
      <PlantsProvider>{children}</PlantsProvider>
    </ChakraProvider>
  );
}
