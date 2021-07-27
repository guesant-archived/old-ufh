import loadable from "@loadable/component";
import React from "react";
import { HomeContextProvider } from "./HomeContextProvider";
import HomeHeader from "./HomeHeader";

const HomeBody = loadable(() => import("./HomeBody"));

const Home = () => (
  <div>
    <HomeHeader />
    <HomeContextProvider>
      <HomeBody />
    </HomeContextProvider>
  </div>
);

export default Home;
