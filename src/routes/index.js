import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';

export default function index() {
    return(
        <Switch>
            <Route path="/" exact component={Homepage} />
        </Switch>
    )
}