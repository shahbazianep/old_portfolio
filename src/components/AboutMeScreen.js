import * as React from "react";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import "../styles/index.css";
import HamburgerMenu from "./HamburgerMenu";

import league from "../images/LOLmasters.webp";
import tft from "../images/TFTpenguin.png";
import spotify from "../images/spotify.png";

export default class AboutMeScreen extends React.Component {
    render() {
        return (
            <div
                id="aboutmescreen"
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    display: "flex",
                    top: "100%",
                    backgroundColor: "#1D102C",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        backgroundColor: "#FFFAFA",
                        width: "100%",
                        height: "100%",
                        left: "55%",
                        position: "absolute",
                        flexDirection: "column",
                        overflowY: "hidden",
                        transform: "skewX(-10deg)",
                    }}
                />
                <div
                    style={{
                        left: "10%",
                        width: 600,
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "Optician-Sans",
                        color: "#FFFAFA",
                        fontSize: 32,
                        textAlign: "center",
                        alignItems: "center",
                    }}
                >
                    More of me!
                    <div
                        style={{
                            fontFamily: "OpenSans-Regular",
                            fontSize: 16,
                            alignSelf: "start",
                            marginTop: 40,
                            textAlign: "left",
                        }}
                    >
                        {
                            "Hi! I'm Ethan Shahbazian. I'm originally from the Bay Area, but decided to move to LA to study computer engineering. Outside of my studies, I've continued lifelong hobbies and found new interests and passions. More details can be found below and in the links to the right.\n"
                        }
                        <ul>
                            <li>
                                <text
                                    style={{
                                        fontFamily: "OpenSans-Bold",
                                        color: "#9e9ede",
                                    }}
                                >
                                    {"Soccer: "}
                                </text>
                                I've played my whole life, and have continued to
                                play IM and pickup in college.
                            </li>
                            <li>
                                <text
                                    style={{
                                        fontFamily: "OpenSans-Bold",
                                        color: "#9e9ede",
                                    }}
                                >
                                    {"Badminton: "}
                                </text>
                                I began playing in high school in tandem with
                                club soccer, and have been able to meet many new
                                and amazing people through the sport in college.
                            </li>
                            <li>
                                <text
                                    style={{
                                        fontFamily: "OpenSans-Bold",
                                        color: "#9e9ede",
                                    }}
                                >
                                    {"Music: "}
                                </text>
                                As anyone who knows me can attest, I am
                                constantly listening to music, and use it as a
                                way to express emotions, introspect, and pass
                                time. Although not fully representative of my
                                tastes, a sampling can be found on my Spotify.
                            </li>
                            <li>
                                <text
                                    style={{
                                        fontFamily: "OpenSans-Bold",
                                        color: "#9e9ede",
                                    }}
                                >
                                    {"Video Games: "}
                                </text>
                                Currently, I play League, TFT, and some
                                Valorant, and am fortunate enough to represent
                                UCLA's League of Legends team.
                            </li>
                            <li>
                                <text
                                    style={{
                                        fontFamily: "OpenSans-Bold",
                                        color: "#9e9ede",
                                    }}
                                >
                                    {"Coding: "}
                                </text>
                                Through I first started in high school, I became
                                more passionate about coding once I got to
                                college. My favorite type of coding is
                                application development (both mobile and web),
                                and some of my personal interests include
                                cybersecurity, algorithms, and data science.
                            </li>
                            <li>
                                <text
                                    style={{
                                        fontFamily: "OpenSans-Bold",
                                        color: "#9e9ede",
                                    }}
                                >
                                    {"Miscellaneous: "}
                                </text>
                                Other hobbies and favorites include reading
                                (with tea), hiking with friends and family,
                                baking, golfing, watching anime, and getting
                                boba. I am semi-fluent in French, and working on
                                learning Korean as well.
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    style={{
                        left: "67%",
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "Optician-Sans",
                        color: "#1D102C",
                        fontSize: 32,
                        textAlign: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        alt={"League of Legends Masters logo"}
                        src={league}
                        style={{
                            cursor: "pointer",
                            position: "absolute",
                            left: 0,
                            top: -300,
                        }}
                        width={180}
                        onClick={() =>
                            window.open(
                                "https://www.op.gg/summoners/na/atticus224"
                            )
                        }
                    ></img>
                    <img
                        alt={"Spotify logo"}
                        src={spotify}
                        style={{
                            cursor: "pointer",
                            position: "absolute",
                            left: 220,
                            top: -40,
                        }}
                        width={180}
                        onClick={() =>
                            window.open("https://open.spotify.com/user/eshah22")
                        }
                    ></img>
                    <img
                        alt={"TFT character"}
                        src={tft}
                        style={{
                            cursor: "pointer",
                            position: "absolute",
                            left: -130,
                            top: 50,
                        }}
                        width={240}
                        onClick={() =>
                            window.open(
                                "https://lolchess.gg/profile/na/atticus224"
                            )
                        }
                    ></img>
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        fontSize: 24,
                        color: "#FFFAFA",
                        fontFamily: "Optician-Sans",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <ArrowLeft
                        sx={{
                            color: "#FFFAFA",
                            height: 48,
                            width: 48,
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            this.props.transitionBackToMenu("aboutmescreen");
                        }}
                    />
                    Back
                </div>
                <HamburgerMenu
                    menus={["experience", "resume", "contact"]}
                    src="#aboutmescreen"
                    titles={["Experience", "Resume", "contact"]}
                    transitionBetweenMenus={this.props.transitionBetweenMenus}
                    index={2}
                    color={"#1D102C"}
                />
            </div>
        );
    }
}
