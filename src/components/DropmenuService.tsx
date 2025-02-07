
import { useState } from 'react';
import { FaUpRightFromSquare } from 'react-icons/fa6'
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { Link } from 'react-router-dom'
 const servicedata = [
    {
      title: "Web Development",
      header: "Building Future-Ready Websites",
      content:
        "We create fast, responsive, and scalable websites tailored to your business needs, ensuring seamless user experiences, cutting-edge designs, and future-proof solutions that adapt to growth, evolving technology, and changing market demands.",
    },
    {
      title: "Network & Security",
      header: "Secure & Reliable Networks",
      content:
        "Ensuring seamless connectivity with advanced network solutions, robust security measures, and proactive threat detection for uninterrupted operations, while optimizing performance, improving network efficiency, and safeguarding sensitive data across platforms, devices, and locations.",
    },
    {
      title: "Cybersecurity",
      header: "Protecting Your Digital Assets",
      content:
        "Safeguarding businesses with cutting-edge cybersecurity solutions, defending against evolving threats, data breaches, and unauthorized access attempts, while ensuring compliance with industry regulations, maintaining data privacy at all levels, and mitigating risks effectively.",
    },
    {
      title: "AI Security",
      header: "Intelligent Security Solutions",
      content:
        "Leveraging AI to detect, prevent, and respond to cyber threats in real time, enhancing security and risk management with smart automation, predictive analytics, continuous monitoring, and advanced algorithms for maximum protection against attacks.",
    },
  ];
const DropmenuService = () => {
  
  const handleMouseEnter = () => {
    
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
   
      setIsOpen(false);
    
  };
  const [activeServiceTab, setActiveServiceTab] = useState("Web Development");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Link
        to="/services"
        className=" text-black font-bold py-2 px-4 rounded"
        onMouseEnter={()=>{setIsOpen(true)}}
        onMouseLeave={handleMouseLeave}
      >
        Services
      </Link>
      {isOpen && (
        <div
          className={`fixed top-[6vh] pt-6 left-0 w-screen bg-white pb-10 p-2 flex items-center px-4 transition-all  duration-500 ease-in-out transform 
          `}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <div className="max-w-[30vw] min-w-[20vw] pl-3 flex flex-col gap-3">
            {servicedata.map((tab) => (
              <button
                key={tab.title}
                onClick={() => setActiveServiceTab(tab.title)}
                className={`p-3 text-left flex justify-between font-medium  text-black border-b border-black transition-all 
              ${
                activeServiceTab === tab.title
                  ? "bg-black/10"
                  : " hover:bg-gray-500/40"
              }`}
              >
                {tab.title} <MdOutlineArrowRightAlt />
              </button>
            ))}
          </div>
          <div className="w-[80%] ">
            {servicedata.map(
              (tab) =>
                activeServiceTab === tab.title && (
                  <div
                    key={tab.title}
                    className="flex flex-col text-black h-full justify-around items-start px-5"
                  >
                    <h2 className="text-2xl font-semibold">{tab.header}</h2>
                    <p className="mt-2 text-black/60 text-lg">{tab.content}</p>
                    <Link to={"/services"}>
                      <button className=" border  flex gap-2 items-center  w-fit rounded-full px-4 p-2 text-black hover:scale-105  hover:underline">
                        Discover More
                        <FaUpRightFromSquare className="  inline-block" />
                      </button>
                    </Link>
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropmenuService