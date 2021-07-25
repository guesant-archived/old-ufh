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
    const {
      config,
      definition: { Component },
    } = selectedHandlerDefinition;
    return createElement(Component, { config });
  }

  return <SelectHandler />;
});

export default RenderMatched;
