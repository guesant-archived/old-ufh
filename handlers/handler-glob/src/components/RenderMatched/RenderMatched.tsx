import React, { createElement, memo } from "react";
import { useContextSelector } from "use-context-selector";
import { GlobHandlerContext } from "../../contexts/GlobHandlerContext";
import loadable from "@loadable/component";

const SelectHandler = loadable(() => import("../SelectHandler/SelectHandler"));

const RenderMatched = memo(() => {
  const selectedHandlerDefinition = useContextSelector(
    GlobHandlerContext,
    ({ selectedHandlerDefinition }) => selectedHandlerDefinition
  );

  if (selectedHandlerDefinition) {
    return createElement(selectedHandlerDefinition.Component, {});
  }

  return <SelectHandler />;
});

export default RenderMatched;
