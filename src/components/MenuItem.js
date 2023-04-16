import * as React from "react";
import anime from "animejs";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { LordIcon } from "../utils/lord-icon";
// import loadable from "@loadable/component";
// const LordIcon = loadable(() => import("../utils/lord-icon"), { ssr: false });

export default class MenuItem extends React.Component {
    transitionToDetails = () => {
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
            targets: this.props.subscreen,
            translateY: "-100%",
            delay: 700,
            duration: 100,
            easing: "easeOutExpo",
        });
        anime({
            targets: `#deco${this.props.menuIndex}`,
            scaleX: 4.56,
            duration: 400,
            opacity: [
                { value: [0.4, 0.8], delay: 50, duration: 200 },
                { value: [0.8, 0.4], delay: 250, duration: 200 },
            ],
            easing: "easeInExpo",
        });
        if (this.props.subscreen === "#contactscreen") {
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

    render() {
        return (
            <div
                id={`bg${this.props.menuIndex}`}
                className="background"
                style={{
                    width: "25%",
                    left: `${25 * (this.props.menuIndex - 1)}%`,
                    height: "100%",
                    position: "absolute",
                    backgroundColor: "#361e51",
                    flexDirection: "column",
                    boxShadow:
                        this.props.menuIndex > 1
                            ? "inset 1px 0px 0px 0px #9e9ede"
                            : "inset 0px 0px 0px 0px #9e9ede",
                }}
                onMouseEnter={() =>
                    this.props.animateMenuItem(this.props.menuIndex)
                }
                onMouseLeave={() =>
                    this.props.deAnimateMenuItem(this.props.menuIndex)
                }
            >
                <div
                    id={`num${this.props.menuIndex}`}
                    style={{
                        marginTop: 30,
                        marginLeft: 40,
                        fontFamily: "ReemKufi-Regular",
                        color: "#FFFAFA",
                        fontSize: 20,
                        letterSpacing: 6,
                    }}
                >
                    0{this.props.menuIndex}
                </div>
                <div
                    id={`line${this.props.menuIndex}`}
                    style={{
                        width: 20,
                        height: 5,
                        color: "#FFFAFA",
                        backgroundColor: "#FFFAFA",
                        marginTop: 30,
                        marginLeft: 40,
                        transformOrigin: "left",
                    }}
                />
                <svg
                    height={120}
                    width={120}
                    style={{ marginLeft: 40, marginTop: 100 }}
                >
                    <circle
                        id={`iconborder${this.props.menuIndex}`}
                        r={59}
                        stroke="#FFFAFA"
                        cx={60}
                        cy={60}
                        strokeWidth="2px"
                        fill="transparent"
                        opacity={"50%"}
                        strokeDashoffset={0}
                        strokeDasharray={0}
                    />
                    <circle
                        id={`icon${this.props.menuIndex}`}
                        r={59}
                        stroke="#9e9ede"
                        cx={60}
                        cy={60}
                        strokeWidth="2px"
                        fill="transparent"
                        strokeDashoffset={-140}
                        strokeDasharray={"0 500"}
                    />
                </svg>
                <LordIcon
                    id={`image${this.props.menuIndex}`}
                    src={this.props.iconSrc}
                    trigger="hover"
                    colors={{ primary: "#9e9ede", secondary: "#FFFAFA" }}
                    size={100}
                    target={`#bg${this.props.menuIndex}`}
                />
                <div
                    id={`title${this.props.menuIndex}`}
                    style={{
                        marginTop: 80,
                        marginLeft: 40,
                        fontFamily: "OpenSans-Bold",
                        color: "#FFFAFA",
                        fontSize: 30,
                        transformOrigin: "bottom",
                    }}
                >
                    {this.props.title}
                </div>
                <div
                    id={`subtext${this.props.menuIndex}`}
                    style={{
                        marginTop: 30,
                        marginLeft: 40,
                        fontFamily: "Optician-Sans",
                        color: "#9e9ede",
                        fontSize: 16,
                        transformOrigin: "top",
                    }}
                >
                    Show More
                </div>
                {this.props.details}
                <div
                    style={{
                        position: "absolute",
                        top: 640,
                        left: "50%",
                        marginLeft: -145,
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
                        }}
                    >
                        <div
                            id={`deco${this.props.menuIndex}`}
                            style={{
                                width: 45,
                                height: 44,
                                position: "absolute",
                                right: 3,
                                top: 3,
                                backgroundColor: "#9e9ede",
                                transformOrigin: "right",
                                opacity: 0,
                            }}
                            onClick={() => this.transitionToDetails()}
                        ></div>
                        <KeyboardArrowRightIcon
                            id={`arrow${this.props.menuIndex}`}
                            sx={{
                                color: "#FFFAFA",
                                fontSize: 30,
                            }}
                            onClick={() => this.transitionToDetails()}
                        />
                        <div
                            id={`buttontext${this.props.menuIndex}`}
                            style={{
                                color: "#FFFAFA",
                                textAlign: "center",
                                lineHeight: "50px",
                                cursor: "default",
                                width: 165,
                                left: 42,
                                height: "100%",
                                fontFamily: "Optician-Sans",
                                fontSize: 16,
                                position: "absolute",
                                opacity: 0,
                            }}
                            onClick={() => this.transitionToDetails()}
                        >
                            Explore
                        </div>
                    </div>

                    <svg height={50} width={210}>
                        <rect
                            id={`rightsvg${this.props.menuIndex}`}
                            stroke="#9e9ede"
                            strokeDasharray={252}
                            strokeDashoffset={-103}
                            opacity={0}
                            width={206}
                            height={46}
                            x={2}
                            y={2}
                            fill="none"
                            strokeWidth={"2px"}
                        />
                        <rect
                            id={`leftsvg${this.props.menuIndex}`}
                            stroke="#9e9ede"
                            strokeDasharray={252}
                            strokeDashoffset={149}
                            opacity={0}
                            width={206}
                            height={46}
                            x={2}
                            y={2}
                            fill="none"
                            strokeWidth={"2px"}
                        />
                    </svg>
                </div>
            </div>
        );
    }
}
