import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import "../src/assets/vendor/nucleo/css/nucleo.css";
import "../src/assets/vendor/font-awesome/css/font-awesome.min.css";
import "../src/assets/scss/argon-design-system-react.scss";
import ProjectItem from './projectItm.component';
import EventItems from './eventItems.component';

import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
            <Route path="/" exact render={props => <App />} />
            <Route
                path="/project"
                exact
                render={props => <ProjectItem />} />
            <Route
                path="/events"
                exact
                render={props => <EventItems />} />
        </Switch>
    </BrowserRouter>

    , document.getElementById('root'));

serviceWorker.register({
    onUpdate: registration => {
        const waitingSW = registration.waiting;

        if (waitingSW) {
            alert("A new version of the app is available.Please update")
            waitingSW.addEventListener("statechange", event => {
                if (event.target.state === 'activated') {
                    window.location.reload();
                }
            });
            waitingSW.postMessage({ type: "SKIP_WAITING" })
        }
    }
})
