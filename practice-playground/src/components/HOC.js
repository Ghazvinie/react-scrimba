import React from 'react';

function myHOC(ComponentPassedIn) {

    return function (props) {
        return (
            <ComponentPassedIn newProp={18}  {...props}/>
        );
    };
}

export { myHOC };