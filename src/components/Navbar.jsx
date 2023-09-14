import * as React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "/public/logo.png";
import ShoppingCartDropdown from "./CartPopup";

const drawerWidth = 240;
const navItems = [
  "Adventure Activities",
  "Park Information",
  "Events & Groups",
  "Annual Pass",
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "left" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Button variant="outlined" size="medium" sx={{ my: 1, mx: 1 }}>
        Buy Entery Tickets
      </Button>
      <ShoppingCartDropdown sx={{ mx: 0 }} />
      {/*   <Button variant="contained" size="medium" sx={{ my: 1, mx: 1 }}>
        Log In
      </Button> */}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", my: 2 }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "#fff" }}>
        <Toolbar sx={{ justifyContent: "space-between", my: 1, px: 2 }}>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#707070" }}>
                {item}
              </Button>
            ))}

            <ShoppingCartDropdown sx={{ mx: 0 }} />
            {/*  <Button variant="contained" size="large">
              Log In
            </Button> */}
            <Button variant="outlined" size="large" sx={{ ml: 2, mr: 2 }}>
              Buy Entery Tickets
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
