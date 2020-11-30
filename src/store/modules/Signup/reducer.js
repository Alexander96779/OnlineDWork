const initialState = {
    isLoading: false,
    user:null,
    error: null
};

const signupUser = (state = initialState, action) =>{
    const { type, payload, error } = action;
    switch(type) {
        case 'SIGNUP_START': {
            return {
                ...state,
                isLoading: true
            };
        }
        case 'SIGNUP_SUCCESS': {
            return {
                ...state,
                user: payload,
                isLoading: false
            };
        }
        case 'SIGNUP_ERROR': {
            return {
                ...state,
                error: error,
                isLoading: false
            };
        }
        default: {
            return state;
        }
    }
}

export default signupUser;