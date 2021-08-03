import React, { useEffect, useState } from "react";


function App() {
    const [inputData, setInputData] = useState({ firstName: "", lastName: "" })
    const [contactsData, setContactsData] = useState([])

    function handleChange(e) {
        const { value, name } = e.target;
        setInputData((prevInputData) => ({
            ...inputData,
            [name]: value
        }));
        console.log(inputData);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setContactsData((prevContactsData) => [...prevContactsData, inputData]);
        console.log(contactsData);
    }

    const contacts = contactsData.map(contact => <h2>{contact.firstName} {contact.lastName}</h2>);


    useEffect(() => {
         console.log('input data changed')
    }, [contactsData])

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
            {contacts}
        </>
    );
}

export default App;