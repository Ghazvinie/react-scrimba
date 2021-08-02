import React, { useState } from "react";


function App() {
    const [inputData, setInputData] = useState({ firstName: "", lastName: "" })
    const [contactsData, setContactsData] = useState([])

    function handleChange(e) {
        const { value, name } = e.target;
        setInputData({
            ...inputData, 
            [name] : value
        });
        console.log(inputData)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setContactsData([...contactsData, inputData]);
        console.log(contactsData);
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    placeholder="First Name"
                    name="firstName"
                    value={inputData.firstName}
                    onChange={handleChange}
                />
                <input
                    placeholder="Last Name"
                    name="lastName"
                    value={inputData.lastName}
                    onChange={handleChange}
                />
                <br />
                <button>Add contact</button>
            </form>
            {/*{contacts}*/}
        </>
    )
}

export default App;