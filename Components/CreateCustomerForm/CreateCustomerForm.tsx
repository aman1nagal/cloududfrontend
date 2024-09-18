import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { RightDrawer } from "../RightDrawer";
import {
  useListAllCategoryQuery,
  useRegisterCustomerMutation,
} from "../../slices/auth";

const CreateCustomerForm = ({ hideModal, createCustomer }) => {
  const ValidationSchema = Yup.object().shape({
    customerName: Yup.string()
      .required("Customer Name is required")
      .max(50, "Customer Name should not exceed 50 characters"),
    customerId: Yup.string()
      .required("Customer ID is required")
      .max(50, "Customer ID should not exceed 50 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should be at least 6 characters long"),
    groupId: Yup.string().required("Group Name is required"),
    userRole: Yup.string().required("User Role is required"),
    purchaseLimit: Yup.number()
      .required("Purchase Limit is required")
      .min(0, "Purchase Limit should be a positive number"),
  });
  const [registerCustomer] = useRegisterCustomerMutation({});
  const { data: CategoryList } = useListAllCategoryQuery({});

  const initial = {
    customerName: "",
    customerId: "",
    password: "",
    groupId: "",
    userRole: "Regular",
    purchaseLimit: 1000,
  };

  return (
    <RightDrawer header="Create Customer">
      <div className="flex flex-col ">
        <Formik
          initialValues={initial}
          validationSchema={ValidationSchema}
          onSubmit={(values, actions) => {
            // Form submission handler
            console.log("Submitted Values:", values);
            registerCustomer(values);
            hideModal(true);
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              <div className="relative flex flex-col   overflow-y-scroll  p-4">
                {/* Customer Name Input */}
                <div className="grid grid-cols-1  w-full mb-4 ">
                  <div className="block text-sm font-medium text-pvPrimaryText mb-1 text-left cursor-default">
                    Customer Name
                  </div>
                  <div className="mr-3 mb-3 ">
                    <Field
                      type="text"
                      placeholder="Enter Customer Name"
                      name="customerName"
                      className="w-full h-10 shadow p-0 rounded border flex items-center mb-4 border-gray-300 px-3 py-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2.5"
                    />
                    {errors.customerName && touched.customerName && (
                      <div className="text-red-500 text-xs">
                        {errors.customerName}
                      </div>
                    )}
                  </div>
                </div>

                {/* Customer ID Input */}
                <div className="grid grid-cols-1 w-full mb-4">
                  <div className="block text-sm font-medium text-pvPrimaryText mb-1 text-left cursor-default">
                    Customer ID
                  </div>
                  <div className="mr-3 mb-3 ">
                    <Field
                      type="text"
                      placeholder="Enter Customer ID"
                      name="customerId"
                      className="w-full h-10 shadow p-0 rounded border flex items-center mb-4 border-gray-300 px-3 py-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2.5"
                    />
                    {errors.customerId && touched.customerId && (
                      <div className="text-red-500 text-xs">
                        {errors.customerId}
                      </div>
                    )}
                  </div>
                </div>

                {/* Password Input */}
                <div className="grid grid-cols-1 w-full mb-4">
                  <div className="block text-sm font-medium text-pvPrimaryText mb-1 text-left cursor-default">
                    Password
                  </div>
                  <div className="mr-3 mb-3 ">
                    <Field
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      className="w-full h-10 shadow p-0 rounded border flex items-center mb-4 border-gray-300 px-3 py-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2.5"
                    />
                    {errors.password && touched.password && (
                      <div className="text-red-500 text-xs">
                        {errors.password}
                      </div>
                    )}
                  </div>
                </div>

                {/* Group Name Dropdown */}
                <div className="grid grid-cols-1 w-full mb-4">
                  <div className="block text-sm font-medium text-pvPrimaryText mb-1 text-left cursor-default">
                    Group Name
                  </div>
                  <div className="mr-3 mb-3 ">
                    <Field
                      as="select"
                      name="groupId"
                      className="w-full h-10 shadow p-0 rounded border flex items-center mb-4 border-gray-300 px-3 py-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2.5"
                    >
                      <option value="">Select Group</option>
                      {console.log(CategoryList?.data, "CategoryList")}
                      {CategoryList?.data.map((group) => (
                        <option key={group.id} value={group.id}>
                          {group.groupName}
                        </option>
                      ))}
                    </Field>
                    {errors.groupId && touched.groupId && (
                      <div className="text-red-500 text-xs">
                        {errors.groupId}
                      </div>
                    )}
                  </div>
                </div>

                {/* User Role Dropdown */}
                <div className="grid grid-cols-1 w-full mb-4">
                  <div className="block text-sm font-medium text-pvPrimaryText mb-1 text-left cursor-default">
                    User Role
                  </div>
                  <div className="mr-3 mb-3 ">
                    <Field
                      as="select"
                      name="userRole"
                      className="w-full h-10 shadow p-0 rounded border flex items-center mb-4 border-gray-300 px-3 py-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2.5"
                    >
                      <option value="Regular">Regular</option>
                      <option value="Premium">Premium</option>
                    </Field>
                    {errors.userRole && touched.userRole && (
                      <div className="text-red-500 text-xs">
                        {errors.userRole}
                      </div>
                    )}
                  </div>
                </div>

                {/* Purchase Limit Input */}
                <div className="grid grid-cols-1 w-full mb-4">
                  <div className="block text-sm font-medium text-pvPrimaryText mb-1 text-left cursor-default">
                    Purchase Limit
                  </div>
                  <div className="mr-3 mb-3 ">
                    <Field
                      type="number"
                      placeholder="Enter Purchase Limit"
                      name="purchaseLimit"
                      className="w-full h-10 shadow p-0 rounded border flex items-center mb-4 border-gray-300 px-3 py-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2.5"
                    />
                    {errors.purchaseLimit && touched.purchaseLimit && (
                      <div className="text-red-500 text-xs">
                        {errors.purchaseLimit}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Form Action Buttons */}
              <div className="flex absolute bg-white bottom-0 w-full items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                <button
                  className="md:px-12 sm:px-2 py-2 mb-1 mr-2 text-sm transition-all duration-150 ease-linear drop-shadow-sm shadow-sm-light shadow-pvShadowPrimary/20 bg-gray-200 text-pvPrimaryText font-medium rounded-md outline-none focus:outline-none"
                  type="button"
                  onClick={() => hideModal(true)}
                >
                  Cancel
                </button>

                <button
                  className="md:px-12 sm:px-8 py-2 mb-1 mr-1 text-sm text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-blue-500 focus:outline-none"
                  type="submit"
                >
                  Create Customer
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </RightDrawer>
  );
};

export default CreateCustomerForm;
