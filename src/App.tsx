import { useEffect, useState } from "react";
import {
  Waves,
  Shield,
  Network,
  Brain,
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";
import Loader from "./components/Loader";
import SplitText from "./components/BlurText";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the loader (e.g., 3 seconds)
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-20 pb-32 sm:h-[100vh] content-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* <div className="relative w-16 h-16">
                <Waves className="w-16 h-16 text-blue-400 absolute transform rotate-45" />
                <Waves className="w-16 h-16 text-blue-300 absolute transform -rotate-45" />
              </div> */}
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <SplitText
                text="Taphubs"
                className="text-[10vh] font-semibold text-center"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                // onLetterAnimationComplete={handleAnimationComplete}
              />
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Connecting innovation with possibility. We create seamless digital
              experiences that transform businesses and empower growth.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gradient-to-br from-blue-500/10 to-blue-500/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2,
              }}
            />
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                About Us
              </h2>
              <p className="text-gray-600 mb-4">
                As a forward-thinking technology company, we're committed to
                delivering innovative solutions that drive digital
                transformation. Our team of experts brings together years of
                experience in various tech domains.
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

      {/* Careers Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Ready to transform your business with cutting-edge technology
                solutions? Let's start a conversation about your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-600">contact@taphubs.org</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-600">+91 7788452354</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-6 w-6 text-blue-600 mr-3" />
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.form
              className="space-y-6"
              {...fadeIn}
              onSubmit={(e) => {
                e.preventDefault();
                console.log("form submitted");
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
      {/* <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-8">
                Let's discuss how we can help you achieve your business goals
                with innovative technology solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-600">contact@taphubs.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-6 w-6 text-blue-600 mr-3" />
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.form className="space-y-6" {...fadeIn}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section> */}
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center">
                <Waves className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">taphubs</span>
              </div>
              <p className="mt-4 text-gray-400 max-w-md">
                Empowering businesses with innovative technology solutions for a
                digital future.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#home"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#careers"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Networking
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      AI Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Cybersecurity
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} taphubs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
