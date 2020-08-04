import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import conf from "./config.json";
import * as serviceWorker from './serviceWorker';

let root = document.getElementById("root");

ReactDOM.render(<App />, root);
serviceWorker.register();
