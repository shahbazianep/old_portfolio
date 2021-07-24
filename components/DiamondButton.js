import React from 'react';

export default class DiamondButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { textColor: 'black', backColor: 'white', animate: false };
    }

    render() {
        const { textColor, backColor, animate } = this.state;
        const dim = window.innerWidth / 7;
        return (
            <div style={{}}>
                <button
                    type="button"
                    onClick={() =>
                        this.setState({
                            animate: true,
                            backColor: 'grey',
                            textColor: 'white',
                        })
                    }
                    // onMouseLeave={() => this.setState({ animate: false })}
                    style={{
                        backgroundColor: backColor,
                        borderWidth: 1,
                        borderColor: 'white',
                        color: textColor,
                        width: dim,
                        height: dim,
                        alignContent: 'center',
                        transform: animate
                            ? 'rotateZ(45deg) translateZ(1px)'
                            : 'rotateZ(45deg)',
                        transition: 'all 0.8s ease-out',
                        margin: (dim * Math.sqrt(2) - dim) / 2,
                        borderRadius: 8,
                        outline: 'none',
                    }}
                >
                    <div style={{ transform: 'rotate(-45deg)' }} />
                </button>
            </div>
        );
    }
}
