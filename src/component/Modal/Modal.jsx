import ButtonDefault from "../Button/Default";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="modal-content bg-white w-3/4  px-4 divide-y-2 rounded">
        <div className="modal-header py-4">
          <h4 className="modal-title m-0 font-semibold text-lg">
            Edit Product : {props.data.name}
          </h4>
        </div>
        <div className="modal-body py-4 ">{props.data.name}</div>
        <div className="modal-footer py-4 flex justify-end items-center space-x-2">
          <div onClick={props.onClose}>
            <ButtonDefault name="Close" color="bg-danger" />
          </div>
          <div>
            <ButtonDefault name="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
