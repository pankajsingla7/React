import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initialTodos } from "./initialTodos";

ReactDOM.render(<App  { ...initialTodos } />, document.getElementById("root"));
