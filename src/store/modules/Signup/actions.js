import firebase from 'firebase';
import cogoToast from 'cogo-toast'; 
import { 
SIGNUP_START,
SIGNUP_SUCCESS,
SIGNUP_ERROR
} from './actionTypes';

const showErrorMessage = (message) => {
    cogoToast.error(message, { position: 'top-right' });
};

const showSuccessMessage = (message) => {
    cogoToast.success(message, { position: 'top-right' });
};

export const signupStart = () =>({
    type: SIGNUP_START,
});

export const signupSuccess = (payload) =>({
    type: SIGNUP_SUCCESS,
    payload
});

export const signupError = (error) =>({
    type: SIGNUP_ERROR,
    error
});

// const saveImage = async (id, image) => {
//     const imageFile = image;
//     const storageRef = firebase.storage().ref();
//     const uploadTask = storageRef.child(`products/${id}/${imageFile.name}`);
//     await uploadTask.put(imageFile);
//     const imageUrl = await uploadTask.getDownloadURL();
//         if (!imageUrl) {
//             showSuccessMessage('Errod adding profile picture');
//         }
//         return imageUrl;
// };

export const signup = (firstname, lastname, email, password, phonenumber, profilePic,
      dateOfBirth, gender, category, jobTitle) => async (dispatch) => {
    if(firstname !== '' && lastname !== '' && email !== '' && password !== '' && phonenumber !== '' &&
        profilePic !== '' && dateOfBirth !== '' && gender !== '' && category !== '' && jobTitle !== '') {
        dispatch(signupStart());
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then( async (res) => {
            const storageRef = firebase.storage().ref();
            const uploadTask = storageRef.child(`users/${res.user.uid}/${profilePic}`);
            await uploadTask.put(profilePic);
            const imageUrl = await uploadTask.getDownloadURL();
            await firebase
            .firestore()
            .collection('users').doc(res.user.uid).set({
                firstName: firstname,
                lastName: lastname,
                phoneNumber: phonenumber,
                profilePic: imageUrl,
                dateOfBirth: dateOfBirth,
                gender: gender,
                category: category,
                jobTitle: jobTitle,
                created: firebase.firestore.Timestamp.now()
            })
        }).then(() => {
            dispatch(signupSuccess());
            showSuccessMessage('User account created successfully');
        }).catch((err) =>{
            if (err.code === 'auth/email-already-in-use') {
                showErrorMessage('Email or password already in use');
                console.log(err);
            } else {
            console.log(err);
            showErrorMessage('Errod adding user to firestore');
            }
            dispatch(signupError(err));
        })
    } else {
        showErrorMessage('All fields are required');
        dispatch(signupError());
    }
};
