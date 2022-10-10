import React, { useState, useEffect } from "react";
import ButtonDefault from "../Button/Default";
import Text from "../Input/Text";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Home from "../../container/Home";

const ModalAdd = (props) => {
  // console.log(props);
  let data = props.data;
  const [product, setProduct] = useState({});
  const handleValueChange = (val) => {};

  if (!props.show) {
    return null;
  }

  const addProduct = async () => {
    await axios
      .post(`http://localhost:1234/add-product`, {
        sku: product.sku,
        name: product.name,
        image: product.image,
        price: product.price,
        description: product.description,
      })
      .then((res) => {
        alert("berhasil add product : " + res.data.data.name);
        props.onClose();
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="modal-content bg-white w-3/4  px-4 divide-y-2 rounded">
        <div className="modal-header py-4 flex justify-between">
          <h4 className="modal-title m-0 font-semibold text-lg">Add Product</h4>
          <div className="cursor-pointer" onClick={props.onClose}>
            X
          </div>
        </div>
        <div className="modal-body py-4 space-y-3">
          <div className="w-full flex flex-row space-x-2">
            <div className="w-4/12">
              <label className="text-sm">SKU :</label>
              <Text
                name="sku"
                placeholder="Product SKU"
                onValueChange={(val) =>
                  handleValueChange(setProduct({ ...product, sku: val }))
                }
              />
            </div>
            <div className="w-4/12">
              <label className="text-sm">Product Name :</label>
              <Text
                name="name"
                placeholder="Input Product Name"
                onValueChange={(val) =>
                  handleValueChange(setProduct({ ...product, name: val }))
                }
              />
            </div>
            <div className="w-4/12">
              <label className="text-sm">Price :</label>
              <Text
                name="price"
                placeholder="Input Price"
                onValueChange={(val) =>
                  handleValueChange(setProduct({ ...product, price: val }))
                }
              />
            </div>
          </div>
          <div className="w-full flex flex-row space-x-2">
            <div className="w-4/12">
              <label className="text-sm">Image :</label>
              <Text
                name="image"
                placeholder="Input Image"
                onValueChange={(val) =>
                  handleValueChange(setProduct({ ...product, image: val }))
                }
              />
            </div>
            <div className="w-8/12">
              <label className="text-sm">Description :</label>
              <Text
                name="description"
                placeholder="Input Description"
                onValueChange={(val) =>
                  handleValueChange(
                    setProduct({ ...product, description: val })
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="modal-footer py-4 flex justify-end items-center space-x-2">
          <div onClick={props.onClose}>
            <ButtonDefault name="Close" color="bg-danger" />
          </div>
          <div onClick={addProduct}>
            <ButtonDefault name="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdd;
