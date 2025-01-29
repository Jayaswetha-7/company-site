import React from "react";

import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">About Us</h2>
            <p className="text-gray-600 mb-4">
              As a forward-thinking technology company, we're committed to
              delivering innovative solutions that drive digital transformation.
              Our team of experts brings together years of experience in various
              tech domains.
            </p>
            <p className="text-gray-600">
              We believe in staying ahead of the curve, continuously learning
              and adapting to new technologies to provide our clients with the
              best possible solutions for their unique challenges.
            </p>
          </motion.div>
          <motion.div className="relative" {...fadeIn}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
