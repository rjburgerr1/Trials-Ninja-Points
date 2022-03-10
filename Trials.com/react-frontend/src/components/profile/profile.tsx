import React, { useEffect, useState } from "react";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { CustomTextField, CustomTextArea } from "../data-entry/text-inputs";
import Avatar from "@material-ui/core/Avatar";
import { useAuth } from "../../contexts/auth-context";
import { Card } from "react-bootstrap";
import { formatCreateDate } from "../helpers/format-dates";
import { useLocation } from "react-router-dom";
import background from "../images/defaultProfileBanner.png";
import ReactCountryFlag from "react-country-flag";

interface LocationState {
    user: string;
}

export const Profile: React.FC = (props: any) => {
    const { currentUser } = useAuth();
    const location = useLocation();
    const state = location.state as LocationState; // Type Casting, then you can get the params passed via router

    const [username, setUsername] = useState(state ? state.user : "");
    const [bio, setBio] = useState("");
    const [country, setCountry] = useState("");
    const [runs, setRuns] = useState(0);
    const [highestNPRun, setHighestNPRun] = useState(0);
    const [rank, setRank] = useState(0);
    const [totalNP, setTotalNP] = useState(0);
    const [createDate, setCreateDate] = useState("");
    const [highestLevelPass, setHighestLevelPass] = useState(0);
    const [aliases, setAliases] = useState("");
    const [bannerURL, setBannerURL] = useState(
        "https://trialsnp-photos.s3.amazonaws.com/profiles/banners/defaultProfileBanner.png"
    );

    useEffect(() => {
        const getProfileInfo = async (user: string, currentUser: any) => {
            try {
                let profile;

                if (user === "") {
                    profile = await axios.get("/profile-info", {
                        params: {
                            id: currentUser.uid,
                        },
                    });
                } else {
                    profile = await axios.get("/profile-info", {
                        params: {
                            username: user,
                        },
                    });
                }
                setAliases(profile.data.aliases || "N/A");
                setBannerURL(profile.data.banner_url);
                setBio(profile.data.bio || "N/A");
                setCountry(profile.data.country);
                setCreateDate(formatCreateDate(profile.data.create_date));
                setHighestLevelPass(profile.data.highest_level_pass || "N/A");
                setHighestNPRun(profile.data.highest_np_run || "N/A");
                setRank(profile.data.rank);
                setRuns(profile.data.runs);
                setTotalNP(profile.data.total_ninja_points || "N/A");
                setUsername(profile.data.username);
            } catch (error) {
                console.error(error);
            }
        };
        getProfileInfo(username, currentUser);
    }, []);

    return (
        <div className="profile-container">
            <div className="main-container">
                <header>
                    {" "}
                    This page is doesn't work fully. It is a massive work in
                    progress
                </header>

                <div className="left-container container">
                    <div className="menu-box block">
                        <h2 className="titular">MENU BOX</h2>
                        <ul className="menu-box-menu">
                            <li>
                                <a className="menu-box-tab" href="#6">
                                    <span className="icon fontawesome-envelope scnd-font-color"></span>
                                    Messages
                                    <div className="menu-box-number">24</div>
                                </a>
                            </li>
                            <li>
                                <a className="menu-box-tab" href="#8">
                                    <span className="icon entypo-paper-plane scnd-font-color"></span>
                                    Invites
                                    <div className="menu-box-number">3</div>
                                </a>
                            </li>
                            <li>
                                <a className="menu-box-tab" href="#10">
                                    <span className="icon entypo-calendar scnd-font-color"></span>
                                    Events
                                    <div className="menu-box-number">5</div>
                                </a>
                            </li>
                            <li>
                                <a className="menu-box-tab" href="#12">
                                    <span className="icon entypo-cog scnd-font-color"></span>
                                    Account Settings
                                </a>
                            </li>
                            <li>
                                <a className="menu-box-tab" href="#13">
                                    <span className="icon entypo-chart-line scnd-font-color"></span>
                                    Statistics
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="donut-chart-block block">
                        <h2 className="titular">NINJA LEVEL STATS</h2>
                        <div className="donut-chart">
                            <div id="porcion1" className="recorte">
                                <div
                                    className="quesito ios"
                                    data-rel="21"
                                ></div>
                            </div>
                            <div id="porcion2" className="recorte">
                                <div
                                    className="quesito mac"
                                    data-rel="39"
                                ></div>
                            </div>
                            <div id="porcion3" className="recorte">
                                <div
                                    className="quesito win"
                                    data-rel="31"
                                ></div>
                            </div>
                            <div id="porcionFin" className="recorte">
                                <div
                                    className="quesito linux"
                                    data-rel="9"
                                ></div>
                            </div>

                            <p className="center-date">
                                JUNE
                                <br />
                                <span className="scnd-font-color">2013</span>
                            </p>
                        </div>
                        <ul className="os-percentages horizontal-list">
                            <li>
                                <p className="ios os scnd-font-color">iOS</p>
                                <p className="os-percentage">
                                    21<sup>%</sup>
                                </p>
                            </li>
                            <li>
                                <p className="mac os scnd-font-color">Mac</p>
                                <p className="os-percentage">
                                    48<sup>%</sup>
                                </p>
                            </li>
                            <li>
                                <p className="linux os scnd-font-color">
                                    Linux
                                </p>
                                <p className="os-percentage">
                                    9<sup>%</sup>
                                </p>
                            </li>
                            <li>
                                <p className="win os scnd-font-color">Win</p>
                                <p className="os-percentage">
                                    32<sup>%</sup>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="line-chart-block block clear">
                        <div className="line-chart">
                            <div className="grafico">
                                <ul className="eje-y">
                                    <li data-ejeY="30"></li>
                                    <li data-ejeY="20"></li>
                                    <li data-ejeY="10"></li>
                                    <li data-ejeY="0"></li>
                                </ul>
                                <ul className="eje-x">
                                    <li>Apr</li>
                                    <li>May</li>
                                    <li>Jun</li>
                                </ul>
                                <span data-valor="25">
                                    <span data-valor="8">
                                        <span data-valor="13">
                                            <span data-valor="5">
                                                <span data-valor="23">
                                                    <span data-valor="12">
                                                        <span data-valor="15"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <ul className="time-length horizontal-list">
                            <li>
                                <a className="time-length-btn" href="#14">
                                    Week
                                </a>
                            </li>
                            <li>
                                <a className="time-length-btn" href="#15">
                                    Month
                                </a>
                            </li>
                            <li>
                                <a className="time-length-btn" href="#16">
                                    Year
                                </a>
                            </li>
                        </ul>
                        <ul className="month-data clear">
                            <li>
                                <p>
                                    APR
                                    <span className="scnd-font-color">
                                        {" "}
                                        2013
                                    </span>
                                </p>
                                <p>
                                    <span className="entypo-plus increment">
                                        {" "}
                                    </span>
                                    21<sup>%</sup>
                                </p>
                            </li>
                            <li>
                                <p>
                                    MAY
                                    <span className="scnd-font-color">
                                        {" "}
                                        2013
                                    </span>
                                </p>
                                <p>
                                    <span className="entypo-plus increment">
                                        {" "}
                                    </span>
                                    48<sup>%</sup>
                                </p>
                            </li>
                            <li>
                                <p>
                                    JUN
                                    <span className="scnd-font-color">
                                        {" "}
                                        2013
                                    </span>
                                </p>
                                <p>
                                    <span className="entypo-plus increment">
                                        {" "}
                                    </span>
                                    35<sup>%</sup>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="middle-container container">
                    <div className="profile block">
                        <ReactCountryFlag
                            className="country-flag"
                            countryCode={country}
                            svg
                            title={country}
                        />

                        <a className="add-button" href="#28">
                            <span className="icon entypo-plus scnd-font-color"></span>
                        </a>
                        <div className="profile-picture big-profile-picture clear">
                            <img width="150px" alt={username} src={bannerURL} />
                        </div>

                        <h1 className="user-name">{username}</h1>

                        <div className="profile-description">
                            <p className="scnd-font-color">{bio}</p>
                        </div>
                        <ul className="profile-options horizontal-list">
                            <li>
                                <a className="comments" href="#40">
                                    <p>
                                        <span className="icon fontawesome-comment-alt scnd-font-color"></span>
                                        23
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a className="views" href="#41">
                                    <p>
                                        <span className="icon fontawesome-eye-open scnd-font-color"></span>
                                        841
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a className="likes" href="#42">
                                    <p>
                                        <span className="icon fontawesome-heart-empty scnd-font-color"></span>
                                        49
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="statistics block">
                        <span className="metrics">
                            <h4>Joined</h4>
                            <span>{createDate}</span>
                        </span>
                        <span className="metrics">
                            <h4>#Runs</h4>
                            <span>{runs}</span>
                        </span>
                        <span className="metrics">
                            <h5>Highest Level Pass</h5>
                            <span>{highestLevelPass}</span>
                        </span>
                        <span className="metrics">
                            <h4>Best Run (NP)</h4>
                            <span>{highestNPRun}</span>
                        </span>
                        <span className="metrics">
                            <h5>Total NP</h5>
                            <span>{totalNP}</span>
                        </span>
                        <span className="metrics">
                            <h4>Aliases</h4>
                            <span>{aliases}</span>
                        </span>
                    </div>

                    <div className="tweets block">
                        <h2 className="titular">
                            <span className="icon zocial-twitter"></span>LATEST
                            TWEETS
                        </h2>
                        <div className="tweet first">
                            <p>
                                Ice-cream trucks only play music when out of
                                ice-cream. Well played dad. On{" "}
                                <a className="tweet-link" href="#17">
                                    @Quora
                                </a>
                            </p>
                            <p>
                                <a
                                    className="time-ago scnd-font-color"
                                    href="#18"
                                >
                                    3 minutes ago
                                </a>
                            </p>
                        </div>
                        <div className="tweet">
                            <p>
                                We are in the process of pushing out all of the
                                new CC apps! We will tweet again once they are
                                live{" "}
                                <a className="tweet-link" href="#19">
                                    #CreativeCloud
                                </a>
                            </p>
                            <p>
                                <a className="scnd-font-color" href="#20">
                                    6 hours ago
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right-container container">
                    <div className="calendar-day block">
                        <div className="arrow-btn-container">
                            <a className="arrow-btn left" href="#200">
                                <span className="icon fontawesome-angle-left"></span>
                            </a>
                            <h2 className="titular">WEDNESDAY</h2>
                            <a className="arrow-btn right" href="#201">
                                <span className="icon fontawesome-angle-right"></span>
                            </a>
                        </div>
                        <p className="the-day">26</p>
                        <a className="add-event button" href="/submit-run">
                            ADD RUN
                        </a>
                    </div>
                    <div className="calendar-month block">
                        <div className="arrow-btn-container">
                            <a className="arrow-btn left" href="#202">
                                <span className="icon fontawesome-angle-left"></span>
                            </a>
                            <h2 className="titular">APRIL 2013</h2>
                            <a className="arrow-btn right" href="#203">
                                <span className="icon fontawesome-angle-right"></span>
                            </a>
                        </div>
                        <table className="calendar">
                            <thead className="days-week">
                                <tr>
                                    <th>S</th>
                                    <th>M</th>
                                    <th>T</th>
                                    <th>W</th>
                                    <th>R</th>
                                    <th>F</th>
                                    <th>S</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#100"
                                        >
                                            1
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#101"
                                        >
                                            2
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#102"
                                        >
                                            3
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#103"
                                        >
                                            4
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#104"
                                        >
                                            5
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#105"
                                        >
                                            6
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#106"
                                        >
                                            7
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#107"
                                        >
                                            8
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#108"
                                        >
                                            9
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#109"
                                        >
                                            10
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#110"
                                        >
                                            11
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#111"
                                        >
                                            12
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#112"
                                        >
                                            13
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#113"
                                        >
                                            14
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#114"
                                        >
                                            15
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#115"
                                        >
                                            16
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#116"
                                        >
                                            17
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#117"
                                        >
                                            18
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#118"
                                        >
                                            19
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#119"
                                        >
                                            20
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#120"
                                        >
                                            21
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#121"
                                        >
                                            22
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#122"
                                        >
                                            23
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#123"
                                        >
                                            24
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="scnd-font-color"
                                            href="#124"
                                        >
                                            25
                                        </a>
                                    </td>
                                    <td>
                                        <a className="today" href="#125">
                                            26
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#126">27</a>
                                    </td>
                                    <td>
                                        <a href="#127">28</a>
                                    </td>
                                    <td>
                                        <a href="#128">29</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#129">30</a>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <ul className="social block">
                        <li>
                            <a href="#50">
                                <div className="facebook icon">
                                    <span className="zocial-facebook"></span>
                                </div>
                                <h2 className="facebook titular">
                                    SHARE TO FACEBOOK
                                </h2>
                            </a>
                        </li>
                        <li>
                            <a href="#51">
                                <div className="twitter icon">
                                    <span className="zocial-twitter"></span>
                                </div>
                                <h2 className="twitter titular">
                                    SHARE TO TWITTER
                                </h2>
                            </a>
                        </li>
                        <li>
                            <a href="#52">
                                <div className="googleplus icon">
                                    <span className="zocial-googleplus"></span>
                                </div>
                                <h2 className="googleplus titular">
                                    SHARE TO GOOGLE+
                                </h2>
                            </a>
                        </li>
                    </ul>
                    <ul className="right-social horizontal-list block">
                        <li className="facebook">
                            <p className="icon">
                                <span className="zocial-facebook"></span>
                            </p>
                            <p className="number">248k</p>
                        </li>
                        <li className="twitter">
                            <p className="icon">
                                <span className="zocial-twitter"></span>
                            </p>
                            <p className="number">30k</p>
                        </li>
                        <li className="googleplus">
                            <p className="icon">
                                <span className="zocial-googleplus"></span>
                            </p>
                            <p className="number">124k</p>
                        </li>
                        <li className="mailbox">
                            <p className="icon">
                                <span className="fontawesome-envelope"></span>
                            </p>
                            <p className="number">89k</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
