import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import RemoveIcon from "@material-ui/icons/Remove";
import React, { Fragment, useCallback } from "react";
import { IHandlerDefinitionConfigComponentProps } from "@ufh/react-services/src/types/IHandlerDefinition";
import { ILibArchiveConfig } from "../types/ILibArchiveConfig";

const LibArchiveHandlerConfig: React.FC<
  IHandlerDefinitionConfigComponentProps<ILibArchiveConfig>
> = ({ config, updateConfig }) => {
  const addHightlightPattern = useCallback(() => {
    updateConfig((config) => {
      const lastPattern = config.highlightPatterns?.slice(-1)[0];
      if (lastPattern === undefined || lastPattern.length > 0) {
        config.highlightPatterns = ([] as string[]).concat(
          config.highlightPatterns ?? [],
          ""
        );
      }
    });
  }, [updateConfig]);

  const removeHightlightPattern = useCallback(
    (index: number) => {
      updateConfig((config) => {
        config.highlightPatterns = (config.highlightPatterns || []).filter(
          (_, idx) => idx !== index
        );
      });
    },
    [updateConfig]
  );

  return (
    <>
      <DialogTitle>Destacar Arquivos</DialogTitle>
      <div style={{ padding: "1rem" }}>
        <div
          style={{
            gap: "8px",
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "1fr auto",
          }}
        >
          {config.highlightPatterns?.map((i, idx) => {
            return (
              <Fragment key={idx}>
                <TextField
                  fullWidth
                  label="Padrão"
                  variant="filled"
                  onChange={(e) => {
                    updateConfig((i) => {
                      i.highlightPatterns = i.highlightPatterns ?? [];
                      i.highlightPatterns[idx] = e.target.value;
                    });
                  }}
                  defaultValue={i}
                />
                <IconButton
                  color="inherit"
                  onClick={() => removeHightlightPattern(idx)}
                  children={<RemoveIcon />}
                />
              </Fragment>
            );
          })}
          <Button onClick={addHightlightPattern}>Adicionar novo Padrão</Button>
        </div>
      </div>
    </>
  );
};

export default LibArchiveHandlerConfig;
