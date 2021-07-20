function FormComponent(props) {
    return (
        <main>
            <form>
                <input placeholder="First Name" name='firstName' type='text' value={props.form.firstName} onChange={props.handleChange} /><br />
                <input placeholder="Last Name" name='lastName' type='text' value={props.form.lastName} onChange={props.handleChange} /><br />
                <input placeholder="Age" name='age' type='text' value={props.form.age} onChange={props.handleChange} /><br />

                {/* Create radio buttons for gender here */}
                <label>
                    <input type='radio'
                        name='gender'
                        value='Male'
                        checked={props.form.gender === 'Male'}
                        onChange={props.handleChange} /> Male
                </label>
                <label>
                    <input type='radio'
                        name='gender'
                        value='Female'
                        checked={props.form.gender === 'Female'}
                        onChange={props.handleChange} /> Female
                </label>
                <br />

                {/* Create select box for location here */}
                <select name='location' value={props.form.location} onChange={props.handleChange}>
                    <option value='Location:'>Location:</option>
                    <option value='Moon'>Moon</option>
                    <option value='Uranus'>Uranus</option>
                    <option value='The Pub'>The Pub</option>
                </select>
                <br />

                {/* Create check boxes for dietary restrictions here */}
                Old Fish:<input type='checkbox'
                    name='noOldFish'
                    value='No Old Fish'
                    checked={props.form.dietary.noOldFish}
                    onChange={props.handleChange} />
                Nails:<input type='checkbox'
                    name='noNails'
                    value='No Nails'
                    checked={props.form.dietary.noNails}
                    onChange={props.handleChange} />
                Extra Slippers:<input type='checkbox'
                    name='extraSlippers'
                    value='Extra Slippers'
                    checked={props.form.dietary.extraSlippers}
                    onChange={props.handleChange} />
                <br />

                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.form.firstName + ' ' + props.form.lastName}</p>
            <p>Your age: {props.form.age}</p>
            <p>Your gender: {props.form.gender}</p>
            <p>Your destination: {props.form.location === 'Location:' ? '' : props.form.location}</p>

            Your dietary restrictions:
            {/* Dietary restrictions here, comma separated */}
            <p>
                Old Fish: {props.form.dietary.noOldFish === true ? 'Yes' : 'No'}
            </p>
            <p>
                Nails: {props.form.dietary.noNails === true ? 'Yes' : 'No'}
            </p>
            <p>
                Extra Slippers: {props.form.dietary.extraSlippers === true ? 'Yes' : 'No'}
            </p>

        </main>
    );
}

export default FormComponent;