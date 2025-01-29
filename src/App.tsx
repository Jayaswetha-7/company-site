import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import About from "./components/About";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Service from "./components/Service";

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

      <Hero />
      {/* Services Section */}

      <Service />
      {/* About Section */}

      <About />
      {/* Careers Section */}

      <Careers />
      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
