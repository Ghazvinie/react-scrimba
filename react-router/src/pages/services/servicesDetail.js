import React from "react";
import { useParams } from 'react-router-dom';

function ServiceDetail(props) {
    const params = useParams();
    console.log(params);
    return (
        <>
            <h1>Service Detail Page</h1>
        </>
    );
}

export default ServiceDetail;