import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { CartState } from "../context/Context";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ShoppingCartDropdown = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const styles = {
    iconButton: {
      "&:hover": {
        backgroundColor: "transparent", // Remove hover effect
      },
      "&:focus": {
        outline: "none", // Remove focus effect
      },
      border: "none", // Remove border
      padding: "0",
    },
    redIcon: {
      color: "red", // Change the color of the icon to red
    },
  };

  const open = Boolean(anchorEl);
  const id = open ? "shopping-cart-popover" : undefined;

  return (
    <Badge badgeContent={cart.length} color="primary" sx={{ mx: 2 }}>
      <IconButton color="black" aria-describedby={id} onClick={handleClick}>
        <ShoppingCartIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <>
                <div className="cart-items">
                  <img src={item.imageSrc} alt={item.name} />
                  <div className="cart-item-content">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <IconButton
                      style={styles.iconButton}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })
                      }
                    >
                      <RemoveCircleOutlineIcon style={styles.redIcon} />
                    </IconButton>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <Typography sx={{ p: 2 }}>Your shopping cart is empty.</Typography>
        )}

        <hr />
        <div className="checkout-button">
          <Link to="/cartInner">
            <Button
              disabled={cart.length === 0}
              variant="contained"
              size="medium"
              sx={{ my: 2, mx: 2 }}
            >
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </Popover>
    </Badge>
  );
};

export default ShoppingCartDropdown;
