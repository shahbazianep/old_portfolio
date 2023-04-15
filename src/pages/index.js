import * as React from "react";

import DesktopApp from "../components/DesktopApp.js";
import MobileApp from "../components/MobileApp.js";
import "../styles/index.css";

import { BrowserView, MobileView, isMobile } from "react-device-detect";

const IndexPage = () => {
    return isMobile ? <MobileApp /> : <DesktopApp />;
};

export default IndexPage;
