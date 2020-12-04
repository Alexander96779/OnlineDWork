const initialState = {
    isLoading: false,
    user: { },
    error: null
};


const getUserData = (state = initialState, action) => {
    const { type, payload, error } = action;

    switch(type){
        case 'GET_ALL_START': {
            return{
                ...state,
                isLoading: true,
            };
        }
        case 'GET_ALL_SUCCESS': {
            return{
                ...state,
                user: payload,
                isLoading: false,
            };
        }
        case 'GET_ALL_ERROR': {
            return{
                ...state,
                error: error,
                isLoading: false,
            };
        }
        default: {
            return state;
        }
    }
}

export default getUserData;