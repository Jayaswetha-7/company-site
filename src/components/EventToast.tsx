import { useEffect, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import { IoIosClose } from "react-icons/io";
import { EventsData } from "./Data/EventsData"
// 🗓️ Event List with Dates (Format: YYYY-MM-DD)



export default function EventToast() {
  const hasShown = useRef(false); // ✅ Prevents duplicate toasts

  useEffect(() => {
    if (hasShown.current) return;
    hasShown.current = true; // Mark as shown

    const today = new Date().toISOString().split("T")[0]; // ✅ Today's Date (YYYY-MM-DD)
    const todayEvents = EventsData.filter((event) => event.date === today); // ✅ Filter Events for Today

    if (todayEvents.length === 0) return; // ❌ No Event Today? Skip the Toast

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
           transform hover:scale-105 
          transition-all duration-500 ease-in-out 
          w-[20vw] min-w-[18vw] min-h-[10vh] hidden md:block mb-5 me-5`}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg font-poppins text-cyan-700">
              🗓️ Today's Events
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

          <h4 className="text-sm font-semibold font-poppins text-gray-700 mb-2">
            {formattedDate}
          </h4>

          <ul className="flex flex-col gap-2 mb-5 text-gray-800 text-sm font-medium">
            {todayEvents.map((event, index) => (
              <li key={index}>• {event.name}</li> // ✅ Show Events for Today
            ))}
          </ul>
        </div>
      ),
      {
        duration: Infinity,
        position: "bottom-right",
      }
    );
  }, []);

  return <Toaster position="bottom-right" />;
}

// import { useEffect, useRef } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import { IoIosClose } from "react-icons/io";

// export default function EventToast() {
//   const hasShown = useRef(false); // ✅ Prevents duplicate toasts

//   useEffect(() => {
//     if (hasShown.current) return;
//     hasShown.current = true; // Mark as shown

//     const formattedDate = new Date().toLocaleDateString("en-US", {
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     });

//     const toastId = toast.custom(
//       (t) => (
//         <div
//           style={{
//             backgroundColor: "#f5f0f5",
//             backgroundImage: "linear-gradient(0deg, #f5f0f5 0%, #a8e2ea 100%)",
//           }}
//           className={`relative ${
//             t.visible ? "animate-slide-in" : "animate-slide-out"
//           } text-black px-4 py-3 rounded-2xl
//            transform
//           hover:rotate-x-2 hover:rotate-y-2 hover:scale-105
//           transition-all duration-500 ease-in-out
//           w-[20vw] min-w-[18vw] min-h-[10vh] hidden md:block mb-5 me-5`}
//         >
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="font-bold text-lg font-poppins text-cyan-700">
//               🗓️ Events
//             </h3>
//             <button
//               onClick={() => {
//                 toast.dismiss(toastId);
//                 hasShown.current = false; // ✅ Reset for re-trigger if needed
//               }}
//             >
//               <IoIosClose className="text-cyan-600 hover:text-red-500 text-2xl transition-transform hover:scale-125" />
//             </button>
//           </div>

//           <h4 className="text-sm font-semibold font-poppins text-gray-700">
//             {formattedDate}
//           </h4>

//           <ul className="flex flex-col gap-2 mb-5 text-gray-800 text-sm font-medium">
//             <li>• International Women's Day</li>
//           </ul>
//         </div>
//       ),
//       {
//         duration: Infinity, // Toast duration
//         position: "bottom-right",
//       }
//     );
//   }, []);

//   return <Toaster position="bottom-right" />;
// }
