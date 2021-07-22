import React, { memo } from "react";
import { GlobHandlerContextProvider } from "../../contexts/GlobHandlerContextProvider";
import RenderMatched from "../RenderMatched/RenderMatched";

const GlobHander = memo(() => (
  <GlobHandlerContextProvider>
    <RenderMatched />
  </GlobHandlerContextProvider>
));

export default GlobHander;
