import React, { useState } from "react";
import { CartState } from "../context/Context";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CartDetailPage = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [qty, setQty] = useState(1);

  function qtyIncrement() {
    setQty(qty + 1);
  }

  function qtyDecrement() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  const styles = {
    iconButton: {
      border: "none",
      backgroundColor: "white",
      borderRadius: "5px",
      padding: "10px 20px",
      marginTop: "20px",
    },
    redIcon: {
      color: "red",
      fontSize: "28px",
    },
  };

  // Calculate Subtotal and Total
  let subtotal = 0;
  cart.forEach((item) => {
    const itemTotal = item.price * qty;
    subtotal += itemTotal;
  });

  return (
    <div className="shopping-cart-wrap">
      <h1>Shopping Cart</h1>
      <div
        className="shopping-cart"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div className="cart-left">
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <div className="cart-inner" key={item.id}>
                  <img src={item.imageSrc} alt={item.name} />
                  <div className="cart-item-content">
                    <h3>{item.name}</h3>
                    <p className="desc-cart-inner">{item.desc}</p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        className="qty"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "180px",
                          marginTop: "20px",
                        }}
                      >
                        <button onClick={qtyDecrement}>-</button>
                        <p
                          style={{
                            width: "20px",
                            marginBottom: "0",
                            paddingTop: "7px",
                            textAlign: "center",
                          }}
                        >
                          {qty}
                        </p>
                        <button onClick={qtyIncrement}>+</button>
                      </div>
                    </div>

                    <h2 style={{ marginTop: "40px" }}>
                      Price: $<span>{item.price}</span>
                    </h2>

                    <IconButton
                      style={styles.iconButton}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })
                      }
                    >
                      <DeleteOutlineIcon style={styles.redIcon} />
                      <Typography
                        sx={{ px: 0, fontWeight: "600", marginLeft: "6px" }}
                      >
                        Remove From Cart
                      </Typography>
                    </IconButton>
                  </div>
                </div>
              );
            })
          ) : (
            <Typography sx={{ fontSize: "24px", p: 2 }}>
              Your shopping cart is empty.
            </Typography>
          )}
        </div>

        <div className="bill-right">
          <h2>CheckOut</h2>
          <Typography
            sx={{
              fontSize: "24px",
              px: 0,
              fontWeight: "600",
              marginLeft: "0px",
            }}
          >
            Total Payment : ${subtotal.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 4 }}
            disabled={cart.length === 0}
          >
            Proceed to Biling
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartDetailPage;
