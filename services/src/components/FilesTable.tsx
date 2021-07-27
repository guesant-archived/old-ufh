import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { AbstractOpenedFile } from "../AbstractOpenedFile";
import { OpenedFilesContext } from "../contexts/OpenedFilesContext";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import filesize from "filesize";
import React, { memo } from "react";
import { useContextSelector } from "use-context-selector";

type FilesTableProps = {
  selection?: boolean;
  onSelectFile?: (openedFile: AbstractOpenedFile) => void;
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
  ({ onSelectFile, selection = true }) => {
    const openedFilesList = useContextSelector(
      OpenedFilesContext,
      ({ list }) => list
    );

    console.log("aaaaaasdasd", openedFilesList);
    return (
      <DataGrid
        pageSize={5}
        checkboxSelection={selection}
        rows={openedFilesList}
        disableSelectionOnClick
        columns={FilesTableColumns}
        onRowClick={(e) => void onSelectFile?.(e.row as AbstractOpenedFile)}
      />
    );
  }
);

export default FilesTable;
