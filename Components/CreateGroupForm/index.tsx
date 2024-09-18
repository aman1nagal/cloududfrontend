import { Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { RightDrawer } from "../RightDrawer";
import { useAddCategoryMutation, useAllProductQuery } from "../../slices/auth";

// Sample product array
const productsArray = [
  { productNumber: "001", productName: "Laptop", price: 800 },
  { productNumber: "002", productName: "Smartphone", price: 400 },
  { productNumber: "003", productName: "Headphones", price: 100 },
  { productNumber: "004", productName: "Smartwatch", price: 250 },
  { productNumber: "005", productName: "Wireless Speaker", price: 150 },
  { productNumber: "006", productName: "USB cable", price: 25 },
  { productNumber: "007", productName: "Charger", price: 50 },
];

const CreateGroupForm = ({
  hideModal,
  createGroup,
  setDataForUpdateCategory,
}) => {
  // Validation schema

  const { data: products } = useAllProductQuery({});
  const [addcategory] = useAddCategoryMutation({});

  const ValidationSchema = Yup.object().shape({
    groupName: Yup.string()
      .required("Group name is required")
      .max(50, "Group name should not exceed 50 characters"),
    products: Yup.array().min(1, "At least one product must be selected"),
  });

  // Initial form values
  const initial = {
    groupName: "",
    productIds: [],
  };
  return (
    <RightDrawer
      header={!createGroup?.groupName ? "Create  Group" : "Edit Group"}
      hideModal={hideModal}
    >
      <div className="flex flex-col ">
        <Formik
          initialValues={!createGroup?.groupName ? initial : createGroup}
          validationSchema={ValidationSchema}
          enableReinitialize
          onSubmit={(values, actions) => {
            // Form submission handler

            console.log("Submitted Values:", values);
            addcategory(values);
            hideModal(true);
          }}
        >
          {({ values, errors, touched, setFieldValue }: any) => (
            <Form>
              <div className="relative flex flex-col   overflow-y-scroll  p-4">
                {/* Group Name Input */}
                <div className="grid grid-cols-1  w-full mb-4 ">
                  <div className="block text-sm font-medium text-pvPrimaryText mb-1 text-left cursor-default">
                    Group Name
                  </div>
                  <div className="mr-3 mb-3 ">
                    <Field
                      type="text"
                      placeholder="Enter Group Name"
                      name="groupName"
                      className="w-full h-10 shadow p-0 rounded border flex items-center mb-4 border-gray-300 px-3 py-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2.5"
                    />
                    {errors.groupName && touched.groupName && (
                      <div className="text-red-500 text-xs">
                        {errors.groupName}
                      </div>
                    )}
                  </div>
                </div>

                {/* Product List with Checkbox */}
                <div className="grid grid-cols-1 w-full mb-4">
                  <div className="block text-sm font-medium text-pvPrimaryText mb-1 text-left cursor-default">
                    Product List
                  </div>
                  <div className="mr-3 mb-3">
                    {products?.data?.map((product, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          name="productIds"
                          value={product.productNumber}
                          defaultChecked={values?.productIds.includes(
                            product?.id
                          )}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFieldValue("productIds", [
                                ...values.productIds,
                                product.id,
                              ]);
                            } else {
                              const fff = values.productIds.filter(
                                (p, index) => {
                                  return p != product?.id;
                                }
                              );
                              setFieldValue("productIds", fff);
                            }
                          }}
                        />
                        <label className="ml-2">
                          {product.productName} - ${product.price}
                        </label>
                      </div>
                    ))}
                    {/* {errors.products && touched.products && (
                      <div className="text-red-500 text-xs">
                        {errors.products}
                      </div>
                    )} */}
                  </div>
                </div>
              </div>

              {/* Form Action Buttons */}
              <div className="flex absolute bg-white bottom-0 w-full items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                <button
                  className="md:px-12 sm:px-2 py-2 mb-1 mr-2 text-sm transition-all duration-150 ease-linear drop-shadow-sm shadow-sm-light shadow-pvShadowPrimary/20 bg-gray-200 text-pvPrimaryText font-medium rounded-md outline-none focus:outline-none"
                  type="button"
                  onClick={() => {
                    setDataForUpdateCategory({});
                    hideModal(true);
                  }}
                >
                  Cancel
                </button>

                <button
                  className="md:px-12 sm:px-8 py-2 mb-1 mr-1 text-sm text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-blue-500 focus:outline-none"
                  type="submit"
                >
                  Create Group
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </RightDrawer>
  );
};

export default CreateGroupForm;
