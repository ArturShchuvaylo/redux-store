const initialState = {
    phones: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PHONES_LOADED':
            return {
                phones: action.payload,
            }


        default:
            return state;
    }
}

export default reducer;