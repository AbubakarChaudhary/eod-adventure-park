import React from "react";
import Banner from "./Banner";
import ComboBanner from "./ComboBanner";
import Activities from "./Activities";
import Cart from "./Cart";

const Home = () => {
  return (
    <>
      <Banner />
      <ComboBanner />
      <Cart />
      <Activities />
    </>
  );
};

export default Home;
