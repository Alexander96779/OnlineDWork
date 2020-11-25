import React, { Component } from 'react';
import app from 'firebase/app';
import 'firebase/auth';

 const config = {
    apiKey: "AIzaSyCdgjjP3qz6HD2431JHSxDprpJcIFoR1QM",
    authDomain: "onlinedwork-4e6ec.firebaseapp.com",
    databaseURL: "https://onlinedwork-4e6ec.firebaseio.com",
    projectId: "onlinedwork-4e6ec",
    storageBucket: "onlinedwork-4e6ec.appspot.com",
    messagingSenderId: "189850720170",
    appId: "1:189850720170:web:5790db940dd99afd41bdd3"
  };

  class Firebase extends Component {
    constructor(props){
      super(props);
      app.initializeApp(config);
      this.auth = app.auth;
    }
    signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    signOut = () => this.auth.signOut();
    updatePassword = (password) => this.auth.currentUser.updatePassword(password);
}
export default Firebase;