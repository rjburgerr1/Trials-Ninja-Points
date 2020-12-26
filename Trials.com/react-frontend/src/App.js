import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInSignUp from "./pages/signin-signup";
import { AuthProvider } from "./contexts/auth-context";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./components/private-route";
import ResetPassword from "./components/reset-password";
import UpdateProfile from "./components/update-profile";
import SubmitRun from "./components/submit-run.jsx";
import Chat from "./components/Chat/chat.jsx";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/chat" component={Chat} />
          <Route path="/signin" component={SignInSignUp} />
          <Route path="/forgot-password" component={ResetPassword} />
          <Route path="/update-profile" component={UpdateProfile} />
          <Route path="/submit-run" component={SubmitRun} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
