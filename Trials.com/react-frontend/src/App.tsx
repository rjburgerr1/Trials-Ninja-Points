import React, { useEffect, useState } from "react";
import { AuthProvider } from "./contexts/auth-context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SocketProvider, socket } from "./contexts/socket-context";

import {
    NinjaLevelHelp,
    LengthHelp,
    ConsistencyHelp,
} from "./components/help-info/run-submission-help";

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
import ForgotPassword from "./pages/forgot-password";
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
                            path="/signin"
                            element={<SignInSignUp container={null} />}
                        />

                        <Route
                            path="/forgot-password"
                            element={<ForgotPassword />}
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
                            path="/"
                            element={
                                <PrivateRoute>
                                    <LeaderboardPage
                                        columns={MainLeaderboardColumns}
                                        effect={mainLBEffect}
                                        sortBy="top_100_runs"
                                        setTableBodyCell={setMainTableBodyCell}
                                        setTableHeaderInfoTip={
                                            setMainTableHeaderInfoTip
                                        }
                                    />
                                </PrivateRoute>
                            }
                        />
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
                        {/* This is an example of nested routes in react router v6.0. 
                                You provide an index (default element) if no child routes are matched
                         */}
                        <Route path="/submit-run">
                            <Route
                                index={true}
                                element={
                                    <PrivateRoute>
                                        <SubmitRun />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="ninja-level-help"
                                element={
                                    <PrivateRoute>
                                        <SubmitRun help={<NinjaLevelHelp />} />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="length-help"
                                element={
                                    <PrivateRoute>
                                        <SubmitRun help={<LengthHelp />} />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="consistency-help"
                                element={
                                    <PrivateRoute>
                                        <SubmitRun help={<ConsistencyHelp />} />
                                    </PrivateRoute>
                                }
                            />
                        </Route>
                    </Routes>
                </SocketProvider.Provider>
            </AuthProvider>
        </Router>
    );
}

export default App;
