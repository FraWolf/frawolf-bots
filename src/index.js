import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import conf from "./config.json";
import * as serviceWorker from './serviceWorker';

export const config = conf;
console.log("Using API " + config.API_BASE);

let root = document.getElementById("root");

ReactDOM.render(<App />, root);
serviceWorker.register();
