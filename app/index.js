import React from "react";
import ReactDOM from "react-dom";
import AppInit from "./AppInit";
import Tap from '@tapfiliate/tapfiliate-js';

if (__PERFORMANCE_DEVTOOL__) {
    const {registerObserver} = require("react-perf-devtool");
    registerObserver();
}

const rootEl = document.getElementById("content");
const render = () => {
    Tap.init('26943-1f07d6');
    ReactDOM.render(<AppInit />, rootEl);
};
render();
