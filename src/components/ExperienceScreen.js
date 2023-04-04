import * as React from "react";
import anime from "animejs";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import "../styles/index.css";
import HamburgerMenu from "./HamburgerMenu";

let experienceBullets = [
    "Integration and testing of GPS and camera sensors to be used by software team",
    "Wiring and testing of servos. Currently working on more complex control mechanisms for servo operation such as PID and model predictive control",
    "Reconfiguration of protoype to use a centralized power system",
];

export default class ExperienceScreen extends React.Component {
    constructor() {
        super();
        this.state = { color: "#FFFAFA" };
    }

    animateExperienceMenu = (sel) => {
        this.setState({ color: "#1D102C" });
        let items = ["#bruinbot", "#nanika", "#footprint", "#northrop"];
        for (let i = 0; i < 4; i++) {
            if (sel !== items[i]) {
                anime({
                    targets: items[i],
                    easing: "easeInOutExpo",
                    backgroundColor: "#1D102C",
                    duration: 500,
                    translateX: { value: -480 + 60 * i, delay: 200 },
                });
                anime({
                    targets: `${items[i]}content`,
                    easing: "easeInOutExpo",
                    opacity: 0,
                    duration: 200,
                });
            } else {
                anime({
                    targets: sel,
                    easing: "easeInOutExpo",
                    backgroundColor: "#5B3389",
                    duration: 500,
                    translateX: { value: -480 + 60 * i, delay: 200 },
                });
                anime({
                    targets: `${sel}content`,
                    easing: "easeInOutExpo",
                    opacity: [0, 1],
                    delay: 200,
                    duration: 500,
                });
            }
        }
        anime({
            targets: "#experienceskewbg",
            opacity: 1,
            easing: "easeInOutExpo",
            duration: 1000,
        });
    };

    render() {
        return (
            <div
                id="experiencescreen"
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    justifyContent: "center",
                    display: "flex",
                    top: "100%",
                    backgroundColor: "#1D102C",
                }}
            >
                <div
                    id="experienceskewbg"
                    style={{
                        backgroundColor: "#FFFAFA",
                        width: "100%",
                        height: "100%",
                        left: "55%",
                        position: "absolute",
                        flexDirection: "column",
                        overflowY: "hidden",
                        transform: "skewX(-10deg)",
                        opacity: 0,
                    }}
                />
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
                        onClick={() =>
                            this.props.transitionBackToMenu("experiencescreen")
                        }
                    />
                    Back
                </div>
                <div
                    id="bruinbotcontent"
                    style={{
                        height: "70%",
                        width: "35%",
                        alignSelf: "center",
                        left: 940,
                        position: "absolute",
                        // borderStyle: "solid",
                        // borderWidth: 2,
                        // borderColor: "#9e9ede",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        opacity: 0,
                    }}
                >
                    <div
                        style={{
                            //backgroundColor: "#1D102C",
                            fontSize: 16,
                            fontFamily: "OpenSans-Regular",
                            color: "#1D102C",
                            flexDirection: "column",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: 30,
                        }}
                    >
                        {
                            "BruinBot is a service rover built by UCLA students for UCLA students. Our vision was to provide a free service that would allow for autonomous delivery of food, mail, and other items to students on campus. "
                        }
                        {
                            "I led a small team which focused on the development, testing, and integrations of the electrical system with the rest of the rover. Notable projects include:"
                        }
                        <ul style={{ marginTop: -80 }}>
                            {experienceBullets.map((b) => (
                                <li>{b}</li>
                            ))}
                        </ul>

                        <div style={{ lineHeight: 2 }}>
                            <text style={{ fontFamily: "OpenSans-Bold" }}>
                                {"Role: "}
                            </text>
                            {"Electrical Team Lead"}

                            <text style={{ fontFamily: "OpenSans-Bold" }}>
                                {"\nMembership: "}
                            </text>
                            {"Jan 2022 - Present"}
                        </div>
                    </div>
                </div>
                <div
                    id="nanikacontent"
                    style={{
                        height: "70%",
                        width: "35%",
                        alignSelf: "center",
                        left: 940,
                        position: "absolute",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        opacity: 0,
                    }}
                >
                    <div
                        style={{
                            //backgroundColor: "#1D102C",
                            fontSize: 16,
                            fontFamily: "OpenSans-Regular",
                            color: "#1D102C",
                            flexDirection: "column",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: 30,
                        }}
                    >
                        <div>
                            {
                                "Nanika is a mental health application inspired by the psychology-based ideas of emotional identification and contagion. It focuses on the phenomenon in which individuals, upon observing others expressing different emotions or behaviors, become biased towards these emotions and behaviors. Named after the Japanese word なにか, it attempts to instill feelings of inclusion, tranquility, and reflection through soft colors, motivational reminders, and thoughtful guidance. "
                            }
                            {
                                "\n\nThis application was developed in React Native for iOS using JS/HTML/CSS, with a database and authentication service hosted through Firebase. A demonstration website highlighting the app's functionality, aesthetics, and use is currently in progress. This will help showcase the app until its publication."
                            }
                        </div>

                        <div
                            style={{
                                lineHeight: 2,
                            }}
                        >
                            <text style={{ fontFamily: "OpenSans-Bold" }}>
                                {"Role: "}
                            </text>
                            {"Sole developer and designer"}

                            <text style={{ fontFamily: "OpenSans-Bold" }}>
                                {"\nTimeline: "}
                            </text>
                            {"Dec 2022 - Jan 2023"}
                        </div>
                    </div>
                </div>
                <div
                    id="footprintcontent"
                    style={{
                        height: "70%",
                        width: "35%",
                        alignSelf: "center",
                        left: 940,
                        position: "absolute",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        opacity: 0,
                    }}
                >
                    <div
                        style={{
                            //backgroundColor: "#1D102C",
                            fontSize: 16,
                            fontFamily: "OpenSans-Regular",
                            color: "#1D102C",
                            flexDirection: "column",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: 30,
                        }}
                    >
                        <text>
                            {
                                "Inspired by the HackSC 2020 pillar of sustainability, three friends and I created Footprint, an Android application that helps visualize and track transportation- and food-based carbon emissions. As a whole, the application allowed users to login with Facebook, then navigate a homepage of daily carbon emissions, displayed as steps along one's journey to carbon neutrality. This homepage was populated with daily entries of transportation and food intake, which were automatically converted to approximate carbon values. To ease the food input process, we also allowed users to scan their food, which was passed through a Google API to identify the item and its approximate quantity."
                            }
                            {
                                "\n\nI worked primarily to design the UI as well as create and integrate the different components and screens. View pictures and more at "
                            }
                            <a
                                href="https://devpost.com/software/footprint-q5epbv"
                                rel="noreferrer"
                                style={{
                                    fontFamily: "OpenSans-Bold",
                                    textDecoration: "none",
                                }}
                            >
                                https://devpost.com/software/footprint-q5epbv
                            </a>
                            .
                        </text>

                        <div style={{ lineHeight: 2 }}>
                            <text style={{ fontFamily: "OpenSans-Bold" }}>
                                {"Role: "}
                            </text>
                            {"Frontend Developer, Designer"}

                            <text style={{ fontFamily: "OpenSans-Bold" }}>
                                {"\nTimeline: "}
                            </text>
                            {"Feb 1-3, 2020"}
                        </div>
                    </div>
                </div>
                <div
                    id="northropcontent"
                    style={{
                        height: "70%",
                        width: "35%",
                        alignSelf: "center",
                        left: 940,
                        position: "absolute",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        opacity: 0,
                    }}
                >
                    <div
                        style={{
                            //backgroundColor: "#1D102C",
                            fontSize: 16,
                            fontFamily: "OpenSans-Regular",
                            color: "#1D102C",
                            flexDirection: "column",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: 30,
                        }}
                    >
                        <text>
                            {
                                "I worked at Sonoma Photonics, a subsidiary of Northrop Grumman, for two summers, assisting in various software, hardware, and general engineering related tasks. During my first summer, I worked to improve operations and efficiency across various projects. Notably, I was able to speed the analysis processes for programs as large as $2.2 million by up to 10000%, while simultaneously reducing error and required labor. During my second summer, I was able to apply my skills outside of pure software engineering, creating a system that allowed for the automatic measurement of parts for technicians. This allowed for faster engineering analysis, quality control, and production. I further assisted the company by automating some HR processes, allowing timecard data to be automatically collected, tabulated, and organized for management."
                            }
                        </text>

                        <div style={{ lineHeight: 2 }}>
                            <text style={{ fontFamily: "OpenSans-Bold" }}>
                                {"Role: "}
                            </text>
                            {"Engineering Intern"}

                            <text style={{ fontFamily: "OpenSans-Bold" }}>
                                {"\nTimeline: "}
                            </text>
                            {"Summer 2019, 2020"}
                        </div>
                    </div>
                </div>
                <div
                    id="bruinbot"
                    style={{
                        width: 440,
                        height: 160,
                        position: "fixed",
                        marginTop: 110,
                        backgroundColor: "#361E51",
                        borderStyle: "solid",
                        borderWidth: 2,
                        borderColor: "#9e9ede",
                        transform: "translateX(-240px)",
                        cursor: "pointer",
                        fontSize: 30,
                        fontFamily: "Optician-Sans",
                        color: "#FFFAFA",
                        lineHeight: "160px",
                    }}
                    onClick={() => this.animateExperienceMenu("#bruinbot")}
                >
                    <div style={{ marginLeft: 30 }}>BruinBot</div>
                </div>
                <div
                    id="nanika"
                    style={{
                        width: 440,
                        height: 160,
                        position: "fixed",
                        marginTop: 235,
                        backgroundColor: "#361E51",
                        borderStyle: "solid",
                        borderWidth: 2,
                        borderColor: "#9e9ede",
                        transform: "translateX(-80px)",
                        cursor: "pointer",
                        fontSize: 30,
                        fontFamily: "Optician-Sans",
                        color: "#FFFAFA",
                        lineHeight: "160px",
                    }}
                    onClick={() => this.animateExperienceMenu("#nanika")}
                >
                    <div style={{ marginLeft: 30 }}>Nanika</div>
                </div>
                <div
                    id="footprint"
                    style={{
                        width: 440,
                        height: 160,
                        marginTop: 360,
                        position: "fixed",
                        backgroundColor: "#361E51",
                        borderStyle: "solid",
                        borderWidth: 2,
                        borderColor: "#9e9ede",
                        transform: "translateX(80px)",
                        cursor: "pointer",
                        fontSize: 30,
                        fontFamily: "Optician-Sans",
                        color: "#FFFAFA",
                        lineHeight: "160px",
                    }}
                    onClick={() => this.animateExperienceMenu("#footprint")}
                >
                    <div style={{ marginLeft: 30 }}>Footprint</div>
                </div>
                <div
                    id="northrop"
                    style={{
                        width: 440,
                        height: 160,
                        position: "fixed",
                        marginTop: 485,
                        backgroundColor: "#361E51",
                        borderStyle: "solid",
                        borderWidth: 2,
                        borderColor: "#9e9ede",
                        transform: "translateX(240px)",
                        cursor: "pointer",
                        fontSize: 30,
                        fontFamily: "Optician-Sans",
                        color: "#FFFAFA",
                        lineHeight: "160px",
                    }}
                    onClick={() => this.animateExperienceMenu("#northrop")}
                >
                    <div style={{ marginLeft: 30 }}>Northrop Grumman</div>
                </div>
                <HamburgerMenu
                    menus={["resume", "aboutme", "contact"]}
                    src="#experiencescreen"
                    titles={["Resume", "About Me", "Contact"]}
                    transitionBetweenMenus={this.props.transitionBetweenMenus}
                    index={0}
                    color={this.state.color}
                />
            </div>
        );
    }
}
