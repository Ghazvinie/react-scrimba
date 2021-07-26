import { checkPropTypes } from 'prop-types';
import React from 'react';

// function RenderProps(props){
//     return (
//         <div>
//         {props.render(10)}
//         </div>
//     );
// }


function Favorite() {
    const renderProp = (on, func) => {
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span onClick={func}>
                        {on ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        );
    };
    return (
        <Toggler render={renderProp} defaultOnValue={false} />
    );
}

function Menu() {
    const renderProp = (on, func) => {
        return (
            <div>
                <button onClick={func}>{on ? "Hide" : "Show"} Menu </button>
                <nav style={{ display: on ? "block" : "none" }}>
                    <h6>Signed in as Coder123</h6>
                    <a>Your Profile</a>
                    <a>Your Repositories</a>
                    <a>Your Stars</a>
                    <a>Your Gists</a>
                </nav>
            </div>
        );
    }
    return (
        <Toggler render={renderProp} defaultOnValue={true} />
    );
}

class Toggler extends React.Component {
    state = {
        on: this.props.defaultOnValue
    };

    toggleFunc = () => {
        this.setState((prevState) => {
            return {
                on: !prevState.on
            };
        });
    };
    render() {
        return (
            <>
                {this.props.render(this.state.on, this.toggleFunc)}
            </>
        );
    };
}



// const FavoriteWithToggle = withToggle(Favorite, { defaultOnValue: false });
// const MenuWithToggle = withToggle(Menu, { defaultOnValue: true })

export { Favorite, Menu }

// export default RenderProps;