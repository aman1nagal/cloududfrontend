import React, { useState } from "react";
import { Loader } from "../Loader";

interface RightDrawer {
  width?: string;
  header: string;
  children: React.ReactNode;
  hideModal?: () => void;
  isLoading?: boolean;
}

export const RightDrawer = ({
  width,
  header,
  children,
  hideModal,
  isLoading,
}: RightDrawer) => {
  const [open, setOpen] = useState(true);
  const handleModel = () => {
    setOpen(false);
    setTimeout(() => {
      hideModal();
    }, 300);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center overflow-hidden outline-none bg-black/60 focus:outline-none transition-opacity duration-700 ${
          open ? "fadeIn" : "fadeOut pointer-events-none"
        }`}
      ></div>
      {isLoading && <Loader isLoading={isLoading} />}

      {/* {!isLoading ? ( */}
      <div
        className={`fixed z-50 w-full lg:w-1/3 top-0 h-full bg-white shadow-lg right-0 ${
          open ? "slideIn" : "slideOut"
        } ${isLoading ? "hidden" : "visible"} `}
      >
        <div className="flex items-center justify-between gap-4 py-4 md:py-5 px-5 md:pr-7 md:pl-9 bg-gray-o-100">
          <h3 className="font-medium text-black text-base md:text-lg">
            {header}
          </h3>
        </div>

        <div className="flex flex-col overflow-hidden h-full">{children}</div>
      </div>
      {/* ) : null} */}
    </>
  );
};
