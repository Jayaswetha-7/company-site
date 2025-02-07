import { Contact } from "lucide-react";
import About from "../About";
import Careers from "../Careers";
import Footer from "../Footer";
import LandingCard from "../LandingCard";
import MarqueeWrapper from "../MarqueeWrapper";
import Navbar from "../Navbar";
import NewService from "../NewService";
import EventToast from "../EventToast";
const HomePage = () => {
  return (
    <>
      <EventToast path={location.pathname} />
      <Navbar />
      <LandingCard />
      <About />
      <NewService />
      <Careers />
      <Contact />
      <MarqueeWrapper />
      <Footer />
    </>
  );
};

export default HomePage;
