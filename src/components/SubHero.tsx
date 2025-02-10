import bgImage from "../assets/subheroimg3.jpg";
import { Link } from "react-router-dom";
import { MdOutlineArrowCircleRight } from "react-icons/md";
function SubHero() {
  return (
    <section
      className=" bg-cover bg-center select-none sm:h-[100%] h-[95%] sm:p-0 rounded-2xl mx-auto min-w-screen "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
      }}
    >
      <div className=" mx-auto flex h-[80%] flex-col  justify-center items-start  gap-2 text-center ml-[5vw]   ">
        <h1 className="  text-white font-semibold  font-serif text-[5vw] sm:w-[60%] sm:text-[3vw]  text-left ">
          Your Business, <br /> Our Smartest Solutions
        </h1>
        <Link
          to={"/service/lineofbusiness"}
          className="inline-flex px-3 py-2 text-sm bg-blue-700 text-white  font-semibold hover:bg-green-200 hover:text-black transition-all shadow-lg hover:shadow-xl group items-center rounded-sm duration-700 ease-in-out"
        >
          Explore More
          <MdOutlineArrowCircleRight className=" mx-2 group-hover:animate-bounce  group-hover:text-black transition-all duration-1000  text-white ease-in-out" />
        </Link>
      </div>
    </section>
  );
}

export default SubHero;
