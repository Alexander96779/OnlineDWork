import { combineReducers } from 'redux';
import signupUser from './modules/Signup/reducer';
import loginUser from './modules/Login/reducer';

const rootReducer = combineReducers({
    signupUser,
    loginUser
});

export default rootReducer;