import React, { useEffect, useState } from "react";
import { AuthProvider } from "./contexts/auth-context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SocketProvider, socket } from "./contexts/socket-context";
import Dashboard from "./pages/dashboard";
import Loading from "./components/loading";
import ResetPassword from "./components/Authentication/reset-password";
import Runs from "./pages/runs";
import PrivateRoute from "./components/private-route";
import Profile from "./pages/profile";
import SignInSignUp from "./pages/signin-signup";
import SubmitRun from "./pages/submit-run";
import SubmittedRun from "./pages/submitted-run";
import Tracks from "./pages/tracks";
import UpdateProfile from "./components/update-profile";
import "./sass-base/main.scss";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []); // here

    return !isLoaded ? (
        <Loading type="spokes" color="green" />
    ) : (
        <Router>
            <AuthProvider>
                <SocketProvider.Provider value={socket}>
                    <Switch>
                        <PrivateRoute exact path="/" component={Dashboard} />
                        <Route path="/signin" component={SignInSignUp} />
                        <Route
                            path="/forgot-password"
                            component={ResetPassword}
                        />
                        <Route path="/runs" component={Runs} />
                        <Route path="/tracks" component={Tracks} />
                        <PrivateRoute
                            path="/update-profile"
                            component={UpdateProfile}
                        />
                        <PrivateRoute
                            path="/submit-run"
                            component={SubmitRun}
                        />
                        <PrivateRoute
                            path="/submitted-run"
                            component={SubmittedRun}
                        />
                        <PrivateRoute
                            path="/profile/:user?"
                            component={Profile}
                        />
                    </Switch>
                </SocketProvider.Provider>
            </AuthProvider>
        </Router>
    );
}

export default App;
