import React, { useState } from "react";
import { contentData } from "../Pages/contentData";
import Navbar from "../Navbar";
import BreadcrumbWithCustomSeparator from "./BreadcrumbWithCustomSeparator";

const Lineofbusiness: React.FC = () => {
  const [selectedContent, setSelectedContent] =
    useState<keyof typeof contentData>("services");

  const handleSectionClick = (section: keyof typeof contentData) => {
    setSelectedContent(section);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full mx-auto flex flex-col items-center bg-gray-400">
        <BreadcrumbWithCustomSeparator />

        <div className="flex flex-col container lg:flex-row w-full max-w-screen-xl mt-[1%]">
          {/* Left Side Menu */}
          <div className="w-full lg:w-1/4 p-4 text-white flex flex-col items-center lg:items-start justify-center lg:justify-start mt-10 lg:mt-0">
            <h3 className="text-xl font-bold mb-4 text-center lg:text-left">
              Line of Business
            </h3>
            <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
              {/* Web Development */}
              <div
                onClick={() => handleSectionClick("services")}
                className={`cursor-pointer p-3 w-[70%] lg:w-full rounded text-white transition-all duration-300 ease-in-out ${
                  selectedContent === "services"
                    ? "bg-gray-500 text-white"
                    : "hover:bg-gray-500 hover:text-white"
                }`}
              >
                IBM System & Software Solution
              </div>

              {/* Network Solution */}
              <div
                onClick={() => handleSectionClick("solutions")}
                className={`cursor-pointer p-3 w-[70%] lg:w-full rounded text-white transition-all duration-300 ease-in-out ${
                  selectedContent === "solutions"
                    ? "bg-gray-500 text-white"
                    : "hover:bg-gray-500 hover:text-white"
                }`}
              >
                Business Technology Solutions
              </div>

              {/* AI Integration */}
              <div
                onClick={() => handleSectionClick("security")}
                className={`cursor-pointer p-3 w-[70%] lg:w-full rounded text-white transition-all duration-300 ease-in-out ${
                  selectedContent === "security"
                    ? "bg-gray-500 text-white"
                    : "hover:bg-gray-500 hover:text-white"
                }`}
              >
                Cyber Security Solutions
              </div>

              {/* Cybersecurity */}
              <div
                onClick={() => handleSectionClick("network")}
                className={`cursor-pointer p-3 w-[70%] lg:w-full rounded text-white transition-all duration-300 ease-in-out ${
                  selectedContent === "network"
                    ? "bg-gray-500 text-white"
                    : "hover:bg-gray-500 hover:text-white"
                }`}
              >
                Infrastructure Networking Technology
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-3/5 p-10 overflow-auto h-[50%] mb-10">
            <h2 className="text-3xl font-bold mb-4 text-white">
              {contentData[selectedContent].title}
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
            <p className="mt-6 text-lg mb-5 text-white">
              {contentData[selectedContent].additionalParagraph}
            </p>

            <p className="mt-6 text-lg mb-5 text-white">
              {contentData[selectedContent].extraContent}
            </p>

            <ul className="list-disc pl-6 mt-7 text-white">
              {contentData[selectedContent].details.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>

            {/* Map through headings and paragraphs */}
            {contentData[selectedContent].additionalHeadings.map(
              (section, index) => (
                <div key={index}>
                  <h4 className="mt-6 text-lg mb-3 text-white font-bold">
                    {section.heading}
                  </h4>
                  <p className="mt-1 text-lg mb-3 text-white">
                    {section.paragraph}
                  </p>
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
