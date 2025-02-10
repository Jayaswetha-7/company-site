import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { Routes, Route, useLocation } from "react-router-dom";
import ServicePage from "./components/Pages/ServicePage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import CarrerPage from "./components/Pages/CarrerPage";
import Lineofbusiness from "./components/Pages/Lineofbusiness";
import { Analytics } from "@vercel/analytics/react";
import Error404 from "./components/Pages/Error404";
import HomePage from "./components/Pages/HomePage";
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
      <EventToast />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/lineofbusiness" element={<Lineofbusiness />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/career" element={<CarrerPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
