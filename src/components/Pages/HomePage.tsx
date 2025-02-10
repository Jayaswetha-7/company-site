import { Contact } from "lucide-react";
import About from "../About";
import Careers from "../Careers";
import Footer from "../Footer";
import LandingCard from "../LandingCard";
import Navbar from "../Navbar";
import NewService from "../NewService";
// import EventToast from "../EventToast";
const HomePage = () => {
  return (
    <>
      
      <Navbar />
      <LandingCard />
      <About />
      <NewService />
      <Careers />
      <Contact />

      <Footer />
    </>
  );
};

export default HomePage;
