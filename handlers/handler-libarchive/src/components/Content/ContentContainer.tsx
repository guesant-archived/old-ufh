import React from "react";
import { useContextSelector } from "use-context-selector";
import { ContentContext } from "./ContentContext";
import loadable from "@loadable/component";

const Dialog = loadable(() => import("@material-ui/core/Dialog"));

export const ContentContainer: React.FC = ({ children }) => {
  const isMaximized = useContextSelector(
    ContentContext,
    ({ isMaximized }) => isMaximized
  );

  if (isMaximized) {
    return (
      <Dialog open fullScreen fallback={<>{children}</>} children={children} />
    );
  }

  return <>{children}</>;
};
