/* Imports */
import React from "react";
import "./styles/css/main.css";
import { Navbar, Home } from "./hooks/index";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
