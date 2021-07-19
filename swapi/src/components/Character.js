import React from 'react';

class Character extends React.Component {
    constructor() {
        super()
        this.state = {
            character: {},
            isLoading: false
        };
    };

    async componentDidMount() {
        this.setState({ isLoading: true });

        const response = await fetch('https://swapi.dev/api/people/1/');
        const data = await response.json();


        this.setState({
            character: data,
            isLoading: false
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.isLoading ? 'Page Loading...' : this.state.character.name}</h1>
            </div>
        );
    };
};

export default Character;