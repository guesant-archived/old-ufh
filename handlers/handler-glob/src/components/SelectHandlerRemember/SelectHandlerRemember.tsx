import { makeStyles } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";
import { useContextSelector } from "use-context-selector";
import { GlobHandlerContext } from "../../contexts/GlobHandlerContext";
import { useOpenedFileGlob } from "../../hooks/useOpenedFileGlob";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const SelectHandlerRemember = () => {
  const styles = useStyles();

  const glob = useOpenedFileGlob();

  const rememberSelection = useContextSelector(
    GlobHandlerContext,
    ({ rememberSelection }) => rememberSelection
  );

  const toggleRememberSelection = useContextSelector(
    GlobHandlerContext,
    ({ toggleRememberSelection }) => toggleRememberSelection
  );

  return (
    <div className={styles.container}>
      <FormControlLabel
        control={
          <Checkbox
            checked={rememberSelection}
            onChange={toggleRememberSelection}
          />
        }
        label={`Salvar minha decisão para os arquivos ${glob}`}
      />
    </div>
  );
};

export default SelectHandlerRemember;
