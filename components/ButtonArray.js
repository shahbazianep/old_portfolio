import React from 'react';
import DiamondButton from './DiamondButton';

export default class ButtonArray extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'lavender' };
    }

    render() {
        const { color } = this.state;
        const buffer = 5;
        return (
            <div
                style={{ backgroundColor: 'transparent', pointerEvents: 'all' }}
            >
                <div
                    style={{
                        backgroundColor: color,
                        display: 'flex',
                        marginTop: (-1 * window.innerWidth) / 7 / Math.sqrt(2),
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                </div>
                <div
                    style={{
                        backgroundColor: color,
                        display: 'flex',
                        marginTop:
                            (-1 * window.innerWidth) / 7 / Math.sqrt(2) +
                            buffer,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                </div>
                <div
                    style={{
                        backgroundColor: color,
                        display: 'flex',
                        marginTop:
                            (-1 * window.innerWidth) / 7 / Math.sqrt(2) +
                            buffer,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                </div>
                <div
                    style={{
                        backgroundColor: color,
                        display: 'flex',
                        marginTop:
                            (-1 * window.innerWidth) / 7 / Math.sqrt(2) +
                            buffer,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                </div>
                <div
                    style={{
                        backgroundColor: color,
                        display: 'flex',
                        marginTop:
                            (-1 * window.innerWidth) / 7 / Math.sqrt(2) +
                            buffer,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                </div>
                <div
                    style={{
                        backgroundColor: color,
                        display: 'flex',
                        marginTop:
                            (-1 * window.innerWidth) / 7 / Math.sqrt(2) +
                            buffer,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                    <DiamondButton />
                </div>
            </div>
        );
    }
}
