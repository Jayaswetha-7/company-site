import Navbar from "../Navbar"
// import large from "../../assets/large.mp4"
import JobOpenings from "../JobOpenings"
import { useTranslation } from "react-i18next"

const CarrerPage = () => {
  const { t}= useTranslation()
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
          <source
            src="https://res.cloudinary.com/djjwvuixb/video/upload/v1739424820/large_online-video-cutter.com_ztq3a5.webm"
            type="video/mp4"
          />
          {t("your")}
          {/* Your browser does not support the video tag. */}
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full bg-black/50 text-white text-center px-6">
          <JobOpenings />
          <p className="mt-6 text-sm absolute bottom-6">
            {t("Wanttojoin")}{" "}
            <span className="text-red-500">careers@taphubs.com</span>.
          </p>
        </div>

        {/* work here */}
      </div>
    </div>
  );
}

export default CarrerPage