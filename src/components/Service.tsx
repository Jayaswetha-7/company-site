import { motion } from "framer-motion";
import { ServiceData } from "./Data/ServiceFIleData";
import ServiceCard2 from "./ServiceCard2";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};



const Service = () => {
  return (
    <section id="services" className="py-20  content-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-900 tracking-tight"
          {...fadeIn}
        >
          Our Services
        </motion.h2>

        <motion.div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:w-full gap-4 p-4">
          {ServiceData.map((item, index) => (
            <ServiceCard2
              key={index}
              image={item.image}
              title={item.title}
              desc={item.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
