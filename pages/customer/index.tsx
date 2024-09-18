import React, { useMemo, useState, useRef } from "react";
import CreateCustomerForm from "../../Components/CreateCustomerForm/CreateCustomerForm";
import { Table } from "../../Components/Table/Table";
import { usePopper } from "react-popper";
import OptionPopup from "../../Components/OptionPopup";
import { Action } from "../../Components/Table/Icons";
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
    ],
    []
  );

  const { data } = useGetallCustomerQuery({});
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <div className="mt-2">
        {openForm && (
          <CreateCustomerForm
            hideModal={() => setOpenForm(false)}
            createCustomer={""}
          />
        )}
        <div className="flex flex-col items-end mb-3 mt-4 mr-10">
          <button
            className="text-white mt-2 mr-10 text-sm bg-primary-o-600 py-0 px-0 rounded-full"
            onClick={() => setOpenForm(true)}
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
