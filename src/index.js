import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom"
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {PsychicProvider} from "./context";

ReactDOM.render(
    <PsychicProvider>
        <Router>
            <App />
        </Router>
    </PsychicProvider>
, document.getElementById('root'));

