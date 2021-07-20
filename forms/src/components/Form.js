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

class Form extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    
    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name" /><br />
                    <input placeholder="Last Name" /><br />
                    <input placeholder="Age" /><br />
                    
                    {/* Create radio buttons for gender here */}
                    <br />
                    
                    {/* Create select box for location here */}
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {/* First and last name here */}</p>
                <p>Your age: {/* Age here */}</p>
                <p>Your gender: {/* Gender here */}</p>
                <p>Your destination: {/* Destination here */}</p>
                <p>
                    Your dietary restrictions: 
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default Form;