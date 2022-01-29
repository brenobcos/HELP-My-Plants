import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "../styles/theme";
import { PlantsProvider } from "./plantsProvider";
import { UserPlantsProvider } from "./userPlantsProvider";
import { AuthProvider } from "./auth";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <PlantsProvider>
          <UserPlantsProvider>{children}</UserPlantsProvider>
        </PlantsProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
