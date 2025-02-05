import { ArrowRight } from "lucide-react";
import bgImage from "../assets/subheroimg2.jpg";
import { Link } from "react-router-dom";
function SubHero() {
  return (
    <section
      className=" bg-cover bg-center select-none sm:h-[100%] h-[95%] sm:p-0 rounded-2xl content-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:ms-[20vw] sm:mb-[10vw] mb-[12vh] items-center sm:items-start ">
        <h1 className="sm:text-[80px] text-[30px] text-[#3b3a39] font-bold  font-mono text-center sm:text-left ">
          All your bussiness Solutions
        </h1>
        <Link
          to={"/about/lineofbusiness"}
          className="inline-flex items-center sm:w-[12vw] w-[65%] h-[5vh] px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl sm:text-[100%] text-[60%]"
        >
          Explore More
          <ArrowRight className="ml-2 sm:h-5 sm:w-5 h-3 w-3" />
        </Link>
      </div>
    </section>
  );
}

export default SubHero;
