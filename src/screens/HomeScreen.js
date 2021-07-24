/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import anime from 'animejs';
import '../App.css';

import Anime from 'react-anime';
import nameSVG from '../assets/nameSVG.svg';

import MenuItem from '../components/MenuItem';
import AboutMePage from '../components/AboutMePage';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lightMode: false,
            bgColor: '#2B2643',
            mainColor: '#EE6055',
            accentColor: '#8884FF',
            highlightColor: '#D8FFDD',
            currentMenuItem: 1,
            disabledForTimeLeft: false,
            disabledForTimeRight: false,
        };
        this.colors = {
            lightBgColor: '#F4F4F9',
            lightMainColor: '#2F4550',
            lightAccentColor: '#586F7C',
            lightHighlightColor: '#B8DBD9',
            darkBgColor: '#2B2643',
            darkMainColor: '#FF495C',
            darkAccentColor: '#8884FF',
            darkHighlightColor: '#D8FFDD',
        };
    }

    componentDidMount() {
        anime({
            targets: '#svg1 path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInQuad',
            duration: 6000,
        });
        anime({
            targets: '#svg2 path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInQuad',
            delay: 1800,
            duration: 4000,
        });
        anime({
            targets: '#sunButton',
            opacity: [0, 1],
            easing: 'easeInQuad',
            delay: 2800,
            duration: 300,
        });
        anime({
            targets: '#exploreButton',
            opacity: [0, 1],
            easing: 'easeInQuad',
            delay: 2800,
            duration: 300,
        });
    }

    scrollMenu = (direction) => {
        const { currentMenuItem } = this.state;
        this.setState({
            disabledForTimeLeft: true,
            disabledForTimeRight: true,
        });
        anime({
            targets: [
                '#MenuItem01',
                '#MenuItem02',
                '#MenuItem03',
                '#MenuItem04',
                '#MenuItem05',
            ],
            translateX: direction === 'right' ? '+=20vw' : '-=20vw',
            duration: 400,
            easing: 'easeInOutExpo',
        });
        setTimeout(
            () =>
                this.setState({
                    disabledForTimeLeft: false,
                    disabledForTimeRight: false,
                }),
            400,
        );
        if (currentMenuItem !== 5 && direction === 'left') {
            this.setState({ currentMenuItem: currentMenuItem + 1 });
        } else if (currentMenuItem !== 1 && direction === 'right') {
            this.setState({ currentMenuItem: currentMenuItem - 1 });
        }
    };

    showMenu = () => {
        const { lightMode } = this.state;
        anime({
            targets: '#movingPageBottom #bottomAnimationCover1',
            duration: 3000,
            translateY: ['-210vh', 0],
            scaleY: [1, 0.8],
            easing: 'easeInOutExpo',
        });
        anime({
            targets: '#movingPageBottom #bottomAnimationCover1',
            duration: 3000,
            delay: 220,
            translateY: ['-220vh', 0],
            easing: 'easeInOutExpo',
            scaleY: [1, 0.8],
        });
        anime({
            targets: '#menu',
            duration: 100,
            translateY: ['-100vh', 0],
            delay: 1700,
            easing: 'easeInOutExpo',
        });
    };

    changeColors = () => {
        const { lightMode, accentColor } = this.state;
        const {
            lightBgColor,
            lightMainColor,
            lightAccentColor,
            lightHighlightColor,
            darkBgColor,
            darkMainColor,
            darkAccentColor,
            darkHighlightColor,
        } = this.colors;
        if (lightMode) {
            anime({
                targets: '#sunButton',
                color: darkAccentColor,
                easing: 'easeInQuad',
                delay: 50,
                duration: 400,
            });
            anime({
                targets: '#homePage',
                background: darkBgColor,
                easing: 'easeInQuad',
                delay: 50,
                duration: 400,
            });
            this.setState({ lightMode: false });
        } else {
            anime({
                targets: ['#sunButton', '#svg2 path'],
                color: lightAccentColor,
                stroke: lightAccentColor,
                easing: 'easeOutQuad',
                delay: 50,
                duration: 400,
            });
            anime({
                targets: ['#sunButton', '#svg2 path'],
                color: lightAccentColor,
                stroke: lightAccentColor,
                easing: 'easeOutQuad',
                delay: 50,
                duration: 400,
            });
            anime({
                targets: '#homePage',
                background: lightBgColor,
                easing: 'easeOutQuad',
                delay: 50,
                duration: 400,
            });
            this.setState({ lightMode: true });
        }
    };

    returnHome() {
        this.showMenu();
    }

    animateButton() {
        this.setState({ lightMode: true });
    }

    render() {
        const {
            mainColor,
            accentColor,
            highlightColor,
            lightMode,
            bgColor,
            currentMenuItem,
            disabledForTimeLeft,
            disabledForTimeRight,
        } = this.state;

        return (
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: bgColor,
                }}
            >
                <div
                    id="menu"
                    style={{
                        background: 'linear-gradient(90deg, #1D1A2C, #2B2643)',
                        width: '120vw',
                        height: '100vh',
                        marginTop: '100vh',
                        display: 'flex',
                        overflow: 'auto',
                        position: 'fixed',
                        flexDirection: 'row',
                    }}
                >
                    <div
                        style={{
                            flexDirection: 'column',
                            width: '15vw',
                            alignItems: 'center',
                            background:
                                'linear-gradient(90deg, #413964, #564D85)',
                            display: 'flex',
                        }}
                    >
                        <Button
                            id="homeButton"
                            circular
                            icon="home"
                            size="big"
                            onClick={() => this.returnHome()}
                            style={{
                                height: 50,
                                width: 50,
                                marginTop: '3vh',
                                marginLeft: '3vw',
                                color: accentColor,
                                backgroundColor: 'transparent',
                            }}
                        />
                        <div
                            style={{
                                flexDirection: 'row',
                                width: '15vw',
                                alignContent: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                            }}
                        >
                            <Button
                                id="leftButton"
                                circular
                                color="black"
                                icon="chevron left"
                                size="big"
                                disabled={
                                    currentMenuItem === 1 || disabledForTimeLeft
                                }
                                onClick={() => this.scrollMenu('right')}
                                style={{
                                    height: 50,
                                    width: 100,
                                    marginTop: '40vh',
                                    color: '#d8ffdd',
                                    backgroundColor: 'transparent',
                                }}
                            />
                            <Button
                                id="rightButton"
                                circular
                                icon="chevron right"
                                size="big"
                                color="black"
                                disabled={
                                    currentMenuItem === 5 ||
                                    disabledForTimeRight
                                }
                                onClick={() => this.scrollMenu('left')}
                                style={{
                                    height: 50,
                                    width: 100,
                                    marginTop: '40vh',
                                    color: '#d8ffdd',
                                    backgroundColor: 'transparent',
                                }}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            height: '100vh',
                            width: '100vw',
                            overflow: 'hidden',
                            flexDirection: 'row',
                            display: 'flex',
                        }}
                    >
                        <MenuItem
                            id="MenuItem01"
                            menuItemNumber={1}
                            menuItemTitle="MenuItemTitle1"
                            menuItemTitleText="ABOUT ME"
                            menuItemDescription="MenuItemDescription1"
                            menuItemDescriptionText="Learn more about my accomplishments, interests, and
                    experience."
                        />
                        <MenuItem
                            id="MenuItem02"
                            menuItemNumber={2}
                            menuItemTitle="MenuItemTitle2"
                            menuItemTitleText="RESUME"
                            menuItemDescription="MenuItemDescription2"
                            menuItemDescriptionText="Learn more about my accomplishments, interests, and
                    experience."
                        />
                        <MenuItem
                            id="MenuItem03"
                            menuItemNumber={3}
                            menuItemTitle="MenuItemTitle3"
                            menuItemTitleText="EXPERIENCE"
                            menuItemDescription="MenuItemDescription3"
                            menuItemDescriptionText="Learn more about my accomplishments, interests, and
                    experience."
                        />
                        <MenuItem
                            id="MenuItem04"
                            menuItemNumber={4}
                            menuItemTitle="MenuItemTitle4"
                            menuItemTitleText="PROJECTS"
                            menuItemDescription="MenuItemDescription4"
                            menuItemDescriptionText="Learn more about my accomplishments, interests, and
                    experience."
                        />
                        <MenuItem
                            id="MenuItem05"
                            menuItemNumber={5}
                            menuItemTitle="MenuItemTitle5"
                            menuItemTitleText="MEDIUM"
                            menuItemDescription="MenuItemDescription5"
                            menuItemDescriptionText="Delve further into my hobbies, opinions, interests, and aspirations in my Medium posts."
                        />
                    </div>
                </div>
                <div
                    id="homePage"
                    style={{
                        display: 'flex',
                        height: '100vh',
                        width: '100vw',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: bgColor,
                    }}
                >
                    <div>
                        <Button
                            id="sunButton"
                            circular
                            icon="sun"
                            size="big"
                            onClick={() => this.changeColors()}
                            style={{
                                color: accentColor,
                                backgroundColor: 'transparent',
                                width: 50,
                                height: 50,
                                marginLeft: '-47vw',
                                marginTop: '3vh',
                                position: 'relative',
                                zIndex: 3,
                            }}
                        />
                    </div>

                    <div
                        style={{
                            backgroundColor: 'transparent',
                            marginTop: '25vh',
                        }}
                    >
                        <svg
                            id="svg1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="854.451"
                            height="68.05"
                            viewBox="0 0 854.451 68.05"
                        >
                            <path
                                d="M44.648,0H8.833V-64.248H44.648v6.636H16.3v20.7H42.935v6.592H16.3V-6.68H44.648ZM78.662,0H71.191V-57.612H50.845v-6.636H99.009v6.636H78.662Zm78.794,0h-7.471V-30.234H116.147V0h-7.471V-64.248h7.471v27.334h33.838V-64.248h7.471Zm58.008,0-8-20.435H181.714L173.8,0h-7.559l25.4-64.512h6.284L223.2,0ZM205.137-27.158l-7.471-19.907q-1.45-3.779-2.988-9.272a83.265,83.265,0,0,1-2.769,9.272l-7.559,19.907ZM282.217,0h-8.525L238.579-53.921h-.352q.7,9.492.7,17.4V0h-6.9V-64.248h8.438l35.024,53.7h.352q-.088-1.187-.4-7.625t-.22-9.207v-36.87h6.987Zm77.3-17.095q0,8.481-6.152,13.228T336.665.879q-11.426,0-17.578-2.944V-9.272A46.279,46.279,0,0,0,327.7-6.636a45.317,45.317,0,0,0,9.229.967q7.471,0,11.25-2.834a9.3,9.3,0,0,0,3.779-7.888,10.125,10.125,0,0,0-1.34-5.471,12.452,12.452,0,0,0-4.482-3.933,62.708,62.708,0,0,0-9.558-4.087q-8.965-3.208-12.81-7.6t-3.845-11.47A14.265,14.265,0,0,1,325.5-60.776q5.581-4.395,14.766-4.395a43.516,43.516,0,0,1,17.622,3.516l-2.329,6.5a39.825,39.825,0,0,0-15.469-3.34q-5.933,0-9.272,2.549a8.4,8.4,0,0,0-3.34,7.075,10.843,10.843,0,0,0,1.23,5.471,11.585,11.585,0,0,0,4.153,3.911,51.6,51.6,0,0,0,8.943,3.933q10.107,3.6,13.909,7.734A15.212,15.212,0,0,1,359.517-17.095ZM421.436,0h-7.471V-30.234H380.127V0h-7.471V-64.248h7.471v27.334h33.838V-64.248h7.471Zm58.008,0-8-20.435H445.693L437.783,0h-7.559l25.4-64.512h6.284L487.178,0ZM469.116-27.158l-7.471-19.907q-1.45-3.779-2.988-9.272a83.265,83.265,0,0,1-2.769,9.272L448.33-27.158ZM544.79,0h-7.471V-30.234H503.481V0h-7.471V-64.248h7.471v27.334h33.838V-64.248h7.471Zm17.622-64.248h18.149q12.788,0,18.5,3.823t5.713,12.085a13.964,13.964,0,0,1-3.186,9.426Q598.4-35.2,592.295-34.1v.439q14.634,2.5,14.634,15.381,0,8.613-5.823,13.447T584.824,0H562.412Zm7.471,27.51h12.3q7.91,0,11.382-2.483t3.472-8.372q0-5.405-3.867-7.8t-12.3-2.4H569.883Zm0,6.328V-6.372h13.4q7.778,0,11.711-3.01t3.933-9.426q0-5.977-4.021-8.789T582.671-30.41ZM661.113,0l-8-20.435H627.363L619.453,0h-7.559l25.4-64.512h6.284L668.848,0ZM650.786-27.158l-7.471-19.907q-1.45-3.779-2.988-9.272a83.265,83.265,0,0,1-2.769,9.272L630-27.158ZM716.616,0H672.451V-5.845l34.1-51.68H673.506v-6.724h42.144V-58.4l-34.1,51.636h35.068Zm12.437,0V-64.248h7.471V0Zm65.479,0-8-20.435H760.781L752.871,0h-7.559l25.4-64.512H777L802.266,0ZM784.2-27.158l-7.471-19.907q-1.45-3.779-2.988-9.272a83.265,83.265,0,0,1-2.769,9.272l-7.559,19.907ZM861.284,0h-8.525L817.646-53.921h-.352q.7,9.492.7,17.4V0h-6.9V-64.248h8.438l35.024,53.7h.352q-.088-1.187-.4-7.625t-.22-9.207v-36.87h6.987Z"
                                transform="translate(-7.833 66.171)"
                                fill="none"
                                stroke={mainColor}
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                    <div
                        style={{
                            backgroundColor: 'transparent',
                            marginTop: 30,
                        }}
                    >
                        <svg
                            id="svg2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="501.844"
                            height="45.938"
                            viewBox="0 0 501.844 45.938"
                        >
                            <path
                                d="M13.828.586A11.712,11.712,0,0,1,5.016-2.848Q1.688-6.281,1.688-12.422q0-6.094,3.223-9.551a10.985,10.985,0,0,1,8.426-3.457,11.073,11.073,0,0,1,8.5,3.4q3.176,3.4,3.176,9.609v1.055H6.281q.281,4.313,2.379,6.4a7.043,7.043,0,0,0,5.168,2.086,7.638,7.638,0,0,0,4.184-1.184A3.982,3.982,0,0,0,19.969-7.43h4.57a8.246,8.246,0,0,1-3.48,5.93A12.247,12.247,0,0,1,13.828.586Zm6.516-15.422A9.014,9.014,0,0,0,17.93-20.2a6.419,6.419,0,0,0-4.594-1.781,6.436,6.436,0,0,0-4.547,1.77,8.805,8.805,0,0,0-2.414,5.379ZM34.383-21.7a9.775,9.775,0,0,1,7.43-3.727q8.414,0,8.414,9.164V0H45.8V-16.078a6.962,6.962,0,0,0-1.09-4.383A4.357,4.357,0,0,0,41.133-21.8q-3.375,0-6.75,3.984V0h-4.43V-24.867h4.43ZM76.8-1.922q0,12-10.828,12a12.027,12.027,0,0,1-7.395-2.039,6.514,6.514,0,0,1-2.707-5.484h4.57q0,4.078,5.484,4.078a6.44,6.44,0,0,0,4.781-1.7Q72.4,3.234,72.4-1.734V-2.977A8.94,8.94,0,0,1,65.3.586,8.972,8.972,0,0,1,57.75-2.883q-2.672-3.469-2.672-9.352,0-6.094,2.988-9.645a9.411,9.411,0,0,1,7.512-3.551,9.888,9.888,0,0,1,6.82,2.484v-1.922H76.8ZM72.4-7.148V-18.961a8.778,8.778,0,0,0-6.539-3.023,5.264,5.264,0,0,0-4.535,2.449q-1.7,2.449-1.7,7.3,0,4.594,1.605,6.973a5.074,5.074,0,0,0,4.441,2.379Q69.375-2.883,72.4-7.148ZM87.773,0h-4.43V-24.867h4.43Zm0-29.578h-4.43v-4.781h4.43ZM98.719-21.7a9.775,9.775,0,0,1,7.43-3.727q8.414,0,8.414,9.164V0h-4.43V-16.078a6.962,6.962,0,0,0-1.09-4.383,4.357,4.357,0,0,0-3.574-1.336q-3.375,0-6.75,3.984V0h-4.43V-24.867h4.43ZM131.555.586a11.712,11.712,0,0,1-8.812-3.434q-3.328-3.434-3.328-9.574,0-6.094,3.223-9.551a10.985,10.985,0,0,1,8.426-3.457,11.073,11.073,0,0,1,8.5,3.4q3.176,3.4,3.176,9.609v1.055H124.008q.281,4.313,2.379,6.4a7.043,7.043,0,0,0,5.168,2.086,7.638,7.638,0,0,0,4.184-1.184A3.982,3.982,0,0,0,137.7-7.43h4.57a8.246,8.246,0,0,1-3.48,5.93A12.247,12.247,0,0,1,131.555.586Zm6.516-15.422a9.013,9.013,0,0,0-2.414-5.367,6.419,6.419,0,0,0-4.594-1.781,6.436,6.436,0,0,0-4.547,1.77,8.805,8.805,0,0,0-2.414,5.379ZM158.25.586a11.712,11.712,0,0,1-8.812-3.434q-3.328-3.434-3.328-9.574,0-6.094,3.223-9.551a10.985,10.985,0,0,1,8.426-3.457,11.073,11.073,0,0,1,8.5,3.4q3.176,3.4,3.176,9.609v1.055H150.7q.281,4.313,2.379,6.4a7.043,7.043,0,0,0,5.168,2.086,7.638,7.638,0,0,0,4.184-1.184,3.982,3.982,0,0,0,1.957-3.363h4.57a8.246,8.246,0,0,1-3.48,5.93A12.247,12.247,0,0,1,158.25.586Zm6.516-15.422a9.013,9.013,0,0,0-2.414-5.367,6.419,6.419,0,0,0-4.594-1.781,6.436,6.436,0,0,0-4.547,1.77,8.805,8.805,0,0,0-2.414,5.379Zm22.523-6a9.9,9.9,0,0,0-2.7-.281q-3.375,0-5.789,3.539V0h-4.43V-24.867h4.43V-21.4q2.789-4.031,6.469-4.031a11.8,11.8,0,0,1,2.016.188ZM196.172,0h-4.8V-4.8h4.8Zm23.273-7.148V-18.961a8.778,8.778,0,0,0-6.539-3.023,5.264,5.264,0,0,0-4.535,2.449q-1.7,2.449-1.7,7.3,0,4.594,1.605,6.973a5.074,5.074,0,0,0,4.441,2.379Q216.422-2.883,219.445-7.148Zm0,4.172a8.94,8.94,0,0,1-7.1,3.563A8.972,8.972,0,0,1,204.8-2.883q-2.672-3.469-2.672-9.352,0-6.094,2.988-9.645a9.411,9.411,0,0,1,7.512-3.551,9.888,9.888,0,0,1,6.82,2.484V-34.359h4.406V0h-4.406ZM240.961.586a11.712,11.712,0,0,1-8.812-3.434q-3.328-3.434-3.328-9.574,0-6.094,3.223-9.551a10.985,10.985,0,0,1,8.426-3.457,11.073,11.073,0,0,1,8.5,3.4q3.176,3.4,3.176,9.609v1.055H233.414q.281,4.313,2.379,6.4a7.043,7.043,0,0,0,5.168,2.086,7.638,7.638,0,0,0,4.184-1.184A3.982,3.982,0,0,0,247.1-7.43h4.57a8.246,8.246,0,0,1-3.48,5.93A12.247,12.247,0,0,1,240.961.586Zm6.516-15.422a9.013,9.013,0,0,0-2.414-5.367,6.419,6.419,0,0,0-4.594-1.781,6.436,6.436,0,0,0-4.547,1.77,8.805,8.805,0,0,0-2.414,5.379ZM265.969.586q-10.2,0-10.664-8.016h4.43q.047,4.547,6.188,4.547a6.639,6.639,0,0,0,4.184-1.137,3.488,3.488,0,0,0,1.441-2.848,2.437,2.437,0,0,0-1.406-2.379,35.383,35.383,0,0,0-5.8-1.793,21.366,21.366,0,0,1-6.422-2.461q-2.027-1.359-2.027-4.781a6.3,6.3,0,0,1,2.52-5.121,10.435,10.435,0,0,1,6.738-2.027q9.773,0,9.984,6.961h-4.406q-.234-3.516-5.273-3.516a7.312,7.312,0,0,0-3.691.844A2.685,2.685,0,0,0,260.3-18.68a2.232,2.232,0,0,0,1.125,2.1,28.088,28.088,0,0,0,5.637,1.734,21.807,21.807,0,0,1,6.7,2.543q2.191,1.453,2.191,5.016a7.011,7.011,0,0,1-2.707,5.637A11.067,11.067,0,0,1,265.969.586ZM285.516,0h-4.43V-24.867h4.43Zm0-29.578h-4.43v-4.781h4.43ZM312.188-1.922q0,12-10.828,12a12.027,12.027,0,0,1-7.395-2.039,6.514,6.514,0,0,1-2.707-5.484h4.57q0,4.078,5.484,4.078a6.44,6.44,0,0,0,4.781-1.7q1.688-1.7,1.688-6.668V-2.977a8.94,8.94,0,0,1-7.1,3.563,8.972,8.972,0,0,1-7.547-3.469q-2.672-3.469-2.672-9.352,0-6.094,2.988-9.645a9.411,9.411,0,0,1,7.512-3.551,9.888,9.888,0,0,1,6.82,2.484v-1.922h4.406Zm-4.406-5.227V-18.961a8.778,8.778,0,0,0-6.539-3.023,5.264,5.264,0,0,0-4.535,2.449q-1.7,2.449-1.7,7.3,0,4.594,1.605,6.973a5.074,5.074,0,0,0,4.441,2.379Q304.758-2.883,307.781-7.148ZM323.156-21.7a9.775,9.775,0,0,1,7.43-3.727q8.414,0,8.414,9.164V0h-4.43V-16.078a6.962,6.962,0,0,0-1.09-4.383,4.357,4.357,0,0,0-3.574-1.336q-3.375,0-6.75,3.984V0h-4.43V-24.867h4.43ZM355.992.586a11.712,11.712,0,0,1-8.812-3.434q-3.328-3.434-3.328-9.574,0-6.094,3.223-9.551A10.985,10.985,0,0,1,355.5-25.43a11.073,11.073,0,0,1,8.5,3.4q3.176,3.4,3.176,9.609v1.055H348.445q.281,4.313,2.379,6.4a7.043,7.043,0,0,0,5.168,2.086,7.638,7.638,0,0,0,4.184-1.184,3.982,3.982,0,0,0,1.957-3.363h4.57a8.246,8.246,0,0,1-3.48,5.93A12.247,12.247,0,0,1,355.992.586Zm6.516-15.422a9.013,9.013,0,0,0-2.414-5.367,6.419,6.419,0,0,0-4.594-1.781,6.436,6.436,0,0,0-4.547,1.77,8.805,8.805,0,0,0-2.414,5.379Zm22.523-6a9.9,9.9,0,0,0-2.7-.281q-3.375,0-5.789,3.539V0h-4.43V-24.867h4.43V-21.4q2.789-4.031,6.469-4.031a11.8,11.8,0,0,1,2.016.188ZM393.914,0h-4.8V-4.8h4.8Zm11.953-21.891a8.961,8.961,0,0,1,7.1-3.539,8.984,8.984,0,0,1,7.547,3.457q2.672,3.457,2.672,9.34,0,6.117-2.988,9.668A9.434,9.434,0,0,1,412.664.586a9.748,9.748,0,0,1-6.8-2.508V0h-4.43V-34.359h4.43Zm0,15.984a8.706,8.706,0,0,0,6.516,3.023,5.256,5.256,0,0,0,4.547-2.449q1.688-2.449,1.688-7.3,0-4.594-1.594-6.973a5.067,5.067,0,0,0-4.453-2.379q-3.68,0-6.7,4.266Zm35.18-14.93a9.9,9.9,0,0,0-2.7-.281q-3.375,0-5.789,3.539V0h-4.43V-24.867h4.43V-21.4q2.789-4.031,6.469-4.031a11.8,11.8,0,0,1,2.016.188Zm18.82,17.672q-3.3,3.75-7.43,3.75-8.414,0-8.414-9.187V-24.867h4.43V-8.789a7.019,7.019,0,0,0,1.078,4.383,4.321,4.321,0,0,0,3.563,1.336q3.7,0,6.773-3.984V-24.867h4.406V0h-4.406ZM475.242,0h-4.43V-24.867h4.43Zm0-29.578h-4.43v-4.781h4.43ZM486.188-21.7a9.775,9.775,0,0,1,7.43-3.727q8.414,0,8.414,9.164V0H497.6V-16.078a6.962,6.962,0,0,0-1.09-4.383,4.357,4.357,0,0,0-3.574-1.336q-3.375,0-6.75,3.984V0h-4.43V-24.867h4.43Z"
                                transform="translate(-0.938 35.109)"
                                fill="none"
                                stroke={accentColor}
                                strokeWidth="1.5"
                            />
                        </svg>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '30vh',
                        }}
                    >
                        <Button
                            id="exploreButton"
                            onClick={() => {
                                anime({
                                    targets: [
                                        '#movingPageBottom #bottomAnimationCover1',
                                        '#movingPageBottom #bottomAnimationCover2',
                                    ],
                                    duration: 3000,
                                    translateY: [0, '-200vh'],
                                    delay: anime.stagger(280, { start: 0 }),
                                    scaleY: [1, 0.8],
                                    easing: 'easeInOutExpo',
                                    autoplay: true,
                                });
                                anime({
                                    targets: '#menu',
                                    duration: 520,
                                    translateY: [0, '-100vh'],
                                    delay: 1500,
                                    easing: 'easeInOutExpo',
                                });
                                anime({
                                    targets: [
                                        '#MenuItem01',
                                        '#MenuItem02',
                                        '#MenuItem03',
                                        '#MenuItem04',
                                        '#MenuItem05',
                                    ],
                                    translateY: [300, 0],
                                    easing: 'easeInOutExpo',
                                    duration: 700,
                                    delay: (el, i) => i * 100 + 1575,
                                    loop: 1,
                                });
                            }}
                        >
                            Explore
                        </Button>
                    </div>
                </div>
                <div id="movingPageBottom">
                    <div
                        id="bottomAnimationCover1" // CHANGE THESE NAMES
                        style={{
                            backgroundColor: highlightColor,
                            opacity: '75%',
                            width: '100vw',
                            height: '100vh',
                            marginTop: '10vh',
                            display: 'flex',
                            overflow: 'hidden',
                            position: 'fixed',
                            zIndex: 5,
                        }}
                    />
                    <div
                        id="bottomAnimationCover2"
                        style={{
                            backgroundColor: highlightColor,
                            width: '100vw',
                            height: '100vh',
                            marginTop: '10vh',
                            display: 'flex',
                            overflow: 'hidden',
                            position: 'fixed',
                            zIndex: 5,
                        }}
                    />
                </div>
                <AboutMePage />
                <div id="movingPageSide">
                    <div
                        id="sideAnimationCover1"
                        style={{
                            backgroundColor: highlightColor,
                            opacity: '75%',
                            width: '100vw',
                            height: '100vh',
                            marginTop: '-100vh',
                            marginLeft: '110vw',
                            display: 'flex',
                            overflow: 'hidden',
                            position: 'fixed',
                            zIndex: 5,
                        }}
                    />
                    <div
                        id="sideAnimationCover2"
                        style={{
                            backgroundColor: highlightColor,
                            width: '100vw',
                            height: '100vh',
                            marginTop: '-100vh',
                            marginLeft: '110vw',
                            display: 'flex',
                            overflow: 'hidden',
                            position: 'fixed',
                            zIndex: 5,
                        }}
                    />
                </div>
            </div>
        );
    }
}
