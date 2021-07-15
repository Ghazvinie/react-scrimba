import React from 'react';

const Checkbox = (props) => (
    <div class="checkboxes-containter">
        <div class="checkbox-item">
            <p>{props.text}</p>
            <div class="checkbox-single-container">
                <input type="checkbox"/>
            </div>
        </div>
    </div>

);

export default Checkbox;