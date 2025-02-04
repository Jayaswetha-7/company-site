import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "../assets/subheroimg2.jpg";
function SubHero() {
  return (
    <section
      className=" bg-cover bg-center  sm:h-[100%] h-[95%] sm:p-0 rounded-2xl content-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:ms-[20vw] sm:mb-[10vw]">
        <h1 className="sm:text-[80px] text-[30px] text-gray-900 font-bold font-mono  ">
          All your bussiness Solutions
        </h1>
        <motion.a
          href=""
          className="inline-flex items-center sm:w-[10vw] w-[50%] px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Know More
          <ArrowRight className="ml-2 h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
}

export default SubHero;
