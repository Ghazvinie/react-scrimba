import React from 'react';

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            firstName: '',
            lastName: '',
            textarea: '',
            checked: false
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit(this);

        this.handleCheckbox = this.handleCheckbox.bind(this);
    };



    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
        console.log(`${name} : ${value}`)
    }

    handleCheckbox() {
        this.setState((prevState) => {
            return { checked: !prevState.checked }
        });
    }

    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }

    render() {
        return (
            <div>

                {/* <h1>{this.state.isLoading ? 'Page Loading...' : this.state.character.name}</h1> */}
                <form >
                    <label>
                        Name:
                        <input type="text"
                            name='firstName'
                            onChange={this.handleChange}
                            value={this.state.firstName} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text"
                            name='lastName'
                            onChange={this.handleChange}
                            value={this.state.lastName} />
                    </label>
                    <input type='submit' value='submit' />

                    <textarea value={this.state.textarea}
                        onChange={this.handleChange}
                        name='textarea' />

                    <input type='checkbox' checked={this.state.checked} onChange={this.handleCheckbox} name='checked' />
                </form>
            </div>
        );
    };
};

export default Form;