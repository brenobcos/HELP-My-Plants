import { DashboardsRender } from "../../components/dashboardAndPlants";

function Dashboard() {
  return (
    <DashboardsRender
      title="Meu Jardim"
      firstLink="/plants"
      firstText="Encontrar uma nova planta"
    ></DashboardsRender>
  );
}

export default Dashboard;
