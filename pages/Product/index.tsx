import React, { useEffect, useMemo } from "react";
import { Table } from "../../Components/Table/Table";
import { useAllProductQuery } from "../../slices/auth";

const ProductPage = () => {
  const { data: products } = useAllProductQuery({});
  console.log(products, "products");
  const columns = useMemo(
    () => [
      {
        header: "Product Number",
        accessorKey: "productNumber",
      },
      {
        header: "Product Name",
        accessorKey: "productName",
      },
      {
        header: "price",
        accessorKey: "price",
      },
    ],
    []
  );
  // const products = [
  //   { productNumber: "001", productName: "Laptop", price: 800 },
  //   { productNumber: "002", productName: "Smartphone", price: 400 },
  //   { productNumber: "003", productName: "Headphones", price: 100 },
  //   { productNumber: "004", productName: "Smartwatch", price: 250 },
  //   { productNumber: "005", productName: "Wireless Speaker", price: 150 },
  //   { productNumber: "006", productName: "USB cable", price: 25 },
  //   { productNumber: "007", productName: "Charger", price: 50 },
  // ];
  return (
    <>
      <div className="mt-6">
        <Table data={products?.data} columns={columns} />
      </div>
    </>
  );
};

export default ProductPage;
