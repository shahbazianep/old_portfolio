import * as React from "react";

import DesktopApp from "./DesktopApp.js";
import MobileApp from "./MobileApp.js";
import "../styles/index.css";

import { BrowserView, MobileView, isMobile } from "react-device-detect";

const IndexPage = () => {
    if (isMobile) return <DesktopApp />;
    else return <MobileApp />;
};

export default IndexPage;
