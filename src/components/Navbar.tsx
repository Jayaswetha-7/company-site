import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaUpRightFromSquare } from "react-icons/fa6";
import imageLogo from "../assets/LogoBanner.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeAboutTab, setActiveAboutTab] = useState("Overview");
  const [activeServiceTab, setActiveServiceTab] = useState("Web Development");

  // Tab Data
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
  // service data
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

  const [openSheet, setOpenSheet] = useState<"about" | "services" | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleMouseEnter = (menu: "about" | "services") => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenSheet(menu);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setOpenSheet(null);
    }, 2000); // 2000 milliseconds = 2 seconds
  };
  useEffect(() => {
    if (openSheet === "about") {
      setActiveAboutTab("Our Line of Business");
    } else if (openSheet === "services") {
      setActiveServiceTab("Web Development");
    }
  }, [openSheet]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={
        "fixed w-full z-50 transition-all duration-300 bg-white text-black  shadow-lg"
      }
    >
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 gap-2 items-center">
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

          
          <div className="hidden md:flex space-x-8 font-semibold">
            {/* Home */}
            <Link to={"/"}>
              <h1>Home</h1>
            </Link>

            {/* About */}
            <Sheet
              open={openSheet === "about"}
              onOpenChange={(isOpen) => setOpenSheet(isOpen ? "about" : null)}
            >
              <Link to={"/about"}>
                <div onMouseEnter={() => handleMouseEnter("about")}>About</div>
              </Link>

              <SheetContent
                className=""
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="wfull  flex  h-[30vh] items-center px-4">
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
                                <h2 className="text-2xl font-semibold">
                                  {tab.title}
                                </h2>
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
              </SheetContent>
            </Sheet>

            {/* Services */}
            <Sheet
              open={openSheet === "services"}
              onOpenChange={(isOpen) =>
                setOpenSheet(isOpen ? "services" : null)
              }
            >
              <Link to={"/services"}>
                <div onMouseEnter={() => handleMouseEnter("services")}>
                  Services
                </div>
              </Link>

              <SheetContent
                className=""
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => handleMouseEnter("services")}
              >
                <div className="wfull flex px-4">
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
                            <h2 className="text-2xl font-semibold">
                              {tab.header}
                            </h2>
                            <p className="mt-2 text-black/60 text-lg">
                              {tab.content}
                            </p>
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
              </SheetContent>
            </Sheet>

            {/* Contact Section */}
            <Link to={"/contact"}>
              <div>Contact</div>
            </Link>

            {/* Carrer Section */}
            <Link to={"/career"}>
              <div>Careers</div>
            </Link>
          </div>

          {/* Mobile Nav Closing and Opening Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
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
                {[
                  "Home",
                  "About",
                  "Services",
                  "Products",
                  "Career",
                  "Contact",
                ].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="  text-center  border-b  w-[10vw] mx-auto   "
                  >
                    <Link
                      to={
                        item === "Home"
                          ? "/"
                          : item === "Products"
                          ? "/about/lineofbusiness"
                          : `/${item.toLowerCase()}`
                      }
                      className="  text-center font-semibold font-serif 
                      "
                    >
                      {item}
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
