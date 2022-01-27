import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "../styles/theme";
import { PlantsProvider } from "./plantsProvider";
import { AuthProvider } from "./AuthContext";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <PlantsProvider>{children}</PlantsProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
