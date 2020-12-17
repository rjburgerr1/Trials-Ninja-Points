import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInSignUp from "./pages/signin-signup";
import { AuthProvider } from "./contexts/auth-context";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./components/private-route";
import ResetPassword from "./components/reset-password";
import UpdateProfile from "./components/update-profile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/signin" component={SignInSignUp} />
          <Route path="/forgot-password" component={ResetPassword} />
          <Route path="/update-profile" component={UpdateProfile} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
