import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Carts = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-5" style={{ width: "54%" }}>
        {cart.length == 0 ? (
          <>
            <div className="text-center">
              <h1>Your Cart is Empty</h1>
              <Link to={"/"} className="btn btn-warning">
                Continue Shopping...
              </Link>
            </div>
          </>
        ) : (
          cart.map((product) => {
           <Cart product={product}/>
          })
        )}
      </div>

      {cart.length != 0 && (
        <div
          className="container text-center my-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="btn btn-warning mx-5 ">CheckOut</button>
          <button onClick={() => setCart("")} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Carts;
