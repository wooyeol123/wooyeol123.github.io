import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "react-app-polyfill/ie9"; // For IE 9-11 support
import "react-app-polyfill/ie11"; // For IE 11 support

ReactDOM.render(<App />, document.getElementById("root"));
