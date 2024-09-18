import React, { useEffect, useRef } from "react";

const OptionPopup = ({ actions, hideModal }: any) => {
  const optionDivRef = useRef(null);

  const handleClickOutside = (event) => {
    if (optionDivRef.current && !optionDivRef.current.contains(event.target)) {
      hideModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" w-max rounded-md relative z-10 md:z-40" ref={optionDivRef}>
      <div className="bg-white rounded-md shadow-md">
        {actions.map((e, i) => (
          <div
            key={e.text}
            onClick={e.action}
            className={`${
              i == 0 ? "rounded-t-md border" : "border-b border-x"
            } ${
              i == actions.length - 1 && "rounded-b-md border-t-0"
            } border-borderColor py-2 px-4 cursor-pointer text-[12px] font-normal text-textcolor text-black-b-300 hover:bg-[#208ec7] hover:text-white transition-all leading-none`}
          >
            {e.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionPopup;
