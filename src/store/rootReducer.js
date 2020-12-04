import { combineReducers } from 'redux';
import signupUser from './modules/Signup/reducer';
import loginUser from './modules/Login/reducer';
import getUserData from './modules/viewUsers/reducer';

const rootReducer = combineReducers({
    signupUser,
    loginUser,
    getUserData
});

export default rootReducer;