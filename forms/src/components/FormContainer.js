import { thistle } from 'color-name';
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

import FormComponent from './FormComponent';

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
                noOldFish: false,
                noNails: false,
                extraSlippers: false
            }
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        const { name, value, checked, type } = e.target;

        if (value === 'Location:') return;

        this.setState((prevState) => {
            if (type === 'checkbox') {
                return {
                    dietary: {
                        ...prevState.dietary,
                        [name]: checked
                    }
                };
            }
            return {
                [name]: value
            };
        });
    };

    render() {
        return (
            <FormComponent
            handleChange={this.handleChange}
            form={this.state}
            />
        );
    };
};

export default Form;