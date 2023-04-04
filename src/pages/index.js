import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import App from "./App.js";
import "../styles/index.css";

// markup
const IndexPage = () => {
    return (
        <ParallaxProvider>
            <App />
        </ParallaxProvider>
    );
};

export default IndexPage;
