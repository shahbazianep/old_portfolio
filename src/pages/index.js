import * as React from "react";

import DesktopApp from "../components/DesktopApp.js";
import MobileApp from "../components/MobileApp.js";
import "../styles/index.css";

import { BrowserView, MobileView, isMobile } from "react-device-detect";

const IndexPage = () => {
    // const [mob, setMob] = React.useState(false);
    // React.useEffect(() => {
    //     if (isMobile) {
    //         setMob(true);
    //     }
    // }, []);

    return <DesktopApp />;
};

export default IndexPage;
