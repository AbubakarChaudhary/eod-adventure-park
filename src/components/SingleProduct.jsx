import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { CartState } from "../context/Context";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const SingleProduct = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [showAddSnackbar, setShowAddSnackbar] = useState(false); // State to control add to cart Snackbar visibility
  const [showRemoveSnackbar, setShowRemoveSnackbar] = useState(false); // State to control remove from cart Snackbar visibility

  // useEffect to show add to cart Snackbar when showAddSnackbar state changes
  useEffect(() => {
    if (showAddSnackbar) {
      setTimeout(() => {
        setShowAddSnackbar(false); // Hide add to cart Snackbar after a delay
      }, 1000); // 1000ms = 1 second, you can adjust this duration
    }
  }, [showAddSnackbar]);

  // useEffect to show remove from cart Snackbar when showRemoveSnackbar state changes
  useEffect(() => {
    if (showRemoveSnackbar) {
      setTimeout(() => {
        setShowRemoveSnackbar(false); // Hide remove from cart Snackbar after a delay
      }, 1000); // 1000ms = 1 second, you can adjust this duration
    }
  }, [showRemoveSnackbar]);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
    setShowAddSnackbar(true); // Show add to cart Snackbar when item is added to cart
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
    setShowRemoveSnackbar(true); // Show remove from cart Snackbar when item is removed from cart
  };

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
              onClick={removeFromCart}
            >
              Remove From Cart
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={addToCart}
              size="large"
              sx={{ my: 1 }}
            >
              Add To Cart
            </Button>
          )}
        </div>
      </div>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={showAddSnackbar} // Use showAddSnackbar to control add to cart Snackbar visibility
          autoHideDuration={1000}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Added to Cart
          </Alert>
        </Snackbar>
        <Snackbar
          open={showRemoveSnackbar} // Use showRemoveSnackbar to control remove from cart Snackbar visibility
          autoHideDuration={1000}
        >
          <Alert severity="error" sx={{ width: "100%" }}>
            Removed from Cart
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default SingleProduct;
