import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Import from "../container/Import";
import Home from "../container/Home";

class BaseRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/import" element={<Import />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default BaseRoute;
