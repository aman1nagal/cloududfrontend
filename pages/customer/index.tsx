import React, { useEffect, useMemo, useRef, useState } from "react";
import CreateGroupForm from "../../Components/CreateGroupForm";
import { Table } from "../../Components/Table/Table";
import { usePopper } from "react-popper";
import OptionPopup from "../../Components/OptionPopup";
import { Action } from "../../Components/Table/Icons";
import CreateCustomerForm from "../../Components/CreateCustomerForm/CreateCustomerForm";
import { useGetallCustomerQuery } from "../../slices/auth";

const CustomerPage = () => {
  const columns = useMemo(
    () => [
      {
        header: "Customer ID",
        accessorKey: "customerId",
      },
      {
        header: "Customer Name",
        accessorKey: "customerName",
      },
      {
        header: "Group Name",
        accessorKey: "groupName",
      },
      {
        header: "User Role",
        accessorKey: "userRole",
      },
      {
        header: "Purchase Limit",
        accessorKey: "purchaseLimit",
      },
      {
        header: "Action",
        accessorKey: "id",
        disableSortBy: true,
        cell: ({ row }) => {
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
            setOpenForm(true);
            setShowFilter(false);
          };
          const actions = [{ text: "Edit", action: () => viewEdit() }];

          const Optionpopup = () => (
            <OptionPopup
              actions={actions}
              hideModal={() => setShowFilter(false)}
            />
          );

          return (
            <div className="">
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
        },
      },
    ],
    []
  );

  const { data } = useGetallCustomerQuery({});

  const [openForm, setOpenForm] = useState(false);
  const customers = [
    {
      customerId: "C001",
      customerName: "John Doe",
      groupName: "Premium",
      userRole: "Admin",
      purchaseLimit: "$5000",
    },
    {
      customerId: "C002",
      customerName: "Jane Smith",
      groupName: "Standard",
      userRole: "User",
      purchaseLimit: "$1000",
    },
    {
      customerId: "C003",
      customerName: "Michael Green",
      groupName: "Premium",
      userRole: "Admin",
      purchaseLimit: "$3000",
    },
    {
      customerId: "C004",
      customerName: "Sarah Brown",
      groupName: "Standard",
      userRole: "User",
      purchaseLimit: "$1500",
    },
    {
      customerId: "C005",
      customerName: "Emily White",
      groupName: "Gold",
      userRole: "Moderator",
      purchaseLimit: "$2000",
    },
  ];

  return (
    <>
      <div className="mt-2">
        {openForm && (
          <CreateCustomerForm
            hideModal={() => setOpenForm(false)}
            createCustomer={""}
          />
        )}
        <div className="flex flex-col items-end  mb-3 mt-4 mr-10 ">
          <button
            className="text-white mt-2  mr-10 text-sm bg-primary-o-600 py-0 px-0 rounded-full"
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

export default CustomerPage;
