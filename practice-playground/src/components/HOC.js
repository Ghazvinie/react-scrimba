import React from 'react';

function MyHOC(PassedInComponent){

    return function(props){
        return (
            <PassedInComponent favieNum={18} />
        );
    };
}

export default MyHOC;