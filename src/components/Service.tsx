import { motion } from "framer-motion";
import ServiceCard2 from "./ServiceCard2";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const ServiceData = [
  {
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Web Development",
    description:
      "Creating responsive, scalable, and visually stunning digital experiences that engage and convert.",
  },
  {
    image:
      "https://vareli.co.in/vareliCMS/public/images/2348102380/network_solution.jpg",
    title: "Network Solutions",
    description:
      "Building robust, secure, and efficient network infrastructures for modern businesses.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/man-holding-phone-using-digital-device-data-theme-drawing-innovation-concept_218381-4979.jpg",
    title: "AI Integration",
    description:
      "Leveraging artificial intelligence to automate processes and drive intelligent decision-making",
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/02/45/63/69/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg",
    title: "Cybersecurity",
    description:
      "Protecting your digital assets with advanced security measures and proactive monitoring.",
  },
];

// import { Waves, Shield, Network, Brain,  } from "lucide-react";

// import ServiceCard from "./ServiceCard";
const Service = () => {
  return (
    <section id="services" className="py-20  content-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-900 tracking-tight"
          {...fadeIn}
        >
          Our Expertise
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
