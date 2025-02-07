import { useState } from "react";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom"
const tabs = [
  {
    name: "Overview",
    title: "Empowering Innovation, Transforming Tomorrow",
    content:
      "At Taphubs, our dedicated team brings ideas to life with passion and purpose. Driven by innovation and collaboration, we leverage technology to craft impactful solutions that shape a smarter, more connected future.OR",
  },
  {
    name: "About Us",
    title: "Who Are We?",
    content:
      "Taphubs is a passionate team of tech enthusiasts committed to making a difference in the digital world.Our focus is on creating lasting impact, fostering growth, and building strong partnerships with our clients to drive success together.",
  },
  {
    name: "Our Line of Business",
    items: [
      {
        title: "Digital Transformation",
        description: "Enterprise-grade  solutions for modern infrastructure",
        link: "/about/lineofbusiness#services", // Updated link
      },
      {
        title: "Intelligent Business Solutions",
        description: "Transformative tech solutions for business growth",
        link: "/about/lineofbusiness#solutions", // Updated link
      },
      {
        title: "Cyber Security Solutions",
        description: "Comprehensive protection for digital assets",
        link: "/about/lineofbusiness#security", // Updated link
      },
      {
        title: "Network & Infrastructure",
        description: "Next-gen networking infrastructure solutions",
        link: "/about/lineofbusiness#network", // Updated link
      },
    ],
  },
];
const DropMenuAbout = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [activeAboutTab, setActiveAboutTab] = useState("Overview");

   

   const handleMouseEnter = () => {
    
     setIsOpen(true);
   };

   const handleMouseLeave = () => {
     
       setIsOpen(false);
     
   };

  return (
    <div className="">
      <Link
        to="/about"
        className=" text-black font-bold py-2 px-4 rounded"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        About
      </Link>
      {isOpen && (
        <div
          className="w-screen bg-white  flex  top-[7vh] left-0 pt-6 fixed z-10 h-[30vh] items-center px-4"
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          {/* Left Side */}
          <div className="max-w-[30vw] min-w-[20vw] pl-3 flex flex-col gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveAboutTab(tab.name)}
                className={`p-3 text-left flex justify-between font-medium  text-black border-b border-black transition-all 
                          ${
                            activeAboutTab === tab.name
                              ? "bg-gray-500/40"
                              : " hover:bg-blue-300/30"
                          }`}
              >
                {tab.name} <MdOutlineArrowRightAlt />
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="w-full ">
            {tabs.map(
              (tab) =>
                activeAboutTab === tab.name && (
                  <>
                    {tab.name === "Our Line of Business" ? (
                      <div className="w-full h-full px-3">
                        <h2 className="text-[2vw] lg:text-xl font-semibold mb-3">
                          Our Core Offerings
                        </h2>
                        <div className="flex flex-wrap gap-6">
                          {tab.items?.map((item) => (
                            <Link
                              key={item.title}
                              to={item.link}
                              className="flex-1 justify-center items-center max-w-[280px] px-3 lg:py-2 border rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex flex-col gap-3 justify-center">
                                <h3 className="text-[80%] 2xl:text-lg font-semibold">
                                  {item.title}
                                </h3>
                                <p className="text-gray-600 xl:text-sm font-bold text-[60%]">
                                  {item.description}
                                </p>
                                <div className="flex items-center  text-blue-600 ">
                                  <span className=" text-[0.6vw] xl:text-sm font-semibold flex-1">
                                    Explore Solutions
                                  </span>
                                  <FaUpRightFromSquare className="w-fit h-3 flex-1" />
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div
                        key={tab.name}
                        className="flex flex-col h-full gap-4 text-black justify-around items-start px-5"
                      >
                        <h2 className="text-2xl font-semibold">{tab.title}</h2>
                        <p className="mt-2 text-black/60 text-lg">
                          {tab.content}
                        </p>
                        <Link to={"/about"}>
                          <button className=" border  flex gap-2 items-center  w-fit rounded-full px-4 p-2 text-black hover:scale-105  hover:underline">
                            Discover More
                            <FaUpRightFromSquare className="  inline-block" />
                          </button>
                        </Link>
                      </div>
                    )}
                  </>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropMenuAbout