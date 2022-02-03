import { Switch } from "react-router-dom";
import { Route } from "./Routes";
import { LandingPage } from "../pages/LandingPage";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { Plants } from "../pages/Plants";
import { Curiosity } from "../pages/Curiosity";
import { AboutUs } from "../pages/AboutUs";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/plants" component={Plants} isPrivate />
      <Route exact path="/curiosity" component={Curiosity} isPublic />
      <Route exact path="/aboutus" component={AboutUs} isPublic />
    </Switch>
  );
}