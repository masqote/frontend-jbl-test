import React, { Component } from "react";
import CardProduct from "../component/Card/Product";
import ModalEdit from "../component/Modal/ModalEdit";
import ModalAdd from "../component/Modal/ModalAdd";
import ButtonDefault from "../component/Button/Default";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

class Home extends Component {
  state = {
    products: [],
    limit: 8,
    offset: 0,
    countProduct: 0,
    hidden: false,
    showModalEdit: false,
    showModalAdd: false,
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
        if (res.data.data.count_prod > 0) {
          this.setState({
            products: this.state.products.concat(res.data.data.prod_list),
            countProduct: res.data.data.count_prod,
          });
        } else {
          this.setState({
            hidden: true,
          });
        }
      })
      .catch((err) => {
        this.setState({
          hidden: true,
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

  modalShowAdd = () => {
    document.body.style.overflow = "hidden";
    this.setState({
      showModalAdd: true,
    });
  };

  modalHideAdd = () => {
    document.body.style.overflow = "unset";
    this.setState({
      showModalAdd: false,
    });
  };

  modalShow = (product) => {
    document.body.style.overflow = "hidden";
    this.setState({
      productModal: product,
      showModalEdit: true,
    });
  };

  modalHide = () => {
    document.body.style.overflow = "unset";
    this.setState({
      showModalEdit: false,
    });
  };

  render() {
    return (
      <div>
        <div className=" bg-white font-semibold shadow-lg p-3 flex justify-center space-x-10 ">
          <Link to="/">Home</Link>
          <Link to="/import">Import Product</Link>
        </div>
        <div
          className=" flex justify-end p-5"
          onClick={() => this.modalShowAdd()}
        >
          <ButtonDefault name="Add Product" />
        </div>
        <div className="flex flex-row flex-wrap gap-3 p-4 justify-center md:justify-start items-center">
          {this.state.products.map((product, index) => {
            return (
              <div
                key={index}
                onClick={() => this.modalShow(product)}
                className="cursor-pointer hover:opacity-80"
              >
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
            <div className=" text-bold text-lg">No data!</div>
          ) : (
            <div className="text-bold text-lg animate-pulse animate-bounce">
              Loading...
            </div>
          )}
        </div>
        <ModalEdit
          data={this.state.productModal}
          show={this.state.showModalEdit}
          onClose={() => this.modalHide()}
        />
        <ModalAdd
          show={this.state.showModalAdd}
          onClose={() => this.modalHideAdd()}
        />
      </div>
    );
  }
}

export default Home;
