import * as React from "react";
import anime from "animejs";
import { Squash as Hamburger } from "hamburger-react";

export default function HamburgerMenu(props) {
    const [open, setOpen] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    function showSubMenu() {
        anime({
            targets: [
                `#${props.menus[2]}hamburgermenu${props.index}`,
                `#${props.menus[1]}hamburgermenu${props.index}`,
                `#${props.menus[0]}hamburgermenu${props.index}`,
            ],
            easing: "easeInOutExpo",
            delay: function (el, i) {
                return i * 100;
            },
            opacity: {
                value: 1,
                delay: function (el, i) {
                    return i * 300;
                },
            },
            translateX: function (el, i, l) {
                return [i * 130 + 100, 0];
            },
        });
        setVisible(true);
    }

    function hideSubMenu(extra) {
        anime({
            targets: [
                `#${props.menus[0]}hamburgermenu${props.index}`,
                `#${props.menus[1]}hamburgermenu${props.index}`,
                `#${props.menus[2]}hamburgermenu${props.index}`,
            ],
            easing: "easeInOutExpo",
            delay: function (el, i, l) {
                return (l - i) * 100 + extra;
            },
            opacity: {
                value: 0,
                delay: function (el, i, l) {
                    return (l - i) * 100;
                },
            },
            translateX: function (el, i, l) {
                return [0, i * 130 + 100];
            },
        });
        setVisible(false);
    }

    return (
        <div
            style={{
                position: "absolute",
                top: 20,
                right: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "right",
                cursor: "pointer",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    color: props.color,
                    fontFamily: "Optician-Sans",
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "center",
                    cursor: "pointer",
                    marginRight: 50,
                }}
            >
                {props.menus.map((menuName, i) => (
                    <div
                        id={`${menuName}hamburgermenu${props.index}`}
                        style={{
                            borderWidth: 2,
                            borderStyle: "solid",
                            borderColor: props.color,
                            marginRight: -2,
                            paddingBlock: 10,
                            width: 130,
                            opacity: 0,
                        }}
                        onClick={() => {
                            if (visible) {
                                props.transitionBetweenMenus(
                                    `${props.src}`,
                                    `#${props.menus[i]}screen`
                                );
                            }
                            hideSubMenu(400);
                            setOpen(false);
                        }}
                    >
                        {props.titles[i]}
                    </div>
                ))}
            </div>
            <Hamburger
                color={props.color}
                size={30}
                distance={"md"}
                onToggle={(toggled) => {
                    if (toggled) {
                        showSubMenu();
                    } else {
                        hideSubMenu(0);
                    }
                }}
                toggled={open}
                toggle={setOpen}
            />
        </div>
    );
}
