import { useEffect, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import { IoIosClose } from "react-icons/io";

export default function EventToast() {
  const hasShown = useRef(false); // Track if the toast has already been shown

  useEffect(() => {
    const formattedDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    if (hasShown.current) return; // Prevent duplicate toasts
    hasShown.current = true;

    // Custom Toast for Today's Events
    const toastId = toast.custom(
      (t) => (
        <div
          className={`relative ${
            t.visible ? "animate-slide-in" : "animate-slide-out"
          } bg-white/30 text-white 
          px-4 py-3 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5),0_0_20px_5px_rgba(0,255,255,0.3)] 
          border border-gray-400/30 transform hover:rotate-x-2 hover:rotate-y-2 hover:scale-105 
          transition-all duration-500 ease-in-out w-[20vw] min-w-[18vw] min-h-[10vh] hidden md:block mb-5 me-5`}
        >
          {/* Glowing Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 pointer-events-none mix-blend-overlay"></div>

          {/* Toast Header */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg font-poppins text-cyan-300">
              🗓️ Events
            </h3>
            <button onClick={() => toast.dismiss(toastId)}>
              <IoIosClose className="text-cyan-400 hover:text-red-500 text-2xl transition-transform hover:scale-125" />
            </button>
          </div>

          <h4 className="text-sm font-semibold font-poppins text-gray-200">
            {formattedDate}
          </h4>

          {/* Event List */}
          <ul className="flex flex-col gap-2 mb-5 text-gray-300">
            <li>• International Women's Day</li>
          </ul>
        </div>
      ),
      {
        duration: 3000, // Auto-close after 30 seconds
        position: "bottom-right",
      }
    );
  }, []); // Runs only once on mount

  return (
    <div>
      {/* Toaster Positioned at Bottom-Right */}
      <Toaster position="bottom-right" />
    </div>
  );
}
