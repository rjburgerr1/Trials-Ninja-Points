import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInSignUp from "./pages/signin_signup";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
