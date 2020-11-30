import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

export default function index() {
    return(
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/newUser" exact component={Signup} />
            <Route path="/login" exact component={Login} />
        </Switch>
    )
}