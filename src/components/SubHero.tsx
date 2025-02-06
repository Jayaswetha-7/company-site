import { ArrowRight } from "lucide-react";
import bgImage from "../assets/subheroimg3.jpg";
import { Link } from "react-router-dom";
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
        <h1 className="  text-white font-bold  font-serif text-[5vw] sm:w-[60%] sm:text-[3vw]  text-left ">
          Your Business, <br /> Our Smartest Solutions
        </h1>
        <Link
          to={"/about/lineofbusiness"}
          className="inline-flex px-3 py-2 text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl items-center "
        >
          Explore More
          <ArrowRight className="ml-2 sm:h-5 sm:w-5 h-3 w-3" />
        </Link>
      </div>
    </section>
  );
}

export default SubHero;

