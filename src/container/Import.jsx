import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

class Import extends Component {
  state = {
    showButton: true,
    showMessage: false,
    productDuplicate: 0,
    productSuccess: 0,
  };

  importProduct = async () => {
    this.setState({
      showButton: false,
    });
    await axios
      .post(`http://localhost:1234/import-product`, {})
      .then((res) => {
        let data = res.data.data;
        this.setState({
          showButton: true,
          showMessage: true,
          productDuplicate: data.product_duplicate,
          productSuccess: data.product_success,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div className=" bg-white font-semibold shadow-lg p-3 flex justify-center space-x-10 ">
          <Link to="/">Home</Link>
          <Link to="/import">Import Product</Link>
        </div>
        <div className="p-4">
          <span>Click to import product : </span>
          <div onClick={this.importProduct}>
            {this.state.showButton ? (
              <button
                className={
                  "px-4 py-2 bg-primary rounded-lg opacity-80 text-white  hover:bg-opacity-80 "
                }
              >
                Import
              </button>
            ) : (
              <div className="py-4 animate-pulse animate-bounce text-lg">
                Loading...
              </div>
            )}
          </div>
        </div>
        {this.state.showMessage ? (
          <div className="flex items-center text-lg text-primary flex-col">
            <span>Product Duplicate : {this.state.productDuplicate}</span>
            <span>Product Success : {this.state.productSuccess}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Import;
