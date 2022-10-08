import React, { Component } from "react";
import CardProduct from "../component/Card/CardProduct";
import axios from "axios";

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:1234/get-product`).then((res) => {
      this.setState({ products: res.data.data });
    });
  }

  render() {
    return (
      <div className="flex flex-row flex-wrap gap-2 p-4">
        {this.state.products.map((product) => {
          return (
            <CardProduct
              key={product.sku}
              sku={product.sku}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
    );
  }
}

export default Home;
