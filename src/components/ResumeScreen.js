import * as React from "react";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import "../styles/index.css";
import emailjs from "@emailjs/browser";
import anime from "animejs";
import HamburgerMenu from "./HamburgerMenu";

import { Formik, Field, Form, ErrorMessage } from "formik";

export default class ResumeScreen extends React.Component {
    constructor() {
        super();
        this.state = { requested: false };
    }

    validateName = (value) => {
        let error;
        if (value == "") {
            error = "Required field.";
        } else if (!value.includes(" ")) {
            error = "Please provide your first and last name.";
        }
        return error;
    };

    validateEmail = (value) => {
        let error;
        let testReg = new RegExp(
            "^[w!#$%&'*+/=?`{|}~^-]+(?:.[w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+.)+[A-Z]{2,6}$"
        );
        if (!value) {
            error = "Required field.";
        } else if (testReg.test(value)) {
            error = "Invalid email address.";
        }
        return error;
    };

    processForm = (values) => {
        emailjs.send(
            "service_0gx4pxt",
            "template_1hisfpp",
            values,
            "1IBPhkFZfGZlrj93I"
        );
        this.setState({ requested: true });
        anime({
            targets: "#resumereqbutton",
            backgroundColor: "#9e9ede",
            easing: "easeInOutExpo",
        });
    };

    render() {
        return (
            <div
                id="resumescreen"
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    display: "flex",
                    top: "100%",
                    backgroundColor: "#1D102C",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        backgroundColor: "#FFFAFA",
                        width: "100%",
                        height: "100%",
                        left: "55%",
                        position: "absolute",
                        flexDirection: "column",
                        overflowY: "hidden",
                        transform: "skewX(-10deg)",
                    }}
                />
                <div
                    style={{
                        left: "10%",
                        width: 600,
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "Optician-Sans",
                        color: "#FFFAFA",
                        fontSize: 32,
                        textAlign: "center",
                        alignItems: "center",
                    }}
                >
                    My time at UCLA
                    <div
                        style={{
                            fontFamily: "OpenSans-Regular",
                            fontSize: 16,
                            alignSelf: "start",
                            marginTop: 40,
                            textAlign: "left",
                        }}
                    >
                        Coursework:
                        <ul>
                            <li>
                                Math (Multivariable calculus, Linear algebra,
                                Differential equations)
                            </li>
                            <li>Physics (Mechanics, E+M, Optics)</li>
                            <li>Computer algorithms and complexity</li>
                            <li>Logic design</li>
                            <li>Digital/electronic circuits</li>
                            <li>Computer networks</li>
                            <li>Introduction to AI</li>
                            <li>
                                Systems and signals/Digital signal processing
                            </li>
                            <li>Communication systems</li>
                            <li>Feedback control</li>
                            <li>Introduction to data science</li>
                            <li>Computer systems architecture</li>
                            <li>
                                Business and entrepreneurship, finance and
                                marketing, law
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    style={{
                        left: "67%",
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "Optician-Sans",
                        color: "#1D102C",
                        fontSize: 32,
                        textAlign: "center",
                        alignItems: "center",
                    }}
                >
                    {"Request a copy\nof my resume"}
                    <Formik
                        initialValues={{ name: "", email: "" }}
                        onSubmit={(values) => {
                            this.processForm(values);
                        }}
                    >
                        <Form>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginTop: 20,
                                }}
                            >
                                <label
                                    htmlFor="name"
                                    style={{
                                        fontFamily: "OpenSans-Regular",
                                        fontSize: 16,
                                        color: "#1D102C",
                                        alignSelf: "start",
                                    }}
                                >
                                    Name
                                </label>
                                <Field
                                    tabIndex={-1}
                                    type="text"
                                    name="name"
                                    className="lightInput"
                                    validate={this.validateName}
                                    style={{ backgroundColor: "transparent" }} //unsure if needed, added to stop flashing during initial page load state
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    style={{
                                        color: "red",
                                        fontSize: 14,
                                        fontFamily: "OpenSans-Regular",
                                        textAlign: "left",
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginTop: 20,
                                }}
                            >
                                <label
                                    htmlFor="email"
                                    style={{
                                        fontFamily: "OpenSans-Regular",
                                        fontSize: 16,
                                        color: "#1D102C",
                                        alignSelf: "start",
                                    }}
                                >
                                    Email
                                </label>
                                <Field
                                    tabIndex={-1}
                                    type="email"
                                    name="email"
                                    className="lightInput"
                                    validate={this.validateEmail}
                                    style={{ backgroundColor: "transparent" }} //unsure if needed, added to stop flashing during initial page load state
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    style={{
                                        color: "red",
                                        fontSize: 14,
                                        fontFamily: "OpenSans-Regular",
                                        textAlign: "left",
                                    }}
                                />
                                <button
                                    id="resumereqbutton"
                                    style={{
                                        fontFamily: "OpenSans-Regular",
                                        fontSize: 16,
                                        backgroundColor: "#1D102C",
                                        color: "#FFFAFA",
                                        width: 150,
                                        height: 45,
                                        marginTop: 40,
                                        alignSelf: "center",
                                        borderWidth: 2,
                                        borderStyle: "solid",
                                        borderColor: "#9e9ede",
                                        cursor: "pointer",
                                    }}
                                    type="submit"
                                    disabled={this.state.requested}
                                >
                                    {this.state.requested
                                        ? "Requested"
                                        : "Request"}
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        fontSize: 24,
                        color: "#FFFAFA",
                        fontFamily: "Optician-Sans",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <ArrowLeft
                        sx={{
                            color: "#FFFAFA",
                            height: 48,
                            width: 48,
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            this.props.transitionBackToMenu("resumescreen");
                        }}
                    />
                    Back
                </div>
                <HamburgerMenu
                    menus={["experience", "aboutme", "contact"]}
                    src="#resumescreen"
                    titles={["Experience", "About Me", "Contact"]}
                    transitionBetweenMenus={this.props.transitionBetweenMenus}
                    index={1}
                    color={"#1D102C"}
                />
            </div>
        );
    }
}
