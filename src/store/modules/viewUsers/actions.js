import cogoToast from 'cogo-toast';
import firebase from 'firebase/app';
import { 
GET_ALL_START,
GET_ALL_SUCCESS,
GET_ALL_ERROR
} from './actionTypes';

const apiStart = () => ({
    type: GET_ALL_START,
});
const apiSuccess = (payload) => ({
    type: GET_ALL_SUCCESS,
    payload
});

const apiError = (error) => ({
    type: GET_ALL_ERROR,
    error,
});

const showErrorMessage = (message) => {
    cogoToast.error(message, { position: 'top-right' });
};


export const getAll = () => (dispatch) => {
    firebase.auth().onAuthStateChanged(function(user) {
        if(user){
            const userId = user.uid;
            dispatch(apiStart());
            firebase
            .firestore()
            .collection('users')
            .get()
            .then((res) => {
                let currentUsers = [];
                for(var i = 0; i < res.docs.length; i++) {
                    let user = res.docs[i].data();
                    user.id = res.docs[i].id;
                    currentUsers.push(user);
                }
                const userProfile = currentUsers.find((user) => user.id === userId);
                dispatch(apiSuccess(userProfile));
            })
            .catch((err) => {
                dispatch(apiError(err));
                showErrorMessage('Error displaying products');
            });
        }
    });
}