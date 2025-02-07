import { useEffect, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import { IoIosClose } from "react-icons/io";

export default function EventToast({ path }: { path: string }) {
  const hasShown = useRef(false); // ✅ Prevents duplicate toasts

  useEffect(() => {
    if (path !== "/" || hasShown.current) return; // ✅ Show only on Home
    hasShown.current = true; // Mark as shown

    const formattedDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const toastId = toast.custom(
      (t) => (
        <div
          style={{
            backgroundColor: "#f5f0f5",
            backgroundImage: "linear-gradient(0deg, #f5f0f5 0%, #a8e2ea 100%)",
          }}
          className={`relative ${
            t.visible ? "animate-slide-in" : "animate-slide-out"
          } text-black px-4 py-3 rounded-2xl 
          border border-gray-500 transform 
          hover:rotate-x-2 hover:rotate-y-2 hover:scale-105 
          transition-all duration-500 ease-in-out 
          w-[20vw] min-w-[18vw] min-h-[10vh] hidden md:block mb-5 me-5`}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg font-poppins text-cyan-700">
              🗓️ Events
            </h3>
            <button
              onClick={() => {
                toast.dismiss(toastId);
                hasShown.current = false; // ✅ Reset for re-trigger if needed
              }}
            >
              <IoIosClose className="text-cyan-600 hover:text-red-500 text-2xl transition-transform hover:scale-125" />
            </button>
          </div>

          <h4 className="text-sm font-semibold font-poppins text-gray-700">
            {formattedDate}
          </h4>

          <ul className="flex flex-col gap-2 mb-5 text-gray-800 font-medium">
            <li>• International Women's Day</li>
          </ul>
        </div>
      ),
      {
        duration: 3000, // Toast duration
        position: "bottom-right",
      }
    );
  }, [path]); // ✅ Runs when path changes

  return <Toaster position="bottom-right" />;
}
