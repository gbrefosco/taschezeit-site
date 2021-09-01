import React from "react";
import { Route, Switch } from 'react-router-dom';

import { BrowserRouter } from "react-router-dom";

import SignUp from '../src/components/singIn/signup';
import Login from '../src/components/singIn/login';
import Home from '../src/pages/Home';
import Profile from '../src/pages/Profile';
import Project from '../src/pages/Project';

function App() {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/singup" component={SignUp} />
                    <Route path="/home" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/project" component={Project} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;