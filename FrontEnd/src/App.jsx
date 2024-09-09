import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <div id="main">
      <NavBar />
      <div className="pilot">
        <div className="left">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <div className="right">
          <Routes>
            <Route path="/" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
