import { Switch } from 'react-router-dom';
import { Route } from './Routes';
import { LandingPage } from '../pages/LandingPage';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';
import { Plants } from '../pages/Plants';
import { Curiosity } from '../pages/Curiosity';
import { AboutUs } from '../pages/AboutUs';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/dashboard" isPrivate>
        <Dashboard />
      </Route>
      <Route exact path="/plants" isPrivate>
        <Plants />
      </Route>
      <Route exact path="/curiosity" isPublic>
        <Curiosity />
      </Route>
      <Route exact path="/aboutus" isPublic>
        <AboutUs />
      </Route>
    </Switch>
  );
}
