import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "../container/About";
import Home from "../container/Home";

class BaseRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default BaseRoute;
