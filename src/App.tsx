import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import About from "./components/About";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import ServicePage from "./components/Pages/ServicePage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import CarrerPage from "./components/Pages/CarrerPage";
import Lineofbusiness from "./components/Pages/Lineofbusiness";
import NewService from "./components/NewService";
import LandingCard from "./components/LandingCard";
import { Analytics } from "@vercel/analytics/react";
import MarqueeWrapper from "./components/MarqueeWrapper";

import EventToast from "./components/EventToast";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  }, [location]);
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
    <>
      <Analytics />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <LandingCard />
                <About />
                <NewService />
                <Careers />
                <Contact />

                <MarqueeWrapper />
<EventToast/>
                <MarqueeWrapper/>
                <Footer />
               
              </>
            }
          />

          {/* Service Route */}
          <Route path="/services" element={<ServicePage />} />

          {/* About Route */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/lineofbusiness" element={<Lineofbusiness />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/career" element={<CarrerPage />} />

          {/* Careers Route */}
          {/* <Route path="/careers" element={<Careers />} /> */}

          {/* Contact Route */}
          {/* <Route path="/contact" element={<Contact />} /> */}

          {/* 404 Route (Optional) */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
