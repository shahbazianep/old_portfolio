import React from "react";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// register lottie and define custom element
defineElement(lottie.loadAnimation);

export type LordIconTrigger =
    | "hover"
    | "click"
    | "loop"
    | "loop-on-hover"
    | "morph"
    | "morph-two-way";

export type LordIconColors = {
    primary?: string;
    secondary?: string;
};

export type LordIconProps = {
    src?: string;
    trigger?: LordIconTrigger;
    colors?: LordIconColors;
    delay?: number;
    size?: number;
    target?: string;
    id?: string;
};

export const LordIcon = ({ colors, src, size, target, id }: LordIconProps) => {
    return (
        <lord-icon
            id={id}
            colors={`primary:${colors?.primary},secondary:${colors?.secondary}`}
            src={src}
            trigger={"hover"}
            target={target}
            style={{
                width: size,
                height: size,
                position: "absolute",
                left: src == "https://cdn.lordicon.com/puvaffet.json" ? 55 : 50,
                top: 205,
            }}
        />
    );
};
