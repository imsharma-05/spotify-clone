import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker";
import {DataLayer} from "./DataLayer";
import reducer, { intitialState } from './reducer';


// import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

  <DataLayer intitialState = {intitialState} reducer = {reducer}>
    <App />
  </DataLayer>

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
reportWebVitals();
