import React from "react";
import Link from "next/link";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <div className="h-screen w-64 bg-blue-800 text-white fixed z-50">
      <div className="p-6">
        <h1 className="text-3xl font-semibold">My App</h1>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="mb-4">
            <Link
              href="/category"
              className="block py-2 px-4 hover:bg-blue-600"
            >
              Product Group
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/customer"
              className="block py-2 px-4 hover:bg-blue-600"
            >
              Customer
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/Product" className="block py-2 px-4 hover:bg-blue-600">
              Product Detail
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/ProductCart"
              className="block py-2 px-4 hover:bg-blue-600"
            >
              Product Cart
            </Link>
            <h1
              className="w-40 ml-2 mt-2 text-center py-3 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e5921d] cursor-pointer"
              onClick={() => handleLogout()}
            >
              Logout
            </h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
