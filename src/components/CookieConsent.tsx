import React, { useState, useEffect } from "react";
import { TbCookie } from "react-icons/tb";
const CookieConsent: React.FC = () => {
  // State to track whether the consent dialog should be visible.
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage for a cookie acceptance/rejection flag.
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    const cookieRejected = localStorage.getItem("cookieRejected");

    // If neither accepted nor rejected, show the dialog.
    if (!cookieAccepted && !cookieRejected) {
      setVisible(true);
    }
  }, []);

  // Function to handle acceptance.
  const handleAccept = (): void => {
    localStorage.setItem("cookieAccepted", "true");
    setVisible(false);
  };

  // Function to handle rejection.
  const handleReject = (): void => {
    localStorage.setItem("cookieRejected", "true");
    setVisible(false);
  };

  // If not visible, render nothing.
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 rounded-xl select-none px-4 py-4 max-w-[60vw] mx-auto left-0 right-0 text-black  bg-white border-black border   z-50">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-center md:text-left mb-4 md:mb-0 text-sm font-serif">
          <TbCookie className="inline-block mx-2" /> We use cookies to improve your experience on our website.
          By clicking "Accept", you consent to our cookie policy.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="bg-blue-500 text-center hover:text-black transition-colors duration-400 hover:bg-green-600/50 text-white px-2 text-[12px] "
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="bg-white text-blue-500  border border-blue-400 hover:bg-gray-200 transition-colors text-[12px] px-2  "
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
