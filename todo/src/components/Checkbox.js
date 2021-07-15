import React from 'react';

const Checkbox = (props) => (
    <div className="checkbox-item">
        <p>{props.text}</p>
        <div className="checkbox-single-container">
            <input type="checkbox" />
        </div>
    </div>
);

export default Checkbox;