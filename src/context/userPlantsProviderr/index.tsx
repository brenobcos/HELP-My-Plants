import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../services/index";
interface UserPlantsProviderProps {
  children: ReactNode;
}
const userPlantsContext = createContext({});

export function useUserPlants() {
  const context = useContext(userPlantsContext);
  return context;
}
function UserPlantsProvider({ children }: UserPlantsProviderProps) {
  const [userPlants, setUserPlants] = useState();

  function getUserPlants(userId: number, token: string) {}

  return (
    <userPlantsContext.Provider value={{}}>
      {children}
    </userPlantsContext.Provider>
  );
}

export default UserPlantsProvider;
