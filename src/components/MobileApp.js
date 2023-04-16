import * as React from "react";

export default class DesktopApp extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToRef = React.createRef();
    }

    render() {
        return (
            <span
                style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    fontSize: 24,
                    fontFamily: "OpenSans-Regular",
                    backgroundColor: "#FFFAFA",
                    color: "#1D102C",
                    height: "100%",
                    width: "100%",
                }}
            >
                Hello! This website is not yet designed for mobile use. Please
                use a desktop device instead.
            </span>
        );
    }
}
