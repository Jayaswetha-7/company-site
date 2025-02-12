import React, { useEffect, useState } from "react";
import { contentData } from "../Pages/contentData";
import Navbar from "../Navbar";
import BreadcrumbWithCustomSeparator from "../BreadcrumbWithCustomSeparator";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Lineofbusiness: React.FC = () => {
  const {t} =useTranslation();
  const location = useLocation();
  const sectionHash = location.hash.replace(
    "#",
    ""
  ) as keyof typeof contentData;
  const validSections = Object.keys(contentData);
  // const [selectedContent, setSelectedContent] =
  //   useState<keyof typeof contentData>("services");
  const [selectedContent, setSelectedContent] = useState<
    keyof typeof contentData
  >(validSections.includes(sectionHash) ? sectionHash : "services");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (validSections.includes(hash)) {
      setSelectedContent(hash as keyof typeof contentData);
    }
  }, [location]);

  const handleSectionClick = (section: keyof typeof contentData) => {
    setSelectedContent(section);
    window.location.hash = `#${section}`;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full mx-auto flex flex-col items-center bg-white overflow-hidden">
        <BreadcrumbWithCustomSeparator
          currentPage={t(contentData[selectedContent].title)}
        />

        <div className="flex flex-col container lg:flex-row w-full max-w-screen-xl mt-[3%]">
          {/* Left Side Menu */}
          <div className="w-full lg:w-1/4 p-4 text-black flex flex-col items-center lg:items-start justify-center lg:justify-start mt-10 lg:mt-0">
            <h3 className="text-xl font-bold mb-4 text-center lg:text-left">
              {t("Line of Business")}
            </h3>
            {/* left side menu */}
            <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
              {Object.entries(contentData).map(([key, section]) => (
                <div
                  onClick={() => handleSectionClick(`${key}`)}
                  className={`cursor-pointer p-3 w-[70%] lg:w-full rounded text-black transition-all duration-300 ease-in-out ${
                    selectedContent === `${key}`
                      ? "bg-gray-950 text-white"
                      : "hover:bg-gray-200 hover:text-black"
                  }`}
                >
                 {t(section.title)}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-3/5 p-10 overflow-auto h-[50%] mb-10">
            <h2 className="text-3xl font-bold mb-4 text-black">
            {t(contentData[selectedContent].title)}
            </h2>

            {/* Display the image based on selected content */}
            <div className="w-full h-[50vh]">
              <img
                src={contentData[selectedContent].image}
                alt="Service related image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Additional Paragraphs */}
            <p className="mt-6 text-lg mb-5 text-black">
            {t(contentData[selectedContent].additionalParagraph)}
            </p>

            <p className="mt-6 text-lg mb-5 text-black">
            {t(contentData[selectedContent].extraContent)} 
            </p>

            <ul className="list-disc pl-6 mt-7 text-black">
              {contentData[selectedContent].details.map((item, index) => (
                <li key={index} className="mb-2">
                  {t(item)} 
                </li>
              ))}
            </ul>

            {/* Map through headings and paragraphs */}
            {contentData[selectedContent].additionalHeadings.map(
              (section, index) => (
                <div key={index}>
                  <h4 className="mt-9 text-lg mb-3 text-black font-bold">
                  {t(section.heading)}
                  
                  </h4>
                  <p className="mt-1 text-lg mb-3 text-black">
                  {t(section.paragraph)} 
                  </p>
                   
                  {/* Check if details exist and render as bullet points */}
                  {section.details && section.details.length > 0 && (
                    <ul className="list-disc pl-9">
                      {" "}
                      {section.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="text-lg mb-2 text-black"
                        >
                             {t(detail)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lineofbusiness;
