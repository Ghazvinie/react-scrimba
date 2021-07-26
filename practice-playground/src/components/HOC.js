import React, { Component } from 'react';

function MyHOC(PassedInComponent) {

    return function (props) {
        return (
            <PassedInComponent favieNum={18} />
        );
    };
}


class Favorite extends React.Component {
    // state = {
    //     isFavorited: false
    // }

    // toggleFavorite = () => {
    //     this.setState(prevState => {
    //         return {
    //             isFavorited: !prevState.isFavorited
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span
                        onClick={this.props.toggleFunc}
                    >
                        {this.props.on ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        )
    }
}

class Menu extends React.Component {
    // state = {
    //     show: true
    // }

    // toggleShow = () => {
    //     this.setState(prevState => {
    //         return {
    //             show: !prevState.show
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                <button onClick={this.props.toggleFunc}>{this.props.on ? "Hide" : "Show"} Menu </button>
                <nav style={{ display: this.props.on ? "block" : "none" }}>
                    <h6>Signed in as Coder123</h6>
                    <a>Your Profile</a>
                    <a>Your Repositories</a>
                    <a>Your Stars</a>
                    <a>Your Gists</a>
                </nav>
            </div>
        )
    }
}

class Toggler extends React.Component {
    state = {
        on: false
    }

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
                <this.props.Component on={this.state.on} toggleFunc={this.toggleFunc} {...this.props} />
            </>
        );
    };
}

function withToggle(PassedInComponent) {
    return function (props) {
        return (
            <Toggler {...props} Component={PassedInComponent} />
        )
    }
}



const FavoriteWithToggle = withToggle(Favorite);
const MenuWithToggle = withToggle(Menu)

export { MyHOC, FavoriteWithToggle, MenuWithToggle, withToggle };