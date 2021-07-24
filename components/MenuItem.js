import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import anime from 'animejs';

import '../App.css';

function MenuItem(props) {
    const [backgroundGradient, setBackgroundGradient] = React.useState(
        'linear-gradient(90deg, #413964, #564D85)',
    );
    const {
        menuItemNumber,
        menuItemTitle,
        menuItemDescription,
        menuItemTitleText,
        menuItemDescriptionText,
        id,
        content,
    } = props;

    function openMenuDetails() {
        if (menuItemNumber === 5) {
            window.open('https://medium.com/@eshah22', '_blank');
        } else {
            anime({
                targets: [
                    '#movingPageSide #sideAnimationCover1',
                    '#movingPageSide #sideAnimationCover2',
                ],
                duration: 4000,
                translateX: [0, '-210vw'],
                delay: anime.stagger(350, { start: 0 }),
                easing: 'easeInOutExpo',
            });
            anime({
                targets: `#content${menuItemNumber}`,
                duration: 1700,
                translateX: [0, '-100vw'],
                delay: 1350,
                easing: 'easeInOutExpo',
            });
            const tl = anime.timeline({easing: "easeInOutExpo"})
            tl
            .add({
                targets: [
                    '#socialMediaButtons',
                    '#title',
                    '#picture',
                    '#homeToMenuButton',
                    '#text',
                    '#sunButton',
                ],
                opacity: [1, 0],
                delay: 2000,
                duration: 500,
            })
            .add({
                targets: [
                    '#socialMediaButtons',
                    '#title',
                    '#picture',
                    '#homeToMenuButton',
                    '#text',
                    '#sunButton',
                ],
                opacity: [0, 1],
                delay: 1000,
                duration: 1500,
            });
        }
    }

    return (
        <div
            id={id}
            role="button"
            tabIndex={menuItemNumber - 1}
            onMouseDown={() => openMenuDetails()}
            onMouseEnter={() => {
                anime({
                    targets: `#${menuItemDescription}`,
                    opacity: [0, 1],
                    easing: 'linear',
                    duration: 200,
                });
                anime({
                    targets: `#${menuItemTitle}`,
                    scale: [1, 1.05],
                    easing: 'easeInOutQuad',
                    duration: 300,
                });
                setBackgroundGradient(
                    'linear-gradient(90deg, #64599B, #796FAC)',
                );
            }}
            onMouseLeave={() => {
                anime({
                    targets: `#${menuItemDescription}`,
                    opacity: [1, 0],
                    easing: 'linear',
                    duration: 200,
                });
                anime({
                    targets: `#${menuItemTitle}`,
                    scale: [1.05, 1],
                    easing: 'easeInOutExpo',
                    duration: 400,
                });
                setBackgroundGradient(
                    'linear-gradient(90deg, #413964, #564D85)',
                );
            }}
            style={{
                marginLeft: 0,
                marginRight: 0,
                borderRadius: 0,
                borderWidth: 4,
                height: '100vh',
                background: backgroundGradient,
                width: '20vw',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                cursor: 'pointer',
            }}
        >
            <div
                style={{
                    fontSize: 24,
                    marginLeft: 20,
                    marginTop: 40,
                    color: '#8884FF',
                }}
            >
                {`0${menuItemNumber}`}
            </div>
            <div
                id={menuItemTitle}
                style={{
                    fontSize: 42,
                    marginTop: '30vh',
                    textAlign: 'center',
                    color: '#d8ffdd',
                    fontFamily: 'OpenSansLight',
                }}
            >
                {menuItemTitleText}
            </div>
            <div
                id={menuItemDescription}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '20vh',
                    fontSize: 20,
                    alignItems: 'center',
                    opacity: 0,
                }}
            >
                <div
                    style={{
                        textAlign: 'left',
                        marginBottom: 10,
                        padding: 25,
                        color: '#EBFFED',
                        fontFamily: 'OpenSansLight',
                    }}
                >
                    {menuItemDescriptionText}
                </div>
                <Button
                    icon
                    labelPosition="right"
                    style={{ borderRadius: 0, width: 180 }}
                >
                    Read More
                    <Icon name="chevron right" />
                </Button>
            </div>
            {content}
        </div>
    );
}

export default MenuItem;
