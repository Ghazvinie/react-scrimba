function setUserDetails(detail){
    return {
        type: 'SET_USER_DETAILS',
        payload: detail
    };
}

const initialUserState = {
    firstName: '',
    lastName: '',
    id: '',
    email: ''
};

function userReducer(state = initialUserState, action){
    switch (action.type) {
        case 'SET_USER_DETAILS':
            return state            
        default:
            return state
    }
}

export default userReducer;