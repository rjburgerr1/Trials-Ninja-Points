import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInSignUp from "./pages/signin_signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/rjburgerr1.github.io" exact component={SignInSignUp} />
      </Switch>
    </Router>
  );
}

export default App;
