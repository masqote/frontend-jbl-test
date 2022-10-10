import React, { useState, useEffect } from "react";
import ButtonDefault from "../Button/Default";
import Text from "../Input/Text";

const Modal = (props) => {
  // console.log(props);
  let data = props.data;
  const [product, setProduct] = useState({});
  const handleValueChange = (val) => {};

  useEffect(() => {
    setProduct({
      sku: data.sku,
      name: data.name,
    });
  }, [data]);

  if (!props.show) {
    return null;
  }

  const updateProduct = () => {
    console.log(product);
  };

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="modal-content bg-white w-3/4  px-4 divide-y-2 rounded">
        <div className="modal-header py-4 flex justify-between">
          <h4 className="modal-title m-0 font-semibold text-lg">
            Edit Product : {props.data.name}
          </h4>
          <div className="cursor-pointer" onClick={props.onClose}>
            X
          </div>
        </div>
        <div className="modal-body py-4 ">
          <div className="w-full flex flex-row space-x-2">
            <div className="w-4/12">
              <label className="text-sm">SKU :</label>
              <Text
                value={product.sku ?? ""}
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
                value={product.name ?? ""}
                name="name"
                placeholder="Input Product Name"
                onValueChange={(val) =>
                  handleValueChange(setProduct({ ...product, name: val }))
                }
              />
            </div>
          </div>
        </div>
        <div className="modal-footer py-4 flex justify-end items-center space-x-2">
          <div onClick={props.onClose}>
            <ButtonDefault name="Close" color="bg-danger" />
          </div>
          <div onClick={updateProduct}>
            <ButtonDefault name="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
