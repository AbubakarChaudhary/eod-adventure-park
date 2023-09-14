import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";

const Cart = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <>
      <div className="cart-section-wrap">
        <div className="section-heading-para">
          <h2>Adults Combos</h2>
          <p>Anyone above 4 feets is eligible for these tickets</p>
        </div>
        <div className="cart-wrap">
          {products.map((item) => (
            <SingleProduct item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
