import * as React from "react";
import { SocialIcon } from "react-social-icons";

var socials = [
    "https://www.linkedin.com/in/ethanshahbazian/",
    "https://www.instagram.com/shahbaz.224/",
    "https://github.com/shahbazianep/",
];

export const ExperienceMenuDetails = () => {
    return (
        <div
            id="newsubtext1"
            style={{
                marginLeft: 40,
                marginRight: 40,
                marginTop: -20,
                fontFamily: "OpenSans-Regular",
                color: "#FFFAFA",
                fontSize: 16,
                opacity: 0,
            }}
        >
            {"Learn about my projects, clubs, and work experience, including:"}
            <div id="topbullet1" style={{ marginTop: 10 }}>
                <text style={{ color: "#9e9ede" }}>{" \n    \u2023"}</text>
                <text>{"   Northrop Grumman"}</text>
            </div>

            <div id="midbullet1" style={{ marginTop: 0 }}>
                <text style={{ color: "#9e9ede" }}>{" \n    \u2023"}</text>
                <text>{"   Bruinbot"}</text>
            </div>
            <div id="botbullet1" style={{ marginTop: 0 }}>
                <text style={{ color: "#9e9ede" }}>{" \n    \u2023"}</text>
                <text>{"   Nanika"}</text>
            </div>
        </div>
    );
};

export const ResumeMenuDetails = () => {
    return (
        <div
            id="newsubtext2"
            style={{
                marginLeft: 40,
                marginRight: 40,
                marginTop: -20,
                fontFamily: "OpenSans-Regular",
                color: "#FFFAFA",
                fontSize: 16,
                opacity: 0,
            }}
        >
            {
                "Request a copy of my resume and access more details on my time at UCLA and my plans moving forward."
            }
        </div>
    );
};

export const AboutMenuDetails = () => {
    return (
        <div
            id="newsubtext3"
            style={{
                marginLeft: 40,
                marginRight: 40,
                marginTop: -20,
                fontFamily: "OpenSans-Regular",
                color: "#FFFAFA",
                fontSize: 16,
                opacity: 0,
            }}
        >
            <text>
                {"Explore my other hobbies and interests. With links to my: "}
            </text>
            <div id="topbullet3" style={{ marginTop: 10 }}>
                <text style={{ color: "#9e9ede" }}>{" \n    \u2023"}</text>
                <text>{"   Spotify"}</text>
            </div>

            <div id="midbullet3" style={{ marginTop: 0 }}>
                <text style={{ color: "#9e9ede" }}>{" \n    \u2023"}</text>
                <text>{"   op.gg"}</text>
            </div>
        </div>
    );
};

export const ContactMenuDetails = () => {
    return (
        <div
            id="newsubtext4"
            style={{
                marginLeft: 40,
                marginRight: 40,
                marginTop: -20,
                fontFamily: "OpenSans-Regular",
                color: "#FFFAFA",
                fontSize: 16,
                opacity: 0,
            }}
        >
            {
                "View my social media and other online profiles, such as LinkedIn, Github, Instagram, and Facebook. Alternatively, contact me directly via a form."
            }
        </div>
    );
};
