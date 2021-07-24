import React from 'react';

function MyHOC(PassedInComponent) {

    return function (props) {
        return (
            <PassedInComponent favieNum={18} />
        );
    };
}

class Favorite extends React.Component {
    state = {
        isFavorited: false
    };

    toggleFavorite = () => {
        this.setState(prevState => {
            return {
                isFavorited: !prevState.isFavorited
            };
        });
    };

    render() {
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span
                        onClick={this.toggleFavorite}
                    >
                        {this.state.isFavorited ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        );
    };
};


class Menu extends React.Component {
    state = {
        show: true
    };

    toggleShow = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show
            };
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.toggleShow}>{this.state.show ? "Hide" : "Show"} Menu </button>
                <nav style={{ display: this.state.show ? "block" : "none" }}>
                    <h6>Signed in as Coder123</h6>
                    <a>Your Profile</a>
                    <a>Your Repositories</a>
                    <a>Your Stars</a>
                    <a>Your Gists</a>
                </nav>
            </div>
        );
    };
};


export { MyHOC, Favorite, Menu };