import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import imageLogo from "../assets/LogoBanner.png";
import DropmenuService from "./DropmenuService";
import { QuickLinksFooter } from "./Data/QuikLinks";
import LanguageSwitcher from "./LanguageSwitch";
import { useTranslation } from "react-i18next"
const Navbar = () => {
  const {t} = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <motion.nav dir="ltr"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={
        "fixed w-full z-50 transition-all duration-300 bg-white text-black  shadow-lg "
      }
    >
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[9vh] gap-2 items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={"/"}>
              <img
                src={imageLogo}
                alt=""
                className="w-[100px] min-w-[130px] h-[60px] bg-contain"
              />
            </Link>
          </motion.div>

          {/* Menu Bar */}
          <div className="hidden md:flex space-x-8 justify-center items-center font-semibold  ">
            {/* Home */}
            <Link
              to={"/"}
              className={` ${
                location.pathname === "/" ? " text-blue-600 underline " : ""
              } hover:text-blue-500 mx-4`}
            >
              <h1>{t("Home")} </h1>
            </Link>

            {/* About */}
            <Link
              to={"/about"}
              className={` ${
                location.pathname === "/about"
                  ? " text-blue-600 underline"
                  : ""
              } hover:text-blue-500`}
            >
              {t("About")}
            </Link>

            {/* Services */}
            <DropmenuService />

            <Link
              to={"/contact"}
              className={` ${
                location.pathname === "/contact"
                  ? "text-blue-600 underline "
                  : ""
              } hover:text-blue-500`}
            >
              <div>{t("Contact")}</div>
            </Link>

            {/* Carrer Section */}
            <Link
              to={"/career"}
              className={` ${
                location.pathname === "/career" ? "text-blue-600 underline" : ""
              } hover:text-blue-500`}
            >
              <div>{t("Careers")}</div>
            </Link>
            <div>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Nav Closing and Opening Button */}
          <div className="md:hidden flex items-center justify-center ">
            <LanguageSwitcher  />{" "}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav bar Section */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pb-4">
                {QuickLinksFooter.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="  text-center  border-b  w-[10vw] mx-auto   "
                  >
                    <Link
                      to={item.link}
                      className="  text-center font-semibold font-serif 
                      "
                    >
                      {t(item.name)}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
