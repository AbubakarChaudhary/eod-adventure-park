import React from "react";
import Button from "@mui/material/Button";
import { CartState } from "../context/Context";

const SingleProduct = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <div className="Card">
        <div>
          <img src={item.imageSrc} alt={item.name} />
        </div>
        <div className="card-content">
          <h2 className="pname">{item.name}</h2>
          <p className="pprice">
            <strong>${item.price}</strong>
          </p>
          <p className="pdesc">{item.desc}</p>
          <h2 className="ptime">
            <strong>{item.time}</strong>
          </h2>
          {cart.some((p) => p.id === item.id) ? (
            <Button
              variant="contained"
              color="error"
              size="large"
              sx={{ my: 1 }}
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item,
                })
              }
            >
              Remove From Cart
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: item,
                })
              }
              size="large"
              sx={{ my: 1 }}
            >
              Add To Cart
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
