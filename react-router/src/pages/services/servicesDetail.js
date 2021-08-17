import React from "react";
import { useParams } from 'react-router-dom';
import servicesData from "./servicesData";

function ServiceDetail(props) {
    const { serviceId } = useParams();
    const service = servicesData.find((element) => element._id === serviceId);
    console.log(service)
    return (
        <>
            <h1>Service Detail Page</h1>
            <h3>{service.name}</h3>
            <h4>£{service.price}</h4>
            <p>{service.description}</p>

        </>
    );
}

export default ServiceDetail;