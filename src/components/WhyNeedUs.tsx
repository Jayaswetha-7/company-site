import { useTranslation,Trans } from "react-i18next";
import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 150 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 2 },
};
import Wcucomp from "./Wcucomp";
import { wcuData } from "./Data/WhyChooseUsData";
const WhyNeedUs = () => {
  const { t } = useTranslation();
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
           {t("Why")} <br /> {t("Chooseus")} 
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
                  header={t(item.title)}
                  desc={t(item.description)}
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
