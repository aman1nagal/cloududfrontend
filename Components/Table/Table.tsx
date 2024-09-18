import {
  ColumnDef,
  CoreRow,
  Row,
  RowData,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect, useState } from "react";

// @ts-ignore

import { Loader } from "../Loader";
import { ArrowDown, ArrowUp } from "./Icons";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    deleteRow: (rowId: string) => void;
  }
}

export interface TableI {
  data: any;
  columns: any;
  maxHeight?: any;
  isLoading?: boolean;
  onTableDismount?: () => void;
}

function Table({
  data = [],
  columns,
  maxHeight = 290,
  isLoading = false,
  onTableDismount = () => {},
}: TableI) {
  const [sorting, setSorting] = useState<any>([]);

  useEffect(() => {
    return () => onTableDismount();
  }, []);

  const table = useReactTable({
    data: data,
    columns,
    // getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
    enableRowSelection: true,
  });

  if (typeof window !== "undefined") {
    let Arr: any = [];
    const selectedRowModel = table?.getSelectedRowModel();
    if (selectedRowModel && selectedRowModel.flatRows) {
      selectedRowModel.flatRows.map((item) => Arr.push(item.original));
    }
    localStorage.setItem("items", JSON.stringify(Arr));
    window.dispatchEvent(new Event("storage"));
  } else {
    // console.log("we are running on the server");
  }

  // const handleChange = (e: any) => {

  //   // Check if Enter key is pressed
  //   if (e.key === "Enter") {
  //     e.preventDefault(); // Prevent default behavior
  //   } else {
  //     // If other keys are pressed, invoke the onSearchText callback
  //     onSearchText(e.target.value);
  //   }
  // };

  return (
    <>
      <Loader isLoading={isLoading} bgOpacity={0.3} />
      <div className="flex px-20 w-full bg-white relative z-20">
        <div className="overflow-y-auto border relative table-height main-table-wrap w-full">
          <table className="w-full  mainTable hidden md:table">
            <thead className="sticky z-20 top-0 w-full">
              {table.getHeaderGroups().map((headerGroup, index) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, index) => (
                    <th
                      key={index}
                      // style={{ ...getCommonPinningStyles(header?.column) }}

                      onClick={header.column.getToggleSortingHandler()}
                      className="py-2 md:py-3 px-4 text-black-b-250 uppercase font-semibold bg-white border-b border-[#A2A2A2]"
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={
                            "flex items-center gap-1 text-black-b-250 font-semibold uppercase"
                          }
                        >
                          {/* {header.column.getIsPinned()} */}
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.column.columnDef.header != "Action" &&
                            {
                              asc: (
                                <ArrowDown className="text-gray-o-480 min-w-3" />
                              ),
                              desc: (
                                <ArrowUp className="text-gray-o-480 min-w-3" />
                              ),
                            }[
                              (header.column.getIsSorted() as "asc" | "desc") ??
                                null
                            ]}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="z-10 relative bg-fuchsia-300">
              {table.getRowModel().rows.map((row, index) => (
                <tr
                  key={index}
                  className="bg-white relative group/item hover:bg-gray-50"
                >
                  {row.getVisibleCells().map((cell, index) => (
                    <td
                      key={index}
                      className={`py-2 px-4 text-gray-p-450 font-normal text-sm whitespace-nowrap tablecellData border-b border-gray-p-350 ${
                        row?.parentId != undefined && `bg-gray-o-70`
                      }`}

                      // style={{ ...getCommonPinningStyles(cell?.column) }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {data.length == 0 || data === undefined ? (
            <div
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
              }}
              className="flex py-4 text-center"
            >
              <div>NoDataFound</div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export { Table };
