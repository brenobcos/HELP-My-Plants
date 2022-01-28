import { Switch } from "react-router-dom";
import Route from "./routes";
import LandingPage from "../pages/landingPage";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import Dashboard from "../pages/dashboard";
import Plants from "../pages/plants";
import Curiosity from "../pages/curiosity";
import AboutUs from "../pages/aboutUs";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/plants" component={Plants} isPrivate />
      <Route exact path="/curiosity" component={Curiosity} />
      <Route exact path="/aboutus" component={AboutUs} />
    </Switch>
  );
}

export default Routes;
