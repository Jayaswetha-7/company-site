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
      () => (
        <div
          style={{
            backgroundColor: "#f5f0f5",
            backgroundImage: "linear-gradient(0deg, #f5f0f5 0%, #a8e2ea 100%)",
          }}
          className={`relative text-black px-4 py-3 rounded-2xl 
            transform hover:rotate-x-2 hover:rotate-y-2 hover:scale-105 
            transition-all duration-500 ease-in-out 
            w-[20vw] min-w-[18vw] min-h-[10vh] hidden md:block mb-5 me-5`}
        >
          {/* Toast Header */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg font-poppins text-blue-600">
              🗓️ Events
            </h3>
            <button
              onClick={() => toast.remove(toastId)} // Use remove() instead of dismiss()
              className="focus:outline-none"
            >
              <IoIosClose className="text-cyan-600 hover:text-red-500 text-2xl transition-transform hover:scale-125" />
            </button>
          </div>

          <h4 className="text-sm font-semibold font-poppins text-gray-700">
            {formattedDate}
          </h4>

          {/* Event List */}
          <ul className="flex flex-col gap-2 mb-5 text-gray-800 font-medium">
            <li>• International Women's Day</li>
          </ul>
        </div>
      ),
      {
        duration: Infinity, // Stays until manually closed
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
