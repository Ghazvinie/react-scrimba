import React from 'react';

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            firstName: '',
            lastName: '',
            textarea: '',
            checked: false,
            radio: ''
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit(this);
    };



    handleChange(e) {
        const { name, value, checked } = e.target;

        this.setState({ [name]: name === 'checked' ? checked : value });
        // console.log(`${name} : ${value}`);
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

                    <input type='checkbox'
                        checked={this.state.checked}
                        onChange={this.handleChange}
                        name='checked' />

                    <input type='radio'
                        value='this'
                        checked={this.state.radio === 'this'}
                        onChange={this.handleChange}
                        name='radio' />This

                    <input type='radio'
                        value='that'
                        checked={this.state.radio === 'that'}
                        onChange={this.handleChange}
                        name='radio' />That




                </form>
            </div>
        );
    };
};

export default Form;