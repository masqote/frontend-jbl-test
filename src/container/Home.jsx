import React, { Component } from "react";
import CardProduct from "../component/Card/CardProduct";
import Modal from "../component/Modal/Modal";
import axios from "axios";

class Home extends Component {
  state = {
    products: [],
    limit: 8,
    offset: 0,
    countProduct: 0,
    hidden: false,
    showModal: false,
    productModal: {},
  };

  componentDidMount() {
    this.getProduct();

    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setTimeout(() => {
          this.loadMore();
        }, 1000);
      }
    };
  }

  getProduct() {
    axios
      .get(`http://localhost:1234/get-product`, {
        params: {
          limit: this.state.limit,
          offset: this.state.offset,
        },
      })
      .then((res) => {
        this.setState({
          products: this.state.products.concat(res.data.data.prod_list),
          countProduct: res.data.data.count_prod,
        });
      });
  }

  loadMore = () => {
    this.setState(
      {
        offset: this.state.offset + 8,
      },
      () => {
        this.getProduct();

        if (this.state.offset >= this.state.countProduct) {
          setTimeout(() => {
            this.setState({
              hidden: true,
            });
          }, 1000);
        }
      }
    );
  };

  modalShow = (product) => {
    this.setState({
      productModal: product,
      showModal: true,
    });
  };

  modalHide = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <div>
        <div className="flex flex-row flex-wrap gap-3 p-4 justify-center md:justify-start items-center">
          {this.state.products.map((product, index) => {
            return (
              <div key={index} onClick={() => this.modalShow(product)}>
                <CardProduct
                  sku={product.sku}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </div>
            );
          })}
        </div>
        <div className="p-4 flex justify-center">
          {this.state.hidden ? (
            <div className=" text-bold text-lg">No more data!</div>
          ) : (
            <div className="text-bold text-lg animate-pulse animate-bounce">
              Loading...
            </div>
          )}
        </div>
        <Modal
          data={this.state.productModal}
          show={this.state.showModal}
          onClose={() => this.modalHide()}
        />
      </div>
    );
  }
}

export default Home;
