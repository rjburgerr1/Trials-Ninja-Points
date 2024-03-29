import React, { useEffect, useState } from "react";
import "./sass-base/main.scss";
import { AuthProvider } from "./contexts/auth-context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    CreatorsLeaderboardColumns,
    setCreatorsTableBodyCell,
    setCreatorsTableHeaderInfoTip,
    creatorsLBEffect,
} from "./components/leaderboard/creators-leaderboard-columns";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Leaderboard } from "./components/leaderboard/leaderboard";
import {
    MainLeaderboardColumns,
    setMainTableBodyCell,
    setMainTableHeaderInfoTip,
    mainLBEffect,
} from "./components/leaderboard/main-leaderboard-columns";
import {
    NinjaLevelHelp,
    LengthHelp,
    ConsistencyHelp,
    ScanLBHelp,
} from "./components/help-info/run-submission-help";
import { Profile } from "./components/profile/profile";
import { SocketProvider, socket } from "./contexts/socket-context";
import {
    setRunsTableBodyCell,
    setRunsTableHeaderInfoTip,
    runsLBEffect,
    RunsLeaderboardColumns,
} from "./components/leaderboard/runs-leaderboard-columns";
import {
    TracksLeaderboardColumns,
    setTracksTableBodyCell,
    setTracksTableHeaderInfoTip,
    tracksLBEffect,
} from "./components/leaderboard/tracks-leaderboard-columns";
import ForgotPassword from "./pages/forgot-password";
import GenericPage from "./pages/generic-page";
import Loading from "./components/helpers/loading";
import PrivateRoute from "./components/helpers/private-route";
import SignInSignUp from "./pages/signin-signup";
import SubmitRun from "./components/submit-run";
import SubmittedRun from "./components/submitted-run";
import Track from "./pages/track";
import UpdateProfile from "./components/profile/update-profile";
import { EditRun } from "./components/edit-run";
import { ConfirmEdit } from "./components/confirm-edit";
import { DeleteRun } from "./components/delete-run";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowCircleLeft,
    faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function App(props: any) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []); // here

    return !isLoaded ? (
        <Loading type="spokes" color="green" height={500} width={500} />
    ) : (
        <GoogleReCaptchaProvider
            reCaptchaKey="6LcvoXgeAAAAAFHe14yElMsWcxjrsV7pmMW_Q8z6"
            useRecaptchaNet={true}
            scriptProps={{
                async: false, // optional, default to false,
                defer: false, // optional, default to false
                appendTo: "head", // optional, default to "head", can be "head" or "body",
                nonce: undefined, // optional, default undefined
            }}
        >
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
                                    <GenericPage
                                        component={
                                            <Leaderboard
                                                columns={
                                                    TracksLeaderboardColumns
                                                }
                                                effect={tracksLBEffect}
                                                sortBy="average_np"
                                                setTableBodyCell={
                                                    setTracksTableBodyCell
                                                }
                                                setTableHeaderInfoTip={
                                                    setTracksTableHeaderInfoTip
                                                }
                                            />
                                        }
                                    />
                                }
                            />

                            <Route
                                path="/creators"
                                element={
                                    <GenericPage
                                        component={
                                            <Leaderboard
                                                columns={
                                                    CreatorsLeaderboardColumns
                                                }
                                                effect={creatorsLBEffect}
                                                sortBy="average_track_ninja_points"
                                                setTableBodyCell={
                                                    setCreatorsTableBodyCell
                                                }
                                                setTableHeaderInfoTip={
                                                    setCreatorsTableHeaderInfoTip
                                                }
                                            />
                                        }
                                    />
                                }
                            />

                            <Route
                                path="/"
                                element={
                                    <PrivateRoute>
                                        <GenericPage
                                            component={
                                                <Leaderboard
                                                    columns={
                                                        MainLeaderboardColumns
                                                    }
                                                    effect={mainLBEffect}
                                                    sortBy="top_100_runs"
                                                    setTableBodyCell={
                                                        setMainTableBodyCell
                                                    }
                                                    setTableHeaderInfoTip={
                                                        setMainTableHeaderInfoTip
                                                    }
                                                />
                                            }
                                        />
                                    </PrivateRoute>
                                }
                            />

                            <Route
                                path="/runs"
                                element={
                                    <PrivateRoute>
                                        <GenericPage
                                            component={
                                                <Leaderboard
                                                    columns={
                                                        RunsLeaderboardColumns
                                                    }
                                                    effect={runsLBEffect}
                                                    sortBy="ninja_points"
                                                    setTableBodyCell={
                                                        setRunsTableBodyCell
                                                    }
                                                    setTableHeaderInfoTip={
                                                        setRunsTableHeaderInfoTip
                                                    }
                                                />
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
                                        <GenericPage
                                            component={<UpdateProfile />}
                                        />
                                    </PrivateRoute>
                                }
                            />

                            <Route
                                path="/submitted-run"
                                element={
                                    <PrivateRoute>
                                        <GenericPage
                                            component={<SubmittedRun />}
                                        />
                                    </PrivateRoute>
                                }
                            />

                            <Route
                                path="/profile/:user"
                                element={
                                    <PrivateRoute>
                                        <GenericPage component={<Profile />} />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                    <PrivateRoute>
                                        <GenericPage component={<Profile />} />
                                    </PrivateRoute>
                                }
                            />

                            <Route path="/edit-run">
                                <Route
                                    path="confirm"
                                    element={
                                        <PrivateRoute>
                                            <GenericPage
                                                component={<ConfirmEdit />}
                                            />
                                        </PrivateRoute>
                                    }
                                />
                                <Route
                                    path=":run"
                                    element={
                                        <PrivateRoute>
                                            <GenericPage
                                                component={<EditRun />}
                                            />
                                        </PrivateRoute>
                                    }
                                />
                            </Route>

                            <Route path="/delete-run">
                                <Route
                                    path=":run"
                                    element={
                                        <PrivateRoute>
                                            <GenericPage
                                                component={<DeleteRun />}
                                            />
                                        </PrivateRoute>
                                    }
                                />
                            </Route>

                            {/* This is an example of nested routes in react router v6.0. 
                                You provide an index (default element) if no child routes are matched
                         */}
                            <Route path="/submit-run">
                                <Route
                                    index={true}
                                    element={
                                        <PrivateRoute>
                                            <GenericPage
                                                component={<SubmitRun />}
                                            />
                                        </PrivateRoute>
                                    }
                                />
                                <Route
                                    path="import-runs"
                                    element={
                                        <PrivateRoute>
                                            <GenericPage
                                                component={
                                                    <SubmitRun
                                                        previousRun={
                                                            <div id="previous-run-arrow">
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faArrowCircleLeft
                                                                    }
                                                                    size="3x"
                                                                    tabIndex={
                                                                        -1
                                                                    }
                                                                />
                                                                <div>
                                                                    Previous Run
                                                                </div>
                                                            </div>
                                                        }
                                                        nextRun={
                                                            <div id="next-run-arrow">
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faArrowCircleRight
                                                                    }
                                                                    size="3x"
                                                                    tabIndex={
                                                                        -1
                                                                    }
                                                                />
                                                                <div>
                                                                    Next Run
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                }
                                            />
                                        </PrivateRoute>
                                    }
                                />
                                <Route
                                    path="ninja-level-help"
                                    element={
                                        <PrivateRoute>
                                            <GenericPage
                                                component={
                                                    <SubmitRun
                                                        help={
                                                            <NinjaLevelHelp />
                                                        }
                                                    />
                                                }
                                            />
                                        </PrivateRoute>
                                    }
                                />

                                <Route
                                    path="length-help"
                                    element={
                                        <PrivateRoute>
                                            <GenericPage
                                                component={
                                                    <SubmitRun
                                                        help={<LengthHelp />}
                                                    />
                                                }
                                            />
                                        </PrivateRoute>
                                    }
                                />
                                <Route
                                    path="consistency-help"
                                    element={
                                        <PrivateRoute>
                                            <GenericPage
                                                component={
                                                    <SubmitRun
                                                        help={
                                                            <ConsistencyHelp />
                                                        }
                                                    />
                                                }
                                            />
                                        </PrivateRoute>
                                    }
                                />
                                <Route
                                    path="scan-lb-help"
                                    element={
                                        <PrivateRoute>
                                            <GenericPage
                                                component={
                                                    <SubmitRun
                                                        help={<ScanLBHelp />}
                                                    />
                                                }
                                            />
                                        </PrivateRoute>
                                    }
                                />
                            </Route>
                        </Routes>
                    </SocketProvider.Provider>
                </AuthProvider>
            </Router>
        </GoogleReCaptchaProvider>
    );
}

export default App;
