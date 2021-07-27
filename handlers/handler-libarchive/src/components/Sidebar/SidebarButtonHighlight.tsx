import ToggleButton from "@material-ui/lab/ToggleButton";
import StarsIcon from "@material-ui/icons/Stars";
import React from "react";
import { useContextSelector } from "use-context-selector";
import { LibArchiveSidebarContext } from "../../contexts/LibArchiveSidebarContext";

export const SidebarButtonHighlight = () => {
  const isHighlightMode = useContextSelector(
    LibArchiveSidebarContext,
    ({ isHighlightMode }) => isHighlightMode
  );

  const toggleHighlightMode = useContextSelector(
    LibArchiveSidebarContext,
    ({ toggleHighlightMode }) => toggleHighlightMode
  );

  return (
    <ToggleButton
      size="small"
      selected={isHighlightMode}
      onChange={toggleHighlightMode}
    >
      <StarsIcon fontSize="small" />
    </ToggleButton>
  );
};
