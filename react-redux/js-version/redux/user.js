function setUserDetails(detail){
    return {
        type: 'SET_USER_DETAILS',
        payload: detail
    };
}

function removeUserDetails(){
    return {
        type: 'REMOVE_USER'
    }
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
            return {
                ...state,
                ...action.payload,
            }
        case 'REMOVE_USER' :
            return {}         
        default:
            return state
    }
}

export default userReducer;