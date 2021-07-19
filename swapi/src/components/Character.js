import React from 'react';

class Character extends React.Component {
    constructor() {
        super()
        this.state = {
            character: {},
            isLoading: false,
            firstName: '',
            lastName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit(this);
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

    handleChange(e) {
        this.setState({ formValue: e.target.value })
    }

    handleSubmit(e){

        console.log('Form was submitted' + this.state.value);

    }

    render() {
        return (
            <div>

                {/* <h1>{this.state.isLoading ? 'Page Loading...' : this.state.character.name}</h1> */}
                <form onSubmit={(e)=> this.handleSubmit(e)}>
                    <label>
                        Name:
                        <input type="text" name='firstName' onChange={this.handleChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name='lastName' onChange={this.handleChange} />
                    </label>
                    <input type='submit' value='submit' />
                </form>
            </div>
        );
    };
};

export default Character;