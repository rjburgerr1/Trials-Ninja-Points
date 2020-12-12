import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInSignUp from "./pages/signin_signup";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./components/privateRoute.component";
import ResetPassword from "./components/resetPassword.component";
import UpdateProfile from "./components/updateProfile.component";

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
