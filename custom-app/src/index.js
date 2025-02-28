import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from "./reducers"
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import logger from "redux-logger"

const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
