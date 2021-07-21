import React, { memo } from "react";
import { GlobHandlerContextProvider } from "../contexts/GlobHandlerContextProvider";
import RenderMatchedGlobHandler from "./RenderMatchedGlobHandler";

const GlobHander = memo(() => (
  <div style={{ height: "100%" }}>
    <GlobHandlerContextProvider>
      <RenderMatchedGlobHandler />
    </GlobHandlerContextProvider>
  </div>
));

export default GlobHander;
