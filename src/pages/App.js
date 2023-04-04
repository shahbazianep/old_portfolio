import * as React from "react";
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import anime from "animejs";
// import { Button, Menu } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ContactScreen from "../components/ContactScreen";
import ResumeScreen from "../components/ResumeScreen";
import ExperienceScreen from "../components/ExperienceScreen";

import MenuItem from "../components/MenuItem.js";
import {
    ExperienceMenuDetails,
    ResumeMenuDetails,
    AboutMenuDetails,
    ContactMenuDetails,
} from "../components/Details.js";

import {
    BruinSVG,
    DesignerSVG,
    EngineerSVG,
    IntroSVG,
    NameSVG,
} from "../components/svgs.js";
import AboutMeScreen from "../components/AboutMeScreen";

var animationFinished = false;
var loaded = false;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { landingButtonEnabled: false };
        this.scrollToRef = React.createRef();
    }

    componentDidMount() {
        anime({
            targets: "#introsvg",
            opacity: [0, 1],
            easing: "easeInOutExpo",
            translateX: [-80, 0],
            duration: 1800,
            delay: 600,
        });
        anime({
            targets: "#skewbg",
            translateX: [1200, 0],
            easing: "easeInOutExpo",
            duration: 3000,
        });
        anime({
            targets: "#landingsvg1",
            easing: "easeInOutExpo",
            delay: 4000,
            // fill: { value: "#9e9ede", delay: 4800, easing: "easeOutExpo" },
            opacity: { value: [0, 1], easing: "easeInExpo" },
            strokeDashoffset: [-103, 149],
            strokeDasharray: 252,
        });
        anime({
            targets: "#landingsvg2",
            easing: "easeInOutExpo",
            delay: 4000,
            opacity: { value: [0, 1], easing: "easeInExpo" },
            strokeDashoffset: [149, -103],
            strokeDasharray: 252,
        });
        anime({
            targets: "#landingscreenbuttontext",
            easing: "easeInOutExpo",
            delay: 4800,
            opacity: { value: [0, 1], easing: "easeInExpo" },
        });
        anime({
            targets: "#landingarrow",
            delay: 4000,
            duration: 1200,
            translateY: [10, 0],
            opacity: [0, 1],
            easing: "easeInOutExpo",
        });
        anime({
            targets: "#landingdeco",
            easing: "easeInOutExpo",
            duration: 600,
            delay: 4400,
            scaleX: [0, 1],
            opacity: [0, 0.4],
            complete: function (anim) {
                loaded = anim.completed;
            },
        });
        var tl = anime.timeline({
            easing: "easeInOutExpo",
            duration: 2500,
            loop: true,
        });
        tl.add({
            targets: "#namesvg path",
            strokeDashoffset: [anime.setDashoffset, 0],
            opacity: [0, 1],
            endDelay: 1300,
            delay: 1300,
        });
        tl.add({
            targets: "#namesvg path",
            strokeDashoffset: [0, anime.setDashoffset],
            opacity: [1, 0],
        });
        tl.add({
            targets: "#designersvg path",
            strokeDashoffset: [anime.setDashoffset, 0],
            opacity: [0, 1],
            endDelay: 1300,
        });
        tl.add({
            targets: "#designersvg path",
            strokeDashoffset: [0, anime.setDashoffset],
            opacity: [1, 0],
        });
        tl.add({
            targets: "#engineersvg path",
            strokeDashoffset: [anime.setDashoffset, 0],
            opacity: [0, 1],
            endDelay: 1300,
        });
        tl.add({
            targets: "#engineersvg path",
            strokeDashoffset: [0, anime.setDashoffset],
            opacity: [1, 0],
        });
        tl.add({
            targets: "#bruinsvg path",
            strokeDashoffset: [anime.setDashoffset, 0],
            opacity: [0, 1],
            endDelay: 1300,
        });
        tl.add({
            targets: "#bruinsvg path",
            strokeDashoffset: [0, anime.setDashoffset],
            opacity: [1, 0],
        });
        setTimeout(() => {
            if (typeof document !== undefined) {
                if (
                    document.getElementById("landingdeco") &&
                    document.getElementById("landingscreenbuttontext") &&
                    document.getElementById("landingarrow") &&
                    loaded
                ) {
                    document.getElementById("landingdeco").style.cursor =
                        "pointer";
                    document.getElementById(
                        "landingscreenbuttontext"
                    ).style.cursor = "pointer";
                    document.getElementById("landingarrow").style.cursor =
                        "pointer";
                }
            }
        }, 5000);
    }

    transitionBetweenMenus = (src, dest) => {
        anime({
            targets: "#coverscreen1",
            delay: 300,
            translateY: [
                { value: [0, "-100%"], duration: 400, easing: "easeOutQuad" },
                {
                    value: "-180%",
                    duration: 600,
                    delay: 100,
                    easing: "easeOutExpo",
                },
            ],
            scaleY: [
                { value: [0, 1], duration: 400, easing: "easeOutQuad" },
                {
                    value: [1, 0.3],
                    duration: 600,
                    delay: 100,
                    easing: "easeOutExpo",
                },
            ],
        });
        anime({
            targets: "#coverscreen2",
            translateY: [
                { value: [0, "-100%"], duration: 400, easing: "easeOutQuad" },
                {
                    value: "-180%",
                    duration: 600,
                    delay: 100,
                    easing: "easeOutExpo",
                },
            ],
            scaleY: [
                { value: [0, 1], duration: 400, easing: "easeOutQuad" },
                {
                    value: [1, 0.3],
                    duration: 600,
                    delay: 100,
                    easing: "easeOutExpo",
                },
            ],
        });
        anime({
            targets: dest,
            translateY: "-100%",
            delay: 700,
            duration: 100,
            easing: "easeOutExpo",
        });
        anime({
            targets: src,
            translateY: "100%",
            delay: 700,
            duration: 100,
            easing: "easeOutExpo",
        });

        if (dest === "#contactscreen") {
            anime({
                targets: [
                    "#linkcirc1",
                    "#linkcirc2",
                    "#ghcirc1",
                    "#ghcirc2",
                    "#fbcirc1",
                    "#fbcirc2",
                    "#incirc1",
                    "#incirc2",
                ],
                strokeDasharray: ["0 370", "185 185"],
                easing: "easeInOutExpo",
                duration: 1000,
                delay: 1000,
            });
            anime({
                targets: ["#linkcirc1", "#ghcirc1", "#fbcirc1", "#incirc1"],
                fill: [
                    { value: "#FFFAFA", duration: 500, delay: 600 },
                    {
                        value: "#9e9ede",
                        delay: function (el, i) {
                            return 500 + i * 200;
                        },
                        duration: 400,
                    },
                    { value: "#FFFAFA" },
                ],
                easing: "easeInOutExpo",
                duration: 1000,
                delay: 1200,
            });
            anime({
                targets: [
                    "#linkcircicon",
                    "#ghcircicon",
                    "#fbcircicon",
                    "#incircicon",
                ],
                opacity: [0, 1],
                easing: "easeInOutExpo",
                duration: 1000,
                delay: 1600,
            });
        }
    };

    transitionToMenu = (source, returnSource) => {
        anime({
            targets: "#coverscreen1",
            delay: 1000,
            translateY: [
                { value: [0, "-100%"], duration: 400, easing: "easeOutQuad" },
                {
                    value: "-180%",
                    duration: 600,
                    delay: 100,
                    easing: "easeOutExpo",
                },
            ],
            scaleY: [
                { value: [0, 1], duration: 400, easing: "easeOutQuad" },
                {
                    value: [1, 0.3],
                    duration: 600,
                    delay: 100,
                    easing: "easeOutExpo",
                },
            ],
        });
        anime({
            targets: "#coverscreen2",
            delay: 700,
            translateY: [
                { value: [0, "-100%"], duration: 400, easing: "easeOutQuad" },
                {
                    value: "-180%",
                    duration: 600,
                    delay: 100,
                    easing: "easeOutExpo",
                },
            ],
            scaleY: [
                { value: [0, 1], duration: 400, easing: "easeOutQuad" },
                {
                    value: [1, 0.3],
                    duration: 600,
                    delay: 100,
                    easing: "easeOutExpo",
                },
            ],
        });
        anime({
            targets: "#menuscreen",
            translateY: "-100%",
            delay: 1400,
            duration: 100,
            easing: "easeOutExpo",
        });
        anime({
            targets: ["#bg1", "#bg2", "#bg3", "#bg4"],
            delay: 700,
            backgroundColor: [
                {
                    value: "#1D102C",
                    duration: 300,
                },
                {
                    value: "#5B3389",
                    delay: function (el, i) {
                        return 400 + i * 300;
                    },
                },
                { value: "#361e51" },
            ],
            duration: 2000,
            easing: "easeInExpo",
        });
        anime({
            targets: ["#title1", "#title2", "#title3", "#title4"],
            delay: function (el, i) {
                return 1500 + i * 100;
            },
            duration: 800,
            scaleY: [0, 1],
            opacity: [0, 1],
            easing: "easeInOutExpo",
        });
        anime({
            targets: ["#subtext1", "#subtext2", "#subtext3", "#subtext4"],
            delay: function (el, i) {
                return 1700 + i * 100;
            },
            duration: 800,
            scaleY: [0, 1],
            opacity: [0, 1],
            easing: "easeInOutExpo",
            complete: function (anim) {
                animationFinished = anim.completed;
            },
        });
        anime({
            targets: ["#line1", "#line2", "#line3", "#line4"],
            delay: function (el, i) {
                return 2200 + i * 100;
            },
            duration: 1200,
            translateY: [-53, 0],
            scaleX: {
                value: [0, 1],
                delay: function (el, i) {
                    return 1000 + i * 100;
                },
            },
            easing: "easeInOutExpo",
        });
        anime({
            targets: ["#num1", "#num2", "#num3", "#num4"],
            delay: function (el, i) {
                return 2200 + i * 100;
            },
            duration: 1200,
            opacity: [0, 1],
            easing: "easeInOutExpo",
        });
        anime({
            targets: [
                "#iconborder1",
                "#iconborder2",
                "#iconborder3",
                "#iconborder4",
            ],
            delay: function (el, i) {
                return 2200 + i * 100;
            },
            duration: 1200,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutExpo",
        });
        anime({
            targets: ["#arrow1", "#arrow2", "#arrow3", "#arrow4"],
            delay: function (el, i) {
                return 1800 + i * 100;
            },
            duration: 1200,
            translateY: [10, 0],
            opacity: [0, 1],
            easing: "easeInOutExpo",
        });
        anime({
            targets: ["#image1", "#image2", "#image3", "#image4"],
            delay: function (el, i) {
                return 2700 + i * 100;
            },
            duration: 1200,
            opacity: [0, 1],
            easing: "easeInOutExpo",
        });
        anime({
            targets: "#landingdeco",
            scaleX: 4.56,
            duration: 400,
            opacity: [
                { value: [0.4, 0.8], delay: 350, duration: 200 },
                { value: [0.8, 0.4], delay: 550, duration: 200 },
            ],
            easing: "easeInExpo",
        });

        if (source != null) {
            anime({
                targets: `#${source}`,
                translateY: "-200%",
                delay: 1400,
                duration: 100,
                easing: "easeOutExpo",
            });
        }
        if (returnSource != null) {
            anime({
                targets: `#${returnSource}`,
                translateY: "100%",
                delay: 1400,
                duration: 100,
                easing: "easeOutExpo",
            });
        }
    };

    transitionBackToMenu = (returnSource) => {
        anime({
            targets: "#coverscreen1",
            delay: 1000,
            translateY: [
                { value: [0, "-100%"], duration: 400, easing: "easeOutQuad" },
                {
                    value: "-180%",
                    duration: 600,
                    delay: 100,
                    easing: "easeOutExpo",
                },
            ],
            scaleY: [
                { value: [0, 1], duration: 400, easing: "easeOutQuad" },
                {
                    value: [1, 0.3],
                    duration: 600,
                    delay: 100,
                    easing: "easeOutExpo",
                },
            ],
        });
        anime({
            targets: "#coverscreen2",
            delay: 700,
            translateY: [
                { value: [0, "-100%"], duration: 400, easing: "easeOutQuad" },
                {
                    value: "-180%",
                    duration: 600,
                    delay: 100,
                    easing: "easeOutExpo",
                },
            ],
            scaleY: [
                { value: [0, 1], duration: 400, easing: "easeOutQuad" },
                {
                    value: [1, 0.3],
                    duration: 600,
                    delay: 100,
                    easing: "easeOutExpo",
                },
            ],
        });
        anime({
            targets: `#${returnSource}`,
            translateY: "100%",
            delay: 1400,
            duration: 100,
            easing: "easeOutExpo",
        });
    };

    animateMenuItem = (menuIndex) => {
        if (animationFinished) {
            for (let i = 1; i <= 4; i++) {
                if (i !== menuIndex) {
                    anime({
                        targets: `#bg${i}`,
                        backgroundColor: "#1D102C",
                        easing: "easeInOutExpo",
                        duration: 800,
                    });
                }
            }

            anime({
                targets: `#bg${menuIndex}`,
                backgroundColor: "#5B3389",
                easing: "easeInOutExpo",
                duration: 800,
            });
            anime({
                targets: `#line${menuIndex}`,
                scaleX: [1, 2.5],
                backgroundColor: ["#FFFAFA", "#9e9ede"],
                easing: "easeInOutExpo",
                duration: 400,
            });
            anime({
                targets: `#icon${menuIndex}`,
                strokeDasharray: "180 500",
                easing: "easeInOutSine",
                duration: 800,
            });
            anime({
                targets: `#subtext${menuIndex}`,
                color: "#FFFAFA",
                easing: "easeInExpo",
                scaleY: [1, 0],
                opacity: 0,
                duration: 600,
            });
            anime({
                targets: [
                    `#newsubtext${menuIndex}`,
                    `#topbullet${menuIndex}`,
                    `#midbullet${menuIndex}`,
                    `#botbullet${menuIndex}`,
                ],
                color: "#FFFAFA",
                easing: "easeInOutExpo",
                delay: function (el, i, l) {
                    return i * 100 + 300;
                },
                translateY: function (el, i) {
                    return i * -15;
                },
                opacity: { value: [0, 1], duration: 1000 },
                duration: 600,
            });
            anime({
                targets: `#arrow${menuIndex}`,
                translateX: 210,
                duration: 500,
                easing: "easeInOutExpo",
            });
            anime({
                targets: `#buttontext${menuIndex}`,
                opacity: 1,
                duration: 500,
                delay: 400,
                easing: "easeInOutExpo",
            });
            anime({
                targets: `#rightsvg${menuIndex}`,
                easing: "easeInOutExpo",
                opacity: { value: [0, 1], easing: "easeInExpo" },
                strokeDashoffset: [-103, 149],
                strokeDasharray: 252,
            });
            anime({
                targets: `#leftsvg${menuIndex}`,
                easing: "easeInOutExpo",
                opacity: { value: [0, 1], easing: "easeInExpo" },
                strokeDashoffset: [149, -103],
                strokeDasharray: 252,
            });
            anime({
                targets: `#deco${menuIndex}`,
                easing: "easeInOutExpo",
                duration: 600,
                delay: 200,
                scaleX: [0, 1],
                opacity: [0, 0.8],
            });
            setTimeout(() => {
                if (typeof document !== undefined) {
                    if (
                        document.getElementById("landingdeco") &&
                        document.getElementById("landingscreenbuttontext") &&
                        document.getElementById("landingarrow") &&
                        loaded
                    ) {
                        document.getElementById("landingdeco").style.cursor =
                            "pointer";
                        document.getElementById(
                            "landingscreenbuttontext"
                        ).style.cursor = "pointer";
                        document.getElementById("landingarrow").style.cursor =
                            "pointer";
                    }
                }
            }, 800);
        }
    };

    deAnimateMenuItem = (menuIndex) => {
        if (animationFinished) {
            anime.remove([
                `#rightsvg${menuIndex}`,
                `#leftsvg${menuIndex}`,
                `#subtext${menuIndex}`,
                `#newsubtext${menuIndex}`,
                `#topbullet${menuIndex}`,
                `#midbullet${menuIndex}`,
                `#botbullet${menuIndex}`,
                `#deco${menuIndex}`,
                `#line${menuIndex}`,
                `#icon${menuIndex}`,
                `#buttontext${menuIndex}`,
                "#bg1",
                "#bg2",
                "#bg3",
                "#bg4",
                `#arrow${menuIndex}`,
            ]);
            for (let i = 1; i <= 4; i++) {
                if (i !== menuIndex) {
                    anime({
                        targets: `#bg${i}`,
                        backgroundColor: "#361e51",
                        easing: "easeInOutExpo",
                        duration: 600,
                    });
                }
            }
            anime({
                targets: `#bg${menuIndex}`,
                backgroundColor: "#361e51",
                easing: "easeInOutExpo",
                duration: 600,
            });
            anime({
                targets: `#line${menuIndex}`,
                scaleX: [2.5, 1],
                backgroundColor: ["#9e9ede", "#FFFAFA"],
                easing: "easeInOutExpo",
                duration: 300,
            });
            anime({
                targets: `#icon${menuIndex}`,
                strokeDasharray: "0 500",
                easing: "easeInOutSine",
                duration: 800,
            });
            anime({
                targets: `#subtext${menuIndex}`,
                color: "#9e9ede",
                opacity: 1,
                scaleY: 1,
                easing: "easeInOutExpo",
                duration: 800,
            });
            anime({
                targets: [
                    `#newsubtext${menuIndex}`,
                    `#topbullet${menuIndex}`,
                    `#midbullet${menuIndex}`,
                    `#botbullet${menuIndex}`,
                ],
                color: "#FFFAFA",
                easing: "easeInOutExpo",
                delay: function (el, i, l) {
                    return i * 100;
                },
                translateY: {
                    value: function (el, i) {
                        return i * 15;
                    },
                    delay: 300,
                },
                opacity: 0,
                duration: 400,
            });
            anime({
                targets: `#button${menuIndex}`,
                translateX: 0,
                duration: 500,
                easing: "easeInOutExpo",
            });
            anime({
                targets: `#buttontext${menuIndex}`,
                opacity: 0,
                duration: 200,
                easing: "easeInOutExpo",
            });
            anime({
                targets: `#rightsvg${menuIndex}`,
                easing: "easeInOutExpo",
                duration: 200,
                opacity: 0,
            });
            anime({
                targets: `#leftsvg${menuIndex}`,
                easing: "easeInOutExpo",
                duration: 200,
                opacity: 0,
            });
            anime({
                targets: `#arrow${menuIndex}`,
                translateX: 0,
                duration: 400,
                easing: "easeInOutExpo",
            });
            anime({
                targets: `#deco${menuIndex}`,
                easing: "easeInOutExpo",
                duration: 200,
                opacity: 0,
            });
        }
    };

    render() {
        return (
            <div
                style={{
                    backgroundColor: "#FFFAFA",
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    position: "absolute",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "hidden",
                    overflowX: "hidden",
                }}
            >
                <div
                    id="skewbg"
                    style={{
                        backgroundColor: "#1D102C",
                        width: "100%",
                        height: "100%",
                        left: 510,
                        position: "absolute",
                        flexDirection: "column",
                        overflowY: "hidden",
                        transform: "skewX(-10deg)",
                    }}
                />
                <div
                    style={{
                        width: "100%",
                        marginTop: -200,
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            left: 0,
                        }}
                    >
                        <IntroSVG color="#1D102C" />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            left: 0,
                            width: "100%",
                        }}
                    >
                        <NameSVG color="#FFFAFA" />
                        <DesignerSVG color="#FFFAFA" />
                        <EngineerSVG color="#FFFAFA" />
                        <BruinSVG color="#FFFAFA" />
                    </div>
                </div>

                <div
                    style={{
                        position: "absolute",
                        top: 640,
                        left: "70%",
                        display: "flex",
                        flexDirection: "row",
                        justifySelf: "center",
                        alignContent: "center",
                    }}
                >
                    <div
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            verticalAlign: "middle",
                            display: "inline-flex",
                            marginRight: 10,
                            backgroundColor: "red",
                        }}
                    >
                        <div
                            id={"landingdeco"}
                            style={{
                                width: 45,
                                height: 45,
                                position: "absolute",
                                right: 2,
                                top: 3,
                                backgroundColor: "#9e9ede",
                                transformOrigin: "right",
                                opacity: 0.4,
                            }}
                            onClick={() => {
                                if (loaded) {
                                    this.transitionToMenu();
                                }
                            }}
                        ></div>
                        <KeyboardArrowRightIcon
                            id={"landingarrow"}
                            sx={{
                                color: "#FFFAFA",
                                fontSize: 30,
                                position: "absolute",
                                right: 10,
                            }}
                            onClick={() => {
                                if (loaded) {
                                    this.transitionToMenu();
                                }
                            }}
                        />
                        <div
                            id={"landingscreenbuttontext"}
                            style={{
                                color: "#FFFAFA",
                                textAlign: "center",
                                lineHeight: "50px",
                                width: 165,
                                left: 12,
                                height: "100%",
                                fontFamily: "Optician-Sans",
                                fontSize: 16,
                                position: "absolute",
                                cursor: "default",
                            }}
                            onClick={() => {
                                if (loaded) {
                                    this.transitionToMenu();
                                }
                            }}
                        >
                            Learn more
                        </div>
                    </div>

                    <svg height={50} width={210}>
                        <rect
                            id={"landingsvg1"}
                            stroke="#9e9ede"
                            strokeDasharray={252}
                            strokeDashoffset={-103}
                            width={206}
                            height={46}
                            x={2}
                            y={2}
                            fill="none"
                            strokeWidth={"2px"}
                        />
                        <rect
                            id={"landingsvg2"}
                            stroke="#9e9ede"
                            strokeDasharray={252}
                            strokeDashoffset={149}
                            width={206}
                            height={46}
                            x={2}
                            y={2}
                            fill="none"
                            strokeWidth={"2px"}
                        />
                    </svg>
                </div>

                <div
                    id="menuscreen"
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "100%",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <MenuItem
                            menuIndex={1}
                            animateMenuItem={this.animateMenuItem}
                            deAnimateMenuItem={this.deAnimateMenuItem}
                            transitionToMenu={this.transitionToMenu}
                            title={"Experience"}
                            iconSrc="https://cdn.lordicon.com/qhgmphtg.json"
                            details={ExperienceMenuDetails()}
                            subscreen={"#experiencescreen"}
                        ></MenuItem>
                        <MenuItem
                            menuIndex={2}
                            animateMenuItem={this.animateMenuItem}
                            deAnimateMenuItem={this.deAnimateMenuItem}
                            transitionToMenu={this.transitionToMenu}
                            title={"Resume"}
                            iconSrc="https://cdn.lordicon.com/puvaffet.json"
                            details={ResumeMenuDetails()}
                            subscreen={"#resumescreen"}
                        ></MenuItem>
                        <MenuItem
                            menuIndex={3}
                            animateMenuItem={this.animateMenuItem}
                            deAnimateMenuItem={this.deAnimateMenuItem}
                            transitionToMenu={this.transitionToMenu}
                            title={"About Me"}
                            iconSrc="https://cdn.lordicon.com/dxjqoygy.json"
                            details={AboutMenuDetails()}
                            subscreen={"#aboutmescreen"}
                        ></MenuItem>
                        <MenuItem
                            menuIndex={4}
                            animateMenuItem={this.animateMenuItem}
                            deAnimateMenuItem={this.deAnimateMenuItem}
                            transitionToMenu={this.transitionToMenu}
                            title={"Contact"}
                            iconSrc="https://cdn.lordicon.com/tkgyrmwc.json"
                            details={ContactMenuDetails()}
                            subscreen={"#contactscreen"}
                        ></MenuItem>
                    </div>
                </div>
                <ExperienceScreen
                    transitionBackToMenu={this.transitionBackToMenu}
                    transitionBetweenMenus={this.transitionBetweenMenus}
                />
                <ResumeScreen
                    transitionBackToMenu={this.transitionBackToMenu}
                    transitionBetweenMenus={this.transitionBetweenMenus}
                />
                <AboutMeScreen
                    transitionBackToMenu={this.transitionBackToMenu}
                    transitionBetweenMenus={this.transitionBetweenMenus}
                />
                <ContactScreen
                    transitionBackToMenu={this.transitionBackToMenu}
                    transitionBetweenMenus={this.transitionBetweenMenus}
                />
                <div
                    id="coverscreen1"
                    style={{
                        width: "100%",
                        height: "100%",
                        top: "100%",
                        position: "fixed",
                        backgroundColor: "#9e9ede",
                    }}
                />
                <div
                    id="coverscreen2"
                    style={{
                        width: "100%",
                        height: "100%",
                        top: "100%",
                        position: "fixed",
                        backgroundColor: "#9e9ede",
                        opacity: "50%",
                    }}
                />
            </div>
        );
    }
}
