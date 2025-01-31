import Navbar from "../Navbar"
import large from "../../assets/large.mp4"
import JobOpenings from "../JobOpenings"

const CarrerPage = () => {
  return (
    <div>
    <Navbar />
    {/* first section */}
    <div className="w-screen h-screen ">
      {/* work here */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={large} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
    
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full bg-black/50 text-white text-center px-6">
        <JobOpenings />
        <p className="mt-6 text-sm absolute bottom-6">
          Want to join the Taphubs team? If you have a passion & want to work for a rapidly growing entrepreneurial company, send your resume to{" "}
          <span className="text-red-500">careers@taphubs.com</span>.
        </p>
      </div>



       {/* work here */}
      </div>
    </div>
  )
}

export default CarrerPage