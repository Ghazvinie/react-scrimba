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
        on: this.props.on
    };

    // toggleFavorite = () => {
    //     this.setState(prevState => {
    //         return {
    //             isFavorited: !prevState.isFavorited
    //         };
    //     });
    // };

    render() {
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span
                        onClick={this.props.toggle}
                    >
                        {this.props.on ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        );
    };
};


class Menu extends React.Component {
    state = {
        on: this.props.on
    };

    // toggleShow = () => {
    //     this.setState(prevState => {
    //         return {
    //             show: !prevState.show
    //         };
    //     });
    // };

    render() {
        return (
            <div>
                <button onClick={this.props.toggle}>{this.props.on ? "Hide" : "Show"} Menu </button>
                <nav style={{ display: this.props.on ? "block" : "none" }}>
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

class Toggler extends React.Component {
    state = {
        on: false
    };

    toggle = () => {
        console.log(this.state)
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        });
    };


    render() {
        const Component = this.props.component
        return (
            <Component toggle={this.toggle} on={this.state.on} {...this.props} />
        );
    };

};

function withToggle(ComponentPassedIn) {
    return function (props) {
        return (
            <Toggler component={ComponentPassedIn} {...props} />
        );
    };
}

const FavoriteWithToggle = withToggle(Favorite);
const MenuWithToggle = withToggle(Menu)

export { MyHOC, FavoriteWithToggle, MenuWithToggle, withToggle };