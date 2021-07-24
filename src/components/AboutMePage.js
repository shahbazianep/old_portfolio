import React from 'react';
import { Button } from 'semantic-ui-react';
import anime from 'animejs';

import '../App.css';

function returnToMenu() {
    anime({
        targets: [
            '#movingPageSide #sideAnimationCover1',
            '#movingPageSide #sideAnimationCover2',
        ],
        duration: 3400,
        translateX: ['-210vw', 0],
        delay: anime.stagger(300, { start: 0 }),
        easing: 'easeInOutExpo',
    });
    anime({
        targets: '#content1',
        duration: 1600,
        translateX: ['-100vw', 0],
        delay: 1100,
        easing: 'easeInOutExpo',
    });
}

function openWebsite(props) {
    if (props === 'facebook') {
        window.open('https://www.facebook.com/epshahbazian/', '_blank');
    } else if (props === 'github') {
        window.open('https://github.com/shahbazianep', '_blank');
    } else if (props === 'instagram') {
        window.open('https://www.instagram.com/eshah.22/', '_blank');
    } else if (props === 'linkedin') {
        window.open('https://www.linkedin.com/in/ethanshahbazian/', '_blank');
    }
}

function AboutMePage() {
    return (
        <div
            id="content1"
            style={{
                height: '100vh',
                width: '100vw',
                marginTop: '-100vh',
                marginLeft: '100vw',
                position: 'fixed',
                overflow: 'hidden',
                display: 'flex',
                background: 'linear-gradient(90deg, #1D1A2C, #2B2643)',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    <Button
                        id="homeToMenuButton"
                        circular
                        icon="home"
                        size="big"
                        onClick={() => returnToMenu()}
                        style={{
                            height: 50,
                            width: 50,
                            marginTop: '3vh',
                            marginLeft: '7vw',
                            color: '#8884FF',
                            backgroundColor: 'transparent',
                        }}
                    />
                </div>

                <div
                    style={{
                        marginLeft: '5vw',
                        width: '60vw',
                        backgroundColor: 'transparent',
                        fontFamily: 'OpenSansLight',
                        padding: 10,
                        lineHeight: 1.5,
                        fontSize: 50,
                        color: '#EBFFED',
                    }}
                    id="title"
                >
                    ABOUT ME
                </div>
                <div
                    id="text"
                    style={{
                        height: '80vh',
                        marginLeft: '5vw',
                        width: '60vw',
                        display: 'flex',
                        backgroundColor: 'transparent',
                        fontFamily: 'OpenSansLight',
                        padding: 10,
                        lineHeight: 1.5,
                        fontSize: 30,
                        color: '#EBFFED',
                    }}
                >
                    <text>
                        Hello, my name is Ethan Shahbazian. I&apos;m currently a
                        junior at UCLA, studying computer engineering. Some of
                        my more academic hobbies include designing websites,
                        doing coding challenges, and . To relax, I enjoy playing
                        soccer and League of Legends, and watching anime. Some
                        of my favorites include Demon Slayer: Kimetsu no Yaiba
                        and the entire Fate series (especially Fate: Apocrypha).
                        I love drinking boba, and I&apos;ve been experimenting
                        at home learning to make it. I hope to take part in more
                        diverse projects and pursue unique opportunities in my
                        remaining of years of college in order to get a stronger
                        grasp of what I want to pursue in the future.
                    </text>
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    marginLeft: '5vw',
                    flexDirection: 'column',
                    alignContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    id="picture"
                    style={{
                        height: '60vh',
                        width: '20vw',
                        marginTop: '10vh',
                        backgroundColor: 'pink',
                    }}
                >
                    PICTURE
                </div>
                <div
                    style={{
                        marginTop: '5vw',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                    id="socialMediaButtons"
                >
                    <div
                        className="hexagon-wrapper"
                        role="button"
                        id="facebook"
                        tabIndex={0}
                        onMouseDown={() => openWebsite('facebook')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="hexagon">
                            <i className="fa fa-facebook" />
                        </div>
                    </div>
                    <div
                        className="hexagon-wrapper"
                        role="button"
                        id="facebook"
                        tabIndex={0}
                        onMouseDown={() => openWebsite('github')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="hexagon">
                            <i className="fa fa-github" />
                        </div>
                    </div>
                    <div
                        className="hexagon-wrapper"
                        role="button"
                        id="facebook"
                        tabIndex={0}
                        onMouseDown={() => openWebsite('instagram')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="hexagon">
                            <i className="fa fa-instagram" />
                        </div>
                    </div>
                    <div
                        className="hexagon-wrapper"
                        role="button"
                        id="facebook"
                        tabIndex={0}
                        onMouseDown={() => openWebsite('linkedin')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="hexagon">
                            <i className="fa fa-linkedin" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMePage;
