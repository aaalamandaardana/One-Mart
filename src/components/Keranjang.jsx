import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { tambahItem, hapusItem } from "../redux/action";

const Keranjang = () => {
  const state = useSelector((state) => state.handleKeranjang);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(tambahItem(item));
  };
  const handleDel = (item) => {
    dispatch(hapusItem(item));
  };

  const kosongKeranjang = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Keranjang Kamu Kosong</h3>
          </div>
        </div>
      </div>
    );
  };
  const KeranjangItems = (keranjangItem) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={keranjangItem.image}
                  alt={keranjangItem.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{keranjangItem.title}</h3>
                <p className="lead fw-bold">
                  {keranjangItem.qty} x IDR {keranjangItem.price}k = IDR {keranjangItem.qty * keranjangItem.price}k
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDel(keranjangItem)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(keranjangItem)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              Checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && kosongKeranjang()}
      {state.length !== 0 && state.map(KeranjangItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Keranjang;