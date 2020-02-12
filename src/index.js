import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import "../src/assets/vendor/nucleo/css/nucleo.css";
import "../src/assets/vendor/font-awesome/css/font-awesome.min.css";
import "../src/assets/scss/argon-design-system-react.scss";


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exaxt render={props =><App {...props} />} />
            <Redirect ro='/' />
        </Switch>

    </BrowserRouter>
    , document.getElementById('root'));

