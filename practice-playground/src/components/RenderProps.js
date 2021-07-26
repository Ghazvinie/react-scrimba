import React from 'react';

function RenderProps(props){
    return (
        <div>
        {props.render('daniel')}
        </div>

    )
}

export default RenderProps;