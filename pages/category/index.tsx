import React, { useMemo, useRef, useState } from "react";
import CreateGroupForm from "../../Components/CreateGroupForm";
import { Table } from "../../Components/Table/Table";
import { usePopper } from "react-popper";
import OptionPopup from "../../Components/OptionPopup";
import { Action } from "../../Components/Table/Icons";
import { useListAllCategoryQuery } from "../../slices/auth";

// ActionCell component for the "Action" column
const ActionCell = ({ row, setDataForUpdateCategory, setOpenForm }) => {
  const refElement = useRef();
  const popElement = useRef();
  const [showFilter, setShowFilter] = useState(false);

  const { styles, attributes } = usePopper(
    refElement.current,
    popElement.current,
    {
      placement: showFilter ? "left-start" : "auto",
      strategy: "fixed",
      modifiers: [
        {
          name: "preventOverflow",
          options: {
            padding: 16,
          },
        },
        {
          name: "flip",
          options: {
            fallbackPlacements: [
              "bottom-start",
              "bottom-end",
              "top-start",
              "top-end",
              "left-start",
              "left-end",
              "right-start",
              "right-end",
            ],
          },
        },
      ],
    }
  );

  const viewEdit = () => {
    setDataForUpdateCategory(row.original);
    setOpenForm(true);
    setShowFilter(false);
  };

  const actions = [{ text: "Edit", action: () => viewEdit() }];

  const Optionpopup = () => (
    <OptionPopup actions={actions} hideModal={() => setShowFilter(false)} />
  );

  return (
    <div>
      <button
        ref={refElement}
        onClick={() => {
          setShowFilter(!showFilter);
        }}
      >
        <Action className="text-gray-o-480" />
      </button>
      <div
        ref={popElement}
        className="z-30 absolute"
        style={styles.popper}
        {...attributes.popper}
      >
        {showFilter && <Optionpopup />}
      </div>
    </div>
  );
};

const CategoryPage = () => {
  const { data } = useListAllCategoryQuery({});
  const [dataForUpdateCategory, setDataForUpdateCategory] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const columns = useMemo(
    () => [
      {
        header: "Group Number",
        accessorKey: "groupName",
      },
      {
        header: "Product Counts",
        accessorKey: "productCount",
        cell: ({ row }) => <div>{row?.original?.productIds.length}</div>,
      },
      {
        header: "Action",
        accessorKey: "id",
        disableSortBy: true,
        cell: ({ row }) => (
          <ActionCell
            row={row}
            setDataForUpdateCategory={setDataForUpdateCategory}
            setOpenForm={setOpenForm}
          />
        ),
      },
    ],
    []
  );

  return (
    <>
      <div className="mt-2">
        {openForm && (
          <CreateGroupForm
            hideModal={() => setOpenForm(false)}
            createGroup={dataForUpdateCategory}
            setDataForUpdateCategory={setDataForUpdateCategory}
          />
        )}
        <div className="flex flex-col items-end mb-3 mt-4 mr-10">
          <button
            className="text-white mt-2 mr-10 text-sm bg-primary-o-600 py-0 px-0 rounded-full"
            onClick={() => {
              setOpenForm(true);
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="99" fill="#2E94EA" />
              <path
                d="M12.0002 19.9995H28.0002M20.0002 27.9995V11.9995"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <Table data={data?.data} columns={columns} />
      </div>
    </>
  );
};

export default CategoryPage;
