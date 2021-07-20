import React from "react";
import AppBar from "../AppBar";
import HomeHeaderMenu from "./HomeHeaderMenu";

const HomeHeader = () => {
  return (
    <AppBar title="Início">
      <HomeHeaderMenu />
    </AppBar>
  );
};

export default HomeHeader;
