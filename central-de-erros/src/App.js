import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";
import Routes from "./routes";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
