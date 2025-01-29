import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};
const Careers = () => {
  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Join Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate
            about technology and innovation. Join us in shaping the future of
            digital solutions.
          </p>
        </motion.div>
        <motion.div className="bg-white p-8 rounded-xl shadow-lg" {...fadeIn}>
          <h3 className="text-xl font-semibold mb-4">Open Positions</h3>
          <p className="text-gray-600">
            We're currently building our team. Check back soon for exciting
            opportunities or send us your resume for future considerations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
