import React, { Component } from 'react';

function MyHOC(PassedInComponent) {

    return function (props) {
        return (
            <PassedInComponent favieNum={18} />
        );
    };
}


function Favorite(props) {
    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1>
                <span
                    onClick={props.toggleFunc}
                >
                    {props.on ? "❤️" : "♡"}
                </span>
            </h1>
        </div>
    );
}

function Menu(props) {
    return (
        <div>
            <button onClick={props.toggleFunc}>{props.on ? "Hide" : "Show"} Menu </button>
            <nav style={{ display: props.on ? "block" : "none" }}>
                <h6>Signed in as Coder123</h6>
                <a>Your Profile</a>
                <a>Your Repositories</a>
                <a>Your Stars</a>
                <a>Your Gists</a>
            </nav>
        </div>
    );
}

class Toggler extends React.Component {
    state = {
        on: false
    };

    toggleFunc = () => {
        this.setState((prevState) => {
            return {
                on: !prevState.false
            };
        });
    };

    render() {
        return (
            <>
                <this.props.Component on={this.state.on} toggleFunc={this.toggleFunc} {...this.props} />
            </>
        );
    };
}

function withToggle(PassedInComponent) {
    return function (props) {
        return (
            <Toggler Component={PassedInComponent} {...props} />
        );
    };
}

const FavoriteWithToggle = withToggle(Favorite);
const MenuWithToggle = withToggle(Menu)

export { MyHOC, FavoriteWithToggle, MenuWithToggle, withToggle };