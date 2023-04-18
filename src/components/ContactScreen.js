import * as React from "react";
import anime from "animejs";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import "../styles/index.css";
import emailjs from "@emailjs/browser";

import { Formik, Field, Form, ErrorMessage } from "formik";
import HamburgerMenu from "./HamburgerMenu";

export default class ContactScreen extends React.Component {
    constructor() {
        super();
        this.state = { messaged: false };
    }

    validateName = (value) => {
        let error;
        if (value === "") {
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

    validateMessage = (value) => {
        let error;
        if (value === "") {
            error = "Required field.";
        }
        return error;
    };

    processForm = (values) => {
        emailjs.send(
            "service_0gx4pxt",
            "template_hjuz97o",
            values,
            "1IBPhkFZfGZlrj93I"
        );
        this.setState({ messaged: true });
        anime({
            targets: "#contactformbutton",
            backgroundColor: [
                { value: "#9e9ede", duration: 300 },
                { value: "#1D102C", duration: 300, delay: 800 },
            ],
            easing: "easeInOutExpo",
        });
        setTimeout(() => this.setState({ messaged: false }), 1000);
    };

    render() {
        return (
            <div
                id="contactscreen"
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
                        width: "40%",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        margin: 100,
                        paddingTop: 100,
                        alignItems: "center",
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            color: "#FFFAFA",
                            fontSize: 36,
                            fontFamily: "Optician-Sans",
                        }}
                    >
                        Contact Me
                    </div>
                    <Formik
                        initialValues={{ name: "", email: "", message: "" }}
                        onSubmit={(values, { resetForm }) => {
                            this.processForm(values);
                            resetForm();
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
                                        color: "#FFFAFA",
                                        alignSelf: "start",
                                    }}
                                >
                                    Name
                                </label>
                                <Field
                                    type="text"
                                    name="name"
                                    className="darkInput"
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
                                        color: "#FFFAFA",
                                        alignSelf: "start",
                                    }}
                                >
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="darkInput"
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
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginTop: 20,
                                }}
                            >
                                <label
                                    htmlFor="message"
                                    style={{
                                        fontFamily: "OpenSans-Regular",
                                        fontSize: 16,
                                        color: "#FFFAFA",
                                        alignSelf: "start",
                                    }}
                                >
                                    Message
                                </label>
                                <Field
                                    type="text"
                                    name="message"
                                    as="textarea"
                                    maxlength={180}
                                    className="darkInput"
                                    validate={this.validateMessage}
                                    style={{
                                        backgroundColor: "transparent",
                                        height: 200,
                                        resize: "none",
                                    }}
                                />
                                <ErrorMessage
                                    name="message"
                                    component="div"
                                    style={{
                                        color: "red",
                                        fontSize: 14,
                                        fontFamily: "OpenSans-Regular",
                                        textAlign: "left",
                                    }}
                                />
                                {}
                                <button
                                    id="contactformbutton"
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
                                    disabled={this.state.messaged}
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div
                    style={{
                        left: "67%",
                        width: 300,
                        height: 300,
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        style={{
                            justifyContent: "space-between",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <svg
                            height={120}
                            width={120}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <circle
                                id="linkcirc1"
                                r={59}
                                stroke="#1D102C"
                                cx={60}
                                cy={60}
                                strokeWidth="2px"
                                fill="#FFFAFA"
                                strokeDashoffset={92.5}
                                strokeDasharray={"185 185"}
                                style={{ cursor: "pointer" }}
                            />
                            <circle
                                id="linkcirc2"
                                r={59}
                                stroke="#1D102C"
                                cx={60}
                                cy={60}
                                strokeWidth="2px"
                                fill="transparent"
                                strokeDashoffset={185 + 92.5}
                                strokeDasharray={"185 185"}
                                style={{ cursor: "pointer" }}
                                onMouseEnter={() => {
                                    anime({
                                        targets: "#linkcirc1",
                                        fill: "#9e9ede",
                                        easing: "easeInOutExpo",
                                        duration: 200,
                                    });
                                }}
                                onMouseLeave={() => {
                                    anime({
                                        targets: "#linkcirc1",
                                        fill: "#FFFAFA",
                                        easing: "easeInOutExpo",
                                        duration: 200,
                                    });
                                }}
                                onClick={() =>
                                    window.open(
                                        "https://www.linkedin.com/in/ethanshahbazian/"
                                    )
                                }
                                tabIndex={-1}
                            />
                            <svg
                                id="linkcircicon"
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="#FFFAFA"
                                x={30}
                                y={30}
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ cursor: "pointer" }}
                                onMouseEnter={() => {
                                    anime({
                                        targets: "#linkcirc1",
                                        fill: "#9e9ede",
                                        easing: "easeInOutExpo",
                                        duration: 200,
                                    });
                                }}
                                onClick={() =>
                                    window.open(
                                        "https://www.linkedin.com/in/ethanshahbazian/"
                                    )
                                }
                                tabIndex={-1}
                            >
                                <path
                                    d="M16.9273 12.5225C16.9273 14.9912 14.926 16.9925 12.4573 16.9925C9.98859 16.9925 7.9873 14.9912 7.9873 12.5225C7.9873 10.0538 9.98859 8.05251 12.4573 8.05251C14.926 8.05251 16.9273 10.0538 16.9273 12.5225Z"
                                    stroke="#1D102C"
                                    stroke-width="2"
                                />
                                <path
                                    d="M51.4998 35.845V51.4875H44.0723V37.7275C44.0723 36.0137 44.0702 33.8 43.3672 32.0188C43.0042 31.0992 42.4373 30.2437 41.5512 29.625C40.6631 29.0049 39.5399 28.6825 38.1698 28.6825C36.8123 28.6825 35.6698 28.9481 34.73 29.469C33.7844 29.9931 33.1038 30.7427 32.6249 31.6129C31.6932 33.306 31.5148 35.4798 31.5148 37.4775V51.485H24.0923V23.1375H31.1373V26.2875V27.2875H32.1373H32.2648H32.8677L33.1492 26.7543C34.2418 24.6841 36.9855 22.3875 41.1848 22.3875C45.7163 22.3875 48.1748 23.8557 49.5795 26.0839C51.051 28.418 51.4998 31.7792 51.4998 35.845ZM8.7373 23.1375H16.1748V51.485H8.7373V23.1375Z"
                                    stroke="#1D102C"
                                    stroke-width="2"
                                />
                            </svg>
                        </svg>
                        <svg
                            height={120}
                            width={120}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <circle
                                id="ghcirc1"
                                r={59}
                                stroke="#1D102C"
                                cx={60}
                                cy={60}
                                strokeWidth="2px"
                                fill="#FFFAFA"
                                strokeDashoffset={92.5}
                                strokeDasharray={"185 185"}
                            />
                            <circle
                                id="ghcirc2"
                                r={59}
                                stroke="#1D102C"
                                cx={60}
                                cy={60}
                                strokeWidth="2px"
                                fill="transparent"
                                strokeDashoffset={185 + 92.5}
                                strokeDasharray={"185 185"}
                                style={{ cursor: "pointer" }}
                                onMouseEnter={() => {
                                    anime({
                                        targets: "#ghcirc1",
                                        fill: "#9e9ede",
                                        easing: "easeInOutExpo",
                                        duration: 200,
                                    });
                                }}
                                onMouseLeave={() => {
                                    anime({
                                        targets: "#ghcirc1",
                                        fill: "#FFFAFA",
                                        easing: "easeInOutExpo",
                                        duration: 200,
                                    });
                                }}
                                onClick={() =>
                                    window.open(
                                        "https://github.com/shahbazianep/"
                                    )
                                }
                            />
                            <svg
                                id="ghcircicon"
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="#FFFAFA"
                                x={30}
                                y={30}
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ cursor: "pointer" }}
                                onMouseEnter={() => {
                                    anime({
                                        targets: "#ghcirc1",
                                        fill: "#9e9ede",
                                        easing: "easeInOutExpo",
                                        duration: 200,
                                    });
                                }}
                                onClick={() =>
                                    window.open(
                                        "https://github.com/shahbazianep/"
                                    )
                                }
                            >
                                <path
                                    d="M14.535 41.633C16.8731 43.6461 19.7982 44.5958 22.6689 45.0836C22.2537 45.814 21.9222 46.6987 21.7241 47.7351C20.9218 48.0296 19.8179 48.3121 18.6811 48.211C17.3593 48.0935 15.9038 47.4546 14.7651 45.418C14.7644 45.4168 14.7637 45.4156 14.7631 45.4144L14.7599 45.4086L14.7397 45.3728C14.7231 45.3436 14.6999 45.3039 14.6702 45.2552C14.611 45.1578 14.5255 45.0235 14.4141 44.8642C14.1921 44.5469 13.8617 44.1225 13.4235 43.6887C12.5555 42.8294 11.1964 41.8688 9.37155 41.7378L9.34626 41.736L9.32091 41.7355L9.3 42.7353C9.32091 41.7355 9.32059 41.7355 9.32026 41.7355L9.31954 41.7355L9.31789 41.7354L9.31376 41.7354L9.30226 41.7352L9.26693 41.7351C9.23819 41.7351 9.19907 41.7355 9.15181 41.7367C9.0582 41.7393 8.92808 41.7455 8.78072 41.7607C8.52624 41.787 8.06674 41.8529 7.67861 42.0726C7.47309 42.1889 7.19663 42.3995 7.03991 42.7593C6.87039 43.1486 6.91266 43.5443 7.04676 43.8692C7.27506 44.4222 7.82583 44.9169 8.51751 45.3999L8.58115 45.4443L8.64112 45.4736C8.64559 45.4761 8.65487 45.4812 8.66859 45.4893C8.70123 45.5086 8.75906 45.5444 8.83741 45.6001C8.99393 45.7112 9.2332 45.9016 9.51785 46.1966C10.0815 46.7809 10.8364 47.7889 11.4763 49.4317C11.4817 49.4486 11.4887 49.4693 11.4971 49.4936C11.5173 49.552 11.5464 49.6312 11.5855 49.7277C11.6636 49.9205 11.7826 50.1841 11.953 50.4897C12.293 51.0993 12.8447 51.8885 13.6957 52.6127C15.275 53.9567 17.759 54.9699 21.5 54.4207V58.4151C21.5 58.6654 21.4245 58.8203 21.3611 58.8845L21.3609 58.8847C21.3375 58.9083 21.2116 59.0359 20.7588 58.9769C9.29609 55.0003 1 43.8729 1 30.7448C1 22.8482 4.06116 15.2798 9.50252 9.70333C12.1966 6.94239 15.3935 4.75364 18.9102 3.26081C22.4269 1.768 26.1951 1 30 1C33.8049 1 37.5731 1.768 41.0898 3.26081C44.6065 4.75364 47.8034 6.94239 50.4975 9.70333C53.1916 12.4643 55.3299 15.7434 56.7893 19.354C58.2486 22.9646 59 26.8353 59 30.7448C59 43.8756 50.7301 54.9754 39.2619 58.9799C39.0296 59.0146 38.8822 58.9982 38.7974 58.9766C38.7112 58.9547 38.669 58.9227 38.6427 58.8961C38.5768 58.8293 38.5 58.6678 38.5 58.4151V49.9911C38.5 47.9275 38.0207 46.2726 37.3036 45.0499C40.1755 44.5653 43.1018 43.6285 45.4426 41.6323C48.3111 39.186 50.14 35.2925 50.14 29.2076C50.14 25.7769 49.058 22.9491 47.1812 20.6598C47.6069 19.2637 48.188 16.185 46.6793 12.3897L46.5067 11.9555L46.0629 11.8093L45.75 12.7591C46.0629 11.8093 46.0619 11.809 46.0609 11.8087L46.0589 11.808L46.0546 11.8066L46.0454 11.8037L46.024 11.7972C46.0085 11.7927 45.9903 11.7877 45.9696 11.7823C45.9281 11.7716 45.8763 11.7598 45.814 11.7482C45.6893 11.7249 45.5235 11.7027 45.3153 11.6925C44.8984 11.6723 44.3176 11.7007 43.5644 11.862C42.1267 12.1698 40.0693 12.9594 37.3189 14.8081C34.9807 14.1881 32.4737 13.8805 30 13.8805C27.5263 13.8805 25.0193 14.1881 22.6811 14.8081C19.9307 12.9594 17.8733 12.1698 16.4356 11.862C15.6824 11.7007 15.1016 11.6723 14.6847 11.6925C14.4765 11.7027 14.3107 11.7249 14.186 11.7482C14.1237 11.7598 14.0719 11.7716 14.0304 11.7823C14.0097 11.7877 13.9915 11.7927 13.976 11.7972L13.9546 11.8037L13.9454 11.8066L13.9411 11.808L13.9391 11.8087C13.9381 11.809 13.9371 11.8093 14.25 12.7591L13.9371 11.8093L13.4933 11.9555L13.3207 12.3897C11.812 16.185 12.3931 19.2637 12.8188 20.6598C10.942 22.9491 9.86 25.7769 9.86 29.2076C9.86 35.2766 11.6808 39.1756 14.535 41.633Z"
                                    stroke="#1D102C"
                                    stroke-width="2"
                                />
                            </svg>
                        </svg>
                    </div>
                    <div
                        style={{
                            justifyContent: "space-between",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <svg
                            height={120}
                            width={120}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <circle
                                id="incirc1"
                                r={59}
                                stroke="#1D102C"
                                cx={60}
                                cy={60}
                                strokeWidth="2px"
                                fill="#FFFAFA"
                                strokeDashoffset={92.5}
                                strokeDasharray={"185 185"}
                            />
                            <circle
                                id="incirc2"
                                r={59}
                                stroke="#1D102C"
                                cx={60}
                                cy={60}
                                strokeWidth="2px"
                                fill="transparent"
                                strokeDashoffset={185 + 92.5}
                                strokeDasharray={"185 185"}
                                style={{ cursor: "pointer" }}
                                onMouseEnter={() => {
                                    anime({
                                        targets: "#incirc1",
                                        fill: "#9e9ede",
                                        easing: "easeInOutExpo",
                                        duration: 200,
                                    });
                                }}
                                onMouseLeave={() => {
                                    anime({
                                        targets: "#incirc1",
                                        fill: "#FFFAFA",
                                        easing: "easeInOutExpo",
                                        duration: 200,
                                    });
                                }}
                                onClick={() =>
                                    window.open(
                                        "https://www.instagram.com/shahbaz.224/"
                                    )
                                }
                            />
                            <svg
                                id="incircicon"
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="#FFFAFA"
                                x={30}
                                y={30}
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ cursor: "pointer" }}
                                onMouseEnter={() => {
                                    anime({
                                        targets: "#incirc1",
                                        fill: "#9e9ede",
                                        easing: "easeInOutExpo",
                                        duration: 200,
                                    });
                                }}
                                onClick={() =>
                                    window.open(
                                        "https://www.instagram.com/shahbaz.224/"
                                    )
                                }
                            >
                                <path
                                    d="M17.4 1H42.6C51.6477 1 59 8.35229 59 17.4V42.6C59 46.9496 57.2721 51.121 54.1966 54.1966C51.121 57.2721 46.9496 59 42.6 59H17.4C8.35229 59 1 51.6477 1 42.6V17.4C1 13.0505 2.72785 8.87905 5.80345 5.80345C8.87905 2.72785 13.0505 1 17.4 1ZM16.8 5C13.6704 5 10.6691 6.24321 8.45614 8.45614C6.24321 10.6691 5 13.6704 5 16.8V43.2C5 49.7223 10.2777 55 16.8 55H43.2C46.3296 55 49.3309 53.7568 51.5439 51.5439C53.7568 49.3309 55 46.3296 55 43.2V16.8C55 10.2777 49.7223 5 43.2 5H16.8ZM45.75 11.5C46.4793 11.5 47.1788 11.7897 47.6945 12.3055C48.2103 12.8212 48.5 13.5207 48.5 14.25C48.5 14.9793 48.2103 15.6788 47.6945 16.1945C47.1788 16.7103 46.4793 17 45.75 17C45.0207 17 44.3212 16.7103 43.8055 16.1945C43.2897 15.6788 43 14.9793 43 14.25C43 13.5207 43.2897 12.8212 43.8055 12.3055C44.3212 11.7897 45.0207 11.5 45.75 11.5ZM30 16C33.713 16 37.274 17.475 39.8995 20.1005C42.525 22.726 44 26.287 44 30C44 33.713 42.525 37.274 39.8995 39.8995C37.274 42.525 33.713 44 30 44C26.287 44 22.726 42.525 20.1005 39.8995C17.475 37.274 16 33.713 16 30C16 26.287 17.475 22.726 20.1005 20.1005C22.726 17.475 26.287 16 30 16ZM30 20C27.3478 20 24.8043 21.0536 22.9289 22.9289C21.0536 24.8043 20 27.3478 20 30C20 32.6522 21.0536 35.1957 22.9289 37.0711C24.8043 38.9464 27.3478 40 30 40C32.6522 40 35.1957 38.9464 37.0711 37.0711C38.9464 35.1957 40 32.6522 40 30C40 27.3478 38.9464 24.8043 37.0711 22.9289C35.1957 21.0536 32.6522 20 30 20Z"
                                    stroke="#1D102C"
                                    stroke-width="2"
                                />
                            </svg>
                        </svg>
                        <svg
                            height={120}
                            width={120}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <circle
                                id="fbcirc1"
                                r={59}
                                stroke="#1D102C"
                                cx={60}
                                cy={60}
                                strokeWidth="2px"
                                fill="#FFFAFA"
                                strokeDashoffset={92.5}
                                strokeDasharray={"185 185"}
                            />
                            <circle
                                id="fbcirc2"
                                r={59}
                                stroke="#1D102C"
                                cx={60}
                                cy={60}
                                strokeWidth="2px"
                                fill="transparent"
                                strokeDashoffset={185 + 92.5}
                                strokeDasharray={"185 185"}
                                style={{ cursor: "pointer" }}
                                onMouseEnter={() => {
                                    anime({
                                        targets: "#fbcirc1",
                                        fill: "#9e9ede",
                                        easing: "easeInOutExpo",
                                        duration: 200,
                                    });
                                }}
                                onMouseLeave={() => {
                                    anime({
                                        targets: "#fbcirc1",
                                        fill: "#FFFAFA",
                                        easing: "easeInOutExpo",
                                        duration: 200,
                                    });
                                }}
                                onClick={() =>
                                    window.open(
                                        "https://www.facebook.com/epshahbazian/"
                                    )
                                }
                            />
                            <svg
                                id="fbcircicon"
                                width="35"
                                height="62"
                                viewBox="0 0 35 62"
                                fill="#FFFAFA"
                                x={40}
                                y={30}
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ cursor: "pointer" }}
                                onMouseEnter={() => {
                                    anime({
                                        targets: "#fbcirc1",
                                        fill: "#9e9ede",
                                        easing: "easeInOutExpo",
                                        duration: 200,
                                    });
                                }}
                                onClick={() =>
                                    window.open(
                                        "https://www.facebook.com/epshahbazian/"
                                    )
                                }
                            >
                                <path
                                    d="M9.9165 25.5833H10.9165V24.5833V16C10.9165 12.1765 12.4354 8.50952 15.139 5.80587C17.8427 3.10222 21.5096 1.58333 25.3332 1.58333H33.7498V12.4167H25.3332C24.8626 12.4167 24.3966 12.5094 23.9619 12.6894C23.5271 12.8695 23.1321 13.1335 22.7994 13.4662C22.4666 13.7989 22.2027 14.194 22.0226 14.6287C21.8425 15.0635 21.7498 15.5294 21.7498 16V24.5833V25.5833H22.7498H33.5857L30.8774 36.4167H22.7498H21.7498V37.4167V60.4167H10.9165V37.4167V36.4167H9.9165H1.9165V25.5833H9.9165Z"
                                    stroke="#1D102C"
                                    stroke-width="2"
                                />
                            </svg>
                        </svg>
                    </div>
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
                            this.props.transitionBackToMenu("contactscreen");
                        }}
                    />
                    Back
                </div>
                <HamburgerMenu
                    menus={["experience", "resume", "aboutme"]}
                    src="#contactscreen"
                    titles={["Experience", "Resume", "About Me"]}
                    transitionBetweenMenus={this.props.transitionBetweenMenus}
                    index={3}
                    color={"#1D102C"}
                />
            </div>
        );
    }
}
