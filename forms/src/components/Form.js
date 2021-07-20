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
            gender: '',
            location: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        if (value === 'Please Select:') return;

        this.setState({
            [name] : value
        });
    }

    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name" /><br />
                    <input placeholder="Last Name" /><br />
                    <input placeholder="Age" /><br />

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
                    Location:
                    <select name='location' value={this.state.location} onChange={this.handleChange}>
                        <option selected value='Please Select:'>Please Select:</option>
                        <option value='Moon'>Moon</option>
                        <option value='Uranus'>Uranus</option>
                        <option value='The Pub'>The Pub</option>
                    </select>
                    <br />

                    {/* Create check boxes for dietary restrictions here */}
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {/* First and last name here */}</p>
                <p>Your age: {/* Age here */}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location === 'Please Select:' ? '' : this.state.location}</p>
                <p>
                    Your dietary restrictions:
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default Form;