import * as React from "react";

import DesktopApp from "../components/DesktopApp.js";
import MobileApp from "../components/MobileApp.js";
import "../styles/index.css";

import { BrowserView, MobileView } from "react-device-detect";

const IndexPage = () => {
    return (
        <div style={{ height: "100%" }}>
            <BrowserView>
                <DesktopApp />
            </BrowserView>
            <MobileView style={{ height: "100%" }}>
                <MobileApp />
            </MobileView>
        </div>
    );
};

export default IndexPage;
