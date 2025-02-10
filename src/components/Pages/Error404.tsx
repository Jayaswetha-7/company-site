import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Error404 = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundColor: "#f5f0f5",
          backgroundImage: "linear-gradient(0deg, #f5f0f5 0%, #a8e2ea 100%)",
        }}
        className="w-[100vw] bg-white h-[100vh] flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-sans">
            <span className="text-[20vw]">404 !</span>
          </h1>
          <h1 className="text-[3vw] mb-5 font-SmoochSans">oops...Page Not Found</h1>
          <Link to={"/"}>
            <button
              className="bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-400 
    text-white uppercase text-sm md:text-base lg:text-lg 
    px-4 md:px-6 lg:px-8 py-3 m-2 rounded-xl 
    shadow-lg transition-all duration-500 ease-in-out 
    bg-[length:200%_auto] hover:bg-right-center 
    hover:scale-105 hover:shadow-xl 
    flex justify-center items-center 
    w-full max-w-[250px] whitespace-nowrap"
            >
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error404

