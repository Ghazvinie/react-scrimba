import React from "react";
import { useParams, useHistory } from 'react-router-dom';
import servicesData from "./servicesData";

function ServiceDetail(props) {
    console.log(useParams())
    const { serviceId } = useParams();
    const service = servicesData.find((element) => element._id === serviceId);

    const history = useHistory();
    console.log(history);

    const handleClick = () => {
        console.log('submitting')
        setTimeout(() => {
            history.push('/services')
        }, 2000)
    }
    return (
        <>
            <h1>Service Detail Page</h1>
            <h3>{service.name}</h3>
            <h4>£{service.price}</h4>
            <p>{service.description}</p>
            <button onClick={handleClick}>Go Back To All Services</button>

        </>
    );
}

export default ServiceDetail;