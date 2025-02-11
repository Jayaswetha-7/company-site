import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutLastComp = () => {
  const {t}=useTranslation();
    return (
      <>
        <div className="bg-gray-900 sm:h-[56vh] h-[30vh] justify-center items-center flex flex-col">
          <div className="text-white flex flex-col items-center sm:text-5xl text-2xl ">
            <h1 className="font-bold">{t("Need_IT_Solutions_?")}</h1>
            <h1 className="sm:mt-5 mt-2">
              <span className="font-bold">{t("Let")}</span>
              <span className="font-style: italic font-extralight text-gray-400">
              {t("start")} {" "}
                
              </span>
            </h1>
          </div>
          <div>
            <Link to={"/contact"}>
              <button
                className="text-white sm:mt-10 mt-5 border border-white sm:p-3 p-2 rounded-xl flex items-center 
  transition-transform duration-300 ease-in-out hover:scale-105"
              >
                {t("Get_in_Touch")} <FaArrowRight className="ms-2" />
              </button>
            </Link >
          </div>
        </div>
        <div className="bg-white h-[0.1vh]"></div>
      </>
    );
}

export default AboutLastComp