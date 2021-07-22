import loadable from "@loadable/component";
import React from "react";
import { HomeContextProvider } from "./HomeContextProvider";
import HomeHeader from "../HomeHeader/HomeHeader";

const HomeBody = loadable(() => import("../HomeBody/HomeBody"));

const Home = () => (
  <div>
    <HomeHeader />
    <HomeContextProvider>
      <HomeBody />
    </HomeContextProvider>
  </div>
);

export default Home;
