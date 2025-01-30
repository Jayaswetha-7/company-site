import React, { useState } from "react";

// Import images
import webDevelopmentImage from "../../assets/web.jpg";
import networkSolutionImage from "../../assets/network.jpg";
import aiIntegrationImage from "../../assets/ai.jpg";
import cybersecurityImage from "../../assets/cyber.jpg";

const contentData = {
  services: {
    title: "Web Development",
    description:
      "Founded in 2000, our Web Development division has consistently pushed the boundaries of design and performance, leveraging cutting-edge technologies to create responsive, secure, and visually stunning websites that elevate businesses.",
    details: [
      "Custom Web Development (Responsive, Dynamic, and Scalable)",
      "E-commerce Solutions (Online Store Setup & Management)",
      "Content Management Systems (WordPress, Joomla, etc.)",
      "Web Application Development (Custom Web Apps)",
      "Website Maintenance & Support Services",
      "UI/UX Design and Prototyping",
      "Mobile-Friendly Design and Development",
      "Website Hosting and Server Management Services",
    ],
    image: webDevelopmentImage,
    additionalParagraph:
      "At Taphubs, we create custom web solutions tailored to your business needs, optimizing performance and reducing downtime. Whether building from scratch or improving an existing site, we ensure a solution that fits your requirements.",
  },
  solutions: {
    title: "Networking & Security",
    description:
      "Developed in 1995, the Network Solution and Services Department (NSS) has continued to thrive ahead of the technology curve.",
    details: [
      "Cloud Services (IaaS, PaaS, SaaS)",
      "Security Solutions",
      "Business Continuity and Recovery Services",
      "Infrastructure and Systems Management Services",
      "Hardware Support Services",
      "Intel-based Server Sales",
      "Clients, Printers and Kiosk Sales",
      "Retail Store Solution Sales",
    ],
    image: networkSolutionImage,
    additionalParagraph:
      "Our promise of network solutions means more than just a typical building of our customers network infrastructure; we are giving them the peace of mind through our guarantee to provide of business continuity, security and data durability.   Remaining constantly connected has become an inevitable fact of our lives and businesses are no different. As businesses around world continue to move and to grow we acknowledge and provide customers with that very ability seamlessly through our integrated solutions.",
  },
  cloudServices: {
    title: "AI Integration",
    description:
      "We integrate advanced AI solutions to streamline your processes and enhance decision-making. Our custom AI applications help your business stay innovative and efficient, driving growth and improving user experiences.",
    details: [
      "Cloud computing (IaaS, PaaS, SaaS)",
      "Seamless AI and cloud integration",
      "Scalable infrastructure for AI solutions",
      "Business continuity with AI-driven cloud systems",
    ],

    image: aiIntegrationImage,
    additionalParagraph:
      "Our AI integration services help businesses leverage cutting-edge technologies to improve processes and decision-making. By seamlessly integrating AI with cloud platforms (IaaS, PaaS, SaaS), we provide scalable infrastructure that supports growth and ensures business continuity. From automation to data insights, our solutions are designed to drive efficiency and foster innovation.",
  },
  integration: {
    title: "Cyber Security",
    description:
      "Our cybersecurity solutions protect your business from digital threats with advanced data protection and risk management. We offer proactive monitoring and tailored security measures to ensure your systems remain secure. Stay safe, compliant, and resilient in the digital world.",
    details: [
      "System and infrastructure protection",
      "Cross-platform security compatibility",
      "Threat detection and performance optimization",
      "Custom security integration solutions",
      "Proactive monitoring and threat response",
      "Compliance with industry standards and regulations",
    ],

    image: cybersecurityImage,
    additionalParagraph:
      "We offer comprehensive cybersecurity services to safeguard your business from evolving threats. Our solutions include system protection, cross-platform security, and proactive threat monitoring. With custom integrations and performance optimization, we ensure your business stays secure, compliant, and resilient against digital risks. Trust us to provide the expertise needed to protect your sensitive data and ensure business continuity.",
  },
};

const ServicePage: React.FC = () => {
  const [selectedContent, setSelectedContent] =
    useState<keyof typeof contentData>("services");

  const handleSectionClick = (section: keyof typeof contentData) => {
    setSelectedContent(section);
  };

  return (
    <div className="min-h-screen w-full  mx-auto flex justify-center items-center gap-10  bg-gray-950/90">
      <div className="flex flex-col container lg:flex-row w-full max-w-screen-xl mt-[7%]">
        {/* Left Side Menu */}
        <div className="w-full lg:w-1/4 p-4 text-white flex flex-col items-center lg:items-start justify-center lg:justify-start mt-10 lg:mt-0">
          <h3 className="text-xl font-bold mb-4 text-center lg:text-left">
            Services
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
              Web Development
            </div>

            {/* Network Solution */}
            <div
              onClick={() => handleSectionClick("solutions")}
              className={`cursor-pointer p-3 w-[70%] lg:w-full rounded transition-all duration-300 ease-in-out ${
                selectedContent === "solutions"
                  ? "bg-gray-500 text-white"
                  : "hover:bg-gray-500 hover:text-white"
              }`}
            >
              Network Solution
            </div>

            {/* AI Integration */}
            <div
              onClick={() => handleSectionClick("cloudServices")}
              className={`cursor-pointer p-3 w-[70%] lg:w-full rounded transition-all duration-300 ease-in-out ${
                selectedContent === "cloudServices"
                  ? "bg-gray-500 text-white"
                  : "hover:bg-gray-500 hover:text-white"
              }`}
            >
              AI Integration
            </div>

            {/* Cybersecurity */}
            <div
              onClick={() => handleSectionClick("integration")}
              className={`cursor-pointer p-3 w-[70%] lg:w-full rounded transition-all duration-300 ease-in-out ${
                selectedContent === "integration"
                  ? "bg-gray-500 text-white"
                  : "hover:bg-gray-500 hover:text-white"
              }`}
            >
              Cybersecurity
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-3/5 p-10  overflow-auto h-[50%] mb-10">
          <h2 className="text-3xl font-bold mb-4 text-white">
            {contentData[selectedContent].title}
          </h2>
          <p className="text-lg mb-6 text-white">
            {contentData[selectedContent].description}
          </p>

          {/* Display the image based on selected content */}
          <div className="w-full h-[50vh]">
            <img
              src={contentData[selectedContent].image}
              alt="Service related image"
              className="w-full h-full object-cover"
            />
          </div>

          <ul className="list-disc pl-6 mt-7 text-white">
            {contentData[selectedContent].details.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>

          {/* Additional Paragraph */}
          <p className="mt-6 text-lg mb-5 text-white">
            {contentData[selectedContent].additionalParagraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
