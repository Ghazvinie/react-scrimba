function addFavieThing(thing) {
    return {
        type: 'ADD_FAVIE_THING',
        payload: thing
    };
}

function removeFavieThing(thing) {
    return {
        type: 'REMOVE_FAVIE_THING',
        payload: thing
    };
}

function favieThingsReducer(favieThings = [], action) {
    switch (action.type) {
        case 'ADD_FAVIE_THING':
            return [
                ...favieThings, action.payload
            ];
        case 'REMOVE_FAVIE_THING': {
            const newThings = favieThings.filter(thing => thing !== action.payload)
            return [
                ...favieThings, newThings
            ];
        }
    }
}

export {
    addFavieThing,
    removeFavieThing,
    favieThingsReducer
};