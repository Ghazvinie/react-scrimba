import React from "react";
import { Link, useLocation } from 'react-router-dom';

function ServicesList(props) {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <h1>Services List Page</h1>
            <ul>
                {props.listData.map(service => {
                    return (
                        <li key={service._id}><Link to={`/services/${service._id}`}>{service.name}</Link> - £{service.price}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ServicesList;