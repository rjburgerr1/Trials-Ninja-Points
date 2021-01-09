import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInSignUp from "./pages/signin-signup";
import { AuthProvider } from "./contexts/auth-context";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./components/private-route";
import ResetPassword from "./components/reset-password";
import UpdateProfile from "./components/update-profile";
import SubmitRun from "./components/submit-run";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />

          <Route path="/signin" component={SignInSignUp} />
          <Route path="/forgot-password" component={ResetPassword} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute path="/submit-run" component={SubmitRun} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
