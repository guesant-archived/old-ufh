import loadable from "@loadable/component";
import React from "react";
import { HomeContextProvider } from "./HomeContextProvider";
import HomeHeader from "./HomeHeader";

const HomeContent = loadable(() => import("./HomeContent"));

const Home = () => (
  <div>
    <HomeHeader />
    <HomeContextProvider>
      <HomeContent />
    </HomeContextProvider>
  </div>
);

export default Home;
