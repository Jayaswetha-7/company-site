import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ServiceMenuLinks } from "./Data/QuikLinks";

const DropmenuService = () => {
  const location = useLocation();
  console.log(location.pathname);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Link
        to={"/service/lineofbusiness"}
        className={` ${
          location.pathname === "/service/lineofbusiness"
            ? "text-blue-600 underline"
            : ""
        } text-black font-bold py-1 mb-2 px-2 hover:text-blue-500 relative`}
        onMouseEnter={() => {
          setIsOpen(true);
        }}
        onMouseLeave={handleMouseLeave}
      >
        Services
      </Link>
      {isOpen && (
        <div
          className={` absolute w-fit pt-3 bg-white pb-10  flex items-center px-4 transition-all  duration-500 ease-in-out transform 
          `}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <div className=" min-w-[20vw] pl-3 mx-auto flex flex-col gap-3">
            {ServiceMenuLinks.map((tab) => (
              <Link
                to={tab.link}
                key={tab.link}
                className={`p-3 text-left flex justify-between font-medium  text-black border-b border-black transition-all 
                   hover:bg-gray-500/40
              `}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropmenuService;
