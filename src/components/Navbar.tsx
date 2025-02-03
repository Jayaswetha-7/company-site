import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaUpRightFromSquare } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [activeTab, setActiveTab] = useState("Overview");

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
  ];

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
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={"fixed w-full z-50 transition-all duration-300 bg-white/90 text-black backdrop-blur-sm shadow-lg"}
    >
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="src/assets/LogoBanner.png"
              alt=""
              className="w-[100px] h-[50px]"
            />
          </motion.div>
          {/* Home */}
          <div className="hidden md:flex space-x-8">
            <Link to={"/"}>
              <h1>Home</h1>
            </Link>
            {/* About */}
            <Sheet
              open={openSheet === "about"}
              onOpenChange={(isOpen) => setOpenSheet(isOpen ? "about" : null)}
            >
              <div onMouseEnter={() => setOpenSheet("about")}>About</div>
              <SheetContent className="">
                <div className="wfull  flex h-[20vh] items-center px-4">
                  <div className="max-w-[30vw] min-w-[20vw] pl-3 flex flex-col gap-3">
                    {tabs.map((tab) => (
                      <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`p-3 text-left flex justify-between font-medium  text-black border-b border-black transition-all 
              ${
                activeTab === tab.name
                  ? "bg-gray-500/40"
                  : " hover:bg-blue-300/30"
              }`}
                      >
                        {tab.name} <MdOutlineArrowRightAlt />
                      </button>
                    ))}
                  </div>
                  <div className="w-full ">
                    {tabs.map(
                      (tab) =>
                        activeTab === tab.name && (
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
              <div
                onMouseEnter={() => setOpenSheet("services")}
                // onMouseLeave={() => setOpenSheet(null)}
              >
                Services
              </div>
              <SheetContent className="">
                <div className="wfull flex px-4">
                  <div className="max-w-[30vw] min-w-[20vw] pl-3 flex flex-col gap-3">
                    {servicedata.map((tab) => (
                      <button
                        key={tab.title}
                        onClick={() => setActiveTab(tab.title)}
                        className={`p-3 text-left flex justify-between font-medium  text-black border-b border-black transition-all 
              ${
                activeTab === tab.title
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
                        activeTab === tab.title && (
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
            <Link to={"/contact"}>
              {" "}
              <div>Contact</div>
            </Link>
            <Link to={"/career"}>
              <div>Careers</div>
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pb-4">
                {["Home", "About", "Services", "Careers", "Contact"].map(
                  (item) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link
                        to={
                          ["Home", "About", "Services"].includes(item)
                            ? `/${item.toLowerCase()}`
                            : `/#${item.toLowerCase()}`
                        }
                        className={`hover:text-purple-600 transition-colors ${
                          scrolled ? "" : ""
                        }`}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

//  <motion.a
//    key={item}
//    href={`#${item.toLowerCase()}`}
//    className={` hover:text-purple-600 transition-colors ${scrolled ? "" : ""}`}
//    whileHover={{ scale: 1.05 }}
//    whileTap={{ scale: 0.95 }}
//    onClick={() => setIsOpen(false)}
//  >
//    {item}
//  </motion.a>;
