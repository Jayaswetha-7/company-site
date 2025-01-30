import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import About from "./components/About";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Service from "./components/Service";
import WhyNeedUs from "./components/WhyNeedUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicePage from "./components/Pages/ServicePage";
import AboutPage from "./components/Pages/AboutPage";

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
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <Navbar />

        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WhyNeedUs />
                <Service />
                <About />
                <Careers />
                <Contact />
              </>
            }
          />

          {/* Service Route */}
          <Route path="/services" element={<ServicePage />} />

          {/* About Route */}
          <Route path="/about" element={<AboutPage />} />

          {/* Careers Route */}
          {/* <Route path="/careers" element={<Careers />} /> */}

          {/* Contact Route */}
          {/* <Route path="/contact" element={<Contact />} /> */}

          {/* 404 Route (Optional) */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
