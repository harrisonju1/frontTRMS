import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import AppProvider from './components/AppProvider.js';

import reducers from "./reducers";
import submitclaim from "./components/submitclaim";
import login from "./components/login";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/submitclaim" component={submitclaim} />
                    <Route path="/" component={login} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector(".root"));
registerServiceWorker();
