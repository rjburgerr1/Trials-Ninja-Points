import React, { useEffect, useState } from "react";
import { AuthProvider } from "./contexts/auth-context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SocketProvider, socket } from "./contexts/socket-context";

import {
    TracksLeaderboardColumns,
    setTracksTableBodyCell,
    setTracksTableHeaderInfoTip,
    tracksLBEffect,
} from "./components/leaderboard/tracks-leaderboard-columns";
import {
    setRunsTableBodyCell,
    setRunsTableHeaderInfoTip,
    runsLBEffect,
    RunsLeaderboardColumns,
} from "./components/leaderboard/runs-leaderboard-columns";
import {
    MainLeaderboardColumns,
    setMainTableBodyCell,
    setMainTableHeaderInfoTip,
    mainLBEffect,
} from "./components/leaderboard/main-leaderboard-columns";
import Loading from "./components/helpers/loading";
import ResetPassword from "./components/auth/reset-password";
import PrivateRoute from "./components/helpers/private-route";
import Profile from "./pages/profile";
import Creators from "./pages/creators";
import SignInSignUp from "./pages/signin-signup";
import SubmitRun from "./pages/submit-run";
import SubmittedRun from "./pages/submitted-run";
import LeaderboardPage from "./pages/leaderboard-page";
import UpdateProfile from "./pages/update-profile";
import "./sass-base/main.scss";
import Track from "./pages/track";

function App(props: any) {
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
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <LeaderboardPage
                                        columns={MainLeaderboardColumns}
                                        effect={mainLBEffect}
                                        sortBy="total_ninja_points"
                                        setTableBodyCell={setMainTableBodyCell}
                                        setTableHeaderInfoTip={
                                            setMainTableHeaderInfoTip
                                        }
                                    />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/tracks"
                            element={
                                <LeaderboardPage
                                    columns={TracksLeaderboardColumns}
                                    effect={tracksLBEffect}
                                    sortBy="average_np"
                                    setTableBodyCell={setTracksTableBodyCell}
                                    setTableHeaderInfoTip={
                                        setTracksTableHeaderInfoTip
                                    }
                                />
                            }
                        />
                        <Route
                            path="/signin"
                            element={<SignInSignUp container={null} />}
                        />

                        <Route
                            path="/forgot-password"
                            element={<ResetPassword />}
                        />
                        <Route
                            path="/runs"
                            element={
                                <LeaderboardPage
                                    columns={RunsLeaderboardColumns}
                                    effect={runsLBEffect}
                                    sortBy="ninja_points"
                                    setTableBodyCell={setRunsTableBodyCell}
                                    setTableHeaderInfoTip={
                                        setRunsTableHeaderInfoTip
                                    }
                                />
                            }
                        />

                        <Route path="/creators" element={<Creators />} />

                        <Route
                            path="/track/track=:name&creatorName=:creator"
                            element={
                                <PrivateRoute>
                                    <Track />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/update-profile"
                            element={
                                <PrivateRoute>
                                    <UpdateProfile />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/submit-run"
                            element={
                                <PrivateRoute>
                                    <SubmitRun />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/submitted-run"
                            element={
                                <PrivateRoute>
                                    <SubmittedRun />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/profile/:user"
                            element={
                                <PrivateRoute>
                                    <Profile />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <PrivateRoute>
                                    <Profile />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </SocketProvider.Provider>
            </AuthProvider>
        </Router>
    );
}

export default App;
