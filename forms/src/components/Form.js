import React from 'react';

// class Form extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoading: false,
//             firstName: '',
//             lastName: '',
//             textarea: '',
//             checked: false,
//             radio: '',
//             select: ''
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit(this);
//     };

//     handleChange(e) {
//         const { name, value, checked } = e.target;
//         console.log(value)
//         this.setState({ [name]: name === 'checked' ? checked : value });
//         // console.log(`${name} : ${value}`);
//     }

//     handleSubmit(e) {

// console.log('hello')
//       }

//     render() {
//         return (
//             <div>

//                 {/* <h1>{this.state.isLoading ? 'Page Loading...' : this.state.character.name}</h1> */}
//                 <form onSubmit={(e) => this.handleSubmit(e)}>

//                     <label>
//                         Name:
//                         <input type="text"
//                             name='firstName'
//                             onChange={this.handleChange}
//                             value={this.state.firstName} />
//                     </label>

//                     <label>
//                         Last Name:
//                         <input type="text"
//                             name='lastName'
//                             onChange={this.handleChange}
//                             value={this.state.lastName} />
//                     </label>

//                     <textarea value={this.state.textarea}
//                         onChange={this.handleChange}
//                         name='textarea' />

//                     <input type='checkbox'
//                         checked={this.state.checked}
//                         onChange={this.handleChange}
//                         name='checked' />

//                     <input type='radio'
//                         value='this'
//                         checked={this.state.radio === 'this'}
//                         onChange={this.handleChange}
//                         name='radio' />This

//                     <input type='radio'
//                         value='that'
//                         checked={this.state.radio === 'that'}
//                         onChange={this.handleChange}
//                         name='radio' />That

//                     <select value={this.state.select} name='select' onChange={this.handleChange}>
//                         <option value='one'>One</option>
//                         <option value='two'>Two</option>
//                         <option value='three'>Three</option>
//                     </select>

//                 <button type="button">Submit</button>
//                 </form>
//             </div>
//         );
//     };
// };



/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            location: '',
            dietary: {
                'No Old Fish': false,
                'No Nails': false,
                'Extra Slippers': false
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value, checked } = e.target;

        if (value === 'Location:') return;

        this.setState((prevState) => {
            if (name === 'dietary') {
                return {
                    [name]: { ...prevState.dietary,
                        [value]: checked
                    }
                };
            }
            return {
                [name]: value
            };
        });
    }

    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name" name='firstName' type='text' value={this.state.firstName} onChange={this.handleChange}/><br />
                    <input placeholder="Last Name" name='lastName' type='text' value={this.state.lastName} onChange={this.handleChange}/><br />
                    <input placeholder="Age" name='age' type='text' value={this.state.age} onChange={this.handleChange}/><br />

                    {/* Create radio buttons for gender here */}
                    <input type='radio'
                        name='gender'
                        value='Male'
                        checked={this.state.gender === 'Male'}
                        onChange={this.handleChange} /> Male
                    <input type='radio'
                        name='gender'
                        value='Female'
                        checked={this.state.gender === 'Female'}
                        onChange={this.handleChange} /> Female

                    <br />

                    {/* Create select box for location here */}
                    <select name='location' value={this.state.location} onChange={this.handleChange}>
                        <option selected value='Location:'>Location:</option>
                        <option value='Moon'>Moon</option>
                        <option value='Uranus'>Uranus</option>
                        <option value='The Pub'>The Pub</option>
                    </select>
                    <br />

                    {/* Create check boxes for dietary restrictions here */}
                    No Old Fish:<input type='checkbox'
                        name='dietary'
                        value='No Old Fish'
                        checked={this.state.dietary.noOldFish}
                        onChange={this.handleChange} />
                    No Nails:<input type='checkbox'
                        name='dietary'
                        value='No Nails'
                        checked={this.state.dietary.noNails}
                        onChange={this.handleChange} />
                    Extra Slippers:<input type='checkbox'
                        name='dietary'
                        value='Extra Slippers'
                        checked={this.state.dietary.extraSlippers}
                        onChange={this.handleChange} />


                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName + ' ' + this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location === 'Location:' ? '' : this.state.location}</p>
                <p>
                    Your dietary restrictions:
                    {/* Dietary restrictions here, comma separated */}

                    {this.state.dietary['No Old Fish'] === true ? ' No Old Fish,' : ''}
                    {this.state.dietary['No Nails'] === true ? ' No Nails,' : ''}
                    {this.state.dietary['Extra Slippers'] === true ? ' Extra Slippers,' : ''}
                </p>
            </main>
        )
    }
}

export default Form;