import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 150 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 2 },
};
import Wcucomp from "./Wcucomp";
const wcuData = [
  {
    image:
      "https://res.cloudinary.com/djjwvuixb/image/upload/v1738130575/pic1_ss7kg9.svg",
    title: "Expertise",
    description:
      "Our team of highly skilled professionals brings extensive experience and deep industry knowledge to deliver cutting-edge IT solutions tailored to your unique business needs.",
  },
  {
    image:
      "https://res.cloudinary.com/djjwvuixb/image/upload/v1738132103/pic2_tn8fqu.svg",
    title: "Technology",
    description:
      "We stay ahead of industry trends, leveraging the latest advancements in technology to provide you with innovative, future-proof solutions that drive success.",
  },
  {
    image:
      "https://res.cloudinary.com/djjwvuixb/image/upload/v1738132103/pic3_sxk4lg.svg",
    title: "Solutions",
    description:
      "Our client-centric approach ensures that we develop customized solutions tailored to your business objectives, enhancing efficiency, scalability, and long-term growth.",
  },
  {
    image:
      "https://res.cloudinary.com/djjwvuixb/image/upload/v1738132103/pic4_ppj12d.svg",
    title: "Results",
    description:
      "With a proven track record of success, we have helped businesses across industries achieve their goals through strategic, high-impact IT solutions.",
  },
];

const WhyNeedUs = () => {
  return (
    <section
      id="service"
      className=" bg-gray-900 select-none sm:h-[100%] h-[95%] sm:p-0 rounded-2xl content-center "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className=" w-full h-[100%] flex flex-col
           flex-nowrap justify-between mt-4"
          {...fadeIn}
        >
          {/* why choose us */}
          <motion.h1 className="  font-serif text-white hover:text-blue-300  transition-all duration-500 font-medium sm:text-left text-[5vh] sm:text-[7vh] my-6">
            Why <br /> Choose us ?
          </motion.h1>
          {/* div */}
          <motion.div className="flex gap-4 mt-2 justify-around items-center  sm:flex-nowrap  flex-wrap  ">
            {wcuData.map((item, index) => (
              <motion.div
                className=" min-w-[40%] max-w-[40%] sm:min-w-[20%]"
                key={index}
              >
                <Wcucomp
                  image={item.image}
                  header={item.title}
                  desc={item.description}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="border-t border-gray-800  mt-6 w-[65%] mx-auto"></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNeedUs;
