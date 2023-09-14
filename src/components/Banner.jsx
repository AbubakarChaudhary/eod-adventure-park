import React from "react";
import Typography from "@mui/material/Typography";

function Banner() {
  const yellowColor = {
    color: "yellow",
  };
  return (
    <>
      <div className="main-banner">
        <div>
          <Typography
            variant="h1"
            style={{ color: "white", fontSize: "42px", zIndex: 99 }}
          >
            Welcome to <span style={yellowColor}>EOD Adventure Park!</span>
          </Typography>
          <br />
          <Typography
            variant="body1"
            style={{ color: "white", fontSize: "16px" }}
          >
            EOD Largest Family Entertainment Center, where excitement and fun
            await at every turn! Immerse yourself in a world of thrilling rides,
            interactive games, and unforgettable experiences for all ages.
            Adventure Park INDIA, offers parents relax in our tranquil picnic
            areas. With delicious food options and friendly staff, our family
            adventure park is the perfect destination for creating lifelong
            memories together. Join us today and let the adventure begin!
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Banner;
