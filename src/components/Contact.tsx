import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};
import {
  
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";
const Contact = () => {
  return (
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
  );
};

export default Contact;
