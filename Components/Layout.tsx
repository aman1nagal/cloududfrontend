import React, { ReactNode, useEffect, useState } from "react";

import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex h-screen w-full overflow-y-hidden bg-white">
        <Sidebar />

        <div className="py-6 ml-64 md:pb-28 mxl:pb-0 px-4 sm:px-6 lg:px-8 w-full h-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
