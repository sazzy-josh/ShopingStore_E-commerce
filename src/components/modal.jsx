import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, showModal } from "../features/cartslice";

const Modal = () => {
  const { id } = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="Modal-head">
          Are you sure you want to Remove all Items From Cart?
        </h3>

        <div className="btns">
          {" "}
          <button
            className="red-btn"
            onClick={() => {
              dispatch(showModal());
              dispatch(clearCart());
            }}
          >
            Yes
          </button>{" "}
          <button
            className="green-btn"
            onClick={() => {
              dispatch(showModal());
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
