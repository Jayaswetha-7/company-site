import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

import { Waves, Shield, Network, Brain } from "lucide-react";

import ServiceCard from "./ServiceCard";
const Service = () => {
  return (
    <section id="services" className="py-20  content-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-900 tracking-tight"
          {...fadeIn}
        >
          Our Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Web Development"
            description="Creating responsive, scalable, and visually stunning digital experiences that engage and convert."
            Icon={Waves}
          />
          <ServiceCard
            title="Network Solutions"
            description="Building robust, secure, and efficient network infrastructures for modern businesses."
            Icon={Network}
          />
          <ServiceCard
            title="AI Integration"
            description="Leveraging artificial intelligence to automate processes and drive intelligent decision-making."
            Icon={Brain}
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protecting your digital assets with advanced security measures and proactive monitoring."
            Icon={Shield}
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
