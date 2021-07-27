import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import filesize from "filesize";
import React, { memo } from "react";
import { useContextSelector } from "use-context-selector";
import { AbstractOpenedFile } from "../AbstractOpenedFile";
import { OpenedFilesContext } from "../contexts/OpenedFilesContext";

type FilesTableProps = Omit<
  React.ComponentProps<typeof DataGrid>,
  "rows" | "columns" | "selectionModel" | "onSelectionModelChange"
> & {
  onSelectFile?: (openedFile: AbstractOpenedFile) => void;
  selectionModel?: AbstractOpenedFile["id"][];
  onSelectionModelChange?: (selectionModel: AbstractOpenedFile["id"][]) => void;
};

const FilesTableColumns: GridColDef[] = [
  {
    flex: 1,
    field: "name",
    headerName: "Nome",
  },
  {
    width: 190,
    align: "right",
    sortable: true,
    headerAlign: "right",
    field: "lastModified",
    headerName: "Última alteração",
    valueFormatter: (params) =>
      params.value
        ? formatDistance(new Date(+params.value), new Date(), { locale: ptBR })
        : "N/A",
  },
  {
    width: 150,
    field: "size",
    align: "right",
    sortable: true,
    headerName: "Tamanho",
    headerAlign: "right",
    valueFormatter: (a) => filesize(+a.value!, { standard: "iec" }),
  },
];

const FilesTable: React.FC<FilesTableProps> = memo(
  ({ onSelectFile, ...props }) => {
    const openedFilesList = useContextSelector(
      OpenedFilesContext,
      ({ list }) => list
    );

    return (
      <DataGrid
        pageSize={5}
        rows={openedFilesList}
        disableSelectionOnClick
        columns={FilesTableColumns}
        onRowClick={(e) => void onSelectFile?.(e.row as AbstractOpenedFile)}
        {...(props as any)}
      />
    );
  }
);

export default FilesTable;
