import React, { useState, useMemo, useEffect } from "react";
import { Table } from "../../Components/Table/Table";
import { useGetProductByCustomerNameQuery } from "../../slices/auth";

const ProductPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [exceedsLimit, setExceedsLimit] = useState(false);
  const [customerId, setCustomerId] = useState<any>({});

  useEffect(() => {
    const windoww = typeof window != undefined;
    if (windoww) {
      const token = localStorage.getItem("token");
      const userDetails = JSON.parse(localStorage.getItem("authuser"));
      console.log(userDetails?.userDetails?.customerId);
      setCustomerId(userDetails?.userDetails?.groupId);
      // setCustomerId(localStorage.getItem("customerId"));
      if (!token) {
        window.location.href = "/login";
      }
    }
  }, []);
  console.log(customerId, "customerId ");

  const { data: products } = useGetProductByCustomerNameQuery(
    {
      customerId,
    },
    {
      skip: !customerId || customerId.length === 0,
    }
  );

  useEffect(() => {
    const fetchCustomerData = async () => {
      const customerInfo = {
        userRole: "Premium",
        purchaseLimit: 2000,
      };
      setCustomer(customerInfo);
    };
    fetchCustomerData();
  }, [customerId]);

  const columns = useMemo(
    () => [
      {
        header: "Select",
        accessorKey: "select",
        cell: ({ row }) => (
          <input
            type="checkbox"
            onChange={(e) =>
              handleSelectProduct(row.original, e.target.checked ? 1 : 0)
            }
          />
        ),
      },
      {
        header: "Product Name",
        accessorKey: "productName",
      },
      // {
      //   header: "Price",
      //   accessorKey: "price",
      //   cell: (info) => `$${info?.getValue()?.toFixed(2)}`,
      // },
      {
        header: "Quantity",
        accessorKey: "quantity",
        cell: ({ row }) => (
          <input
            type="text"
            min="0"
            defaultValue="0"
            onChange={(e) => handleSelectProduct(row.original, e.target.value)}
            className="border rounded w-16 p-1"
          />
        ),
      },
    ],
    []
  );

  // Handle selecting products and updating quantity
  const handleSelectProduct = (product, quantity) => {
    const existingProduct = selectedProducts.find(
      (p) => p.productId === product.productNumber
    );

    if (existingProduct) {
      setSelectedProducts(
        selectedProducts.map((p) =>
          p.productId === product.productNumber
            ? { ...p, quantity: parseInt(quantity) }
            : p
        )
      );
    } else {
      setSelectedProducts([
        ...selectedProducts,
        {
          productId: product.productNumber,
          price: product.price,
          quantity: parseInt(quantity),
        },
      ]);
    }
  };

  // Calculate total price and apply discounts
  const calculateTotalPrice = () => {
    let total = 0;

    selectedProducts.forEach((item) => {
      let productTotal = item.price * item.quantity;

      // Apply 5% discount if more than 3 units of a product
      if (item.quantity > 3) {
        productTotal *= 0.95;
      }

      total += productTotal;
    });

    // Apply discount based on customer role
    if (customer?.userRole === "Regular") {
      total *= 0.9; // 10% discount for Regular users
    } else if (customer?.userRole === "Premium") {
      total *= 0.8; // 20% discount for Premium users
    }

    setTotalPrice(total);

    // Check if total exceeds customer's purchase limit
    if (total > customer?.purchaseLimit) {
      setExceedsLimit(true);
    } else {
      setExceedsLimit(false);
    }
  };

  return (
    <>
      <div className="mt-6">
        <Table data={products?.data} columns={columns} />
      </div>

      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={calculateTotalPrice}
      >
        Calculate Price
      </button>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
        {exceedsLimit && (
          <p className="text-red-500 font-bold">
            You are not allowed to proceed with this order!
          </p>
        )}
      </div>
    </>
  );
};

export default ProductPage;
