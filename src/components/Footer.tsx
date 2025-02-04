import { Link } from "react-router-dom";
import logo from "../assets/LogoBanner.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center">
              <span className="ml-2 text-xl font-bold">
                <img className="w-[20vh]" src={logo} alt="" />
              </span>
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
                  <Link
                    to={"/"}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services"}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/career"}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to={"/services#development"}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services#networking"}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Network & Security
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services#ArtificialIntelligence"}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    AI Integration
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services#CyberSecurity"}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cyber Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} taphubs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
