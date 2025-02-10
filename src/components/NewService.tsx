import { serviceCardData } from "./Data/QuikLinks";
import FlowingMenu from "./FlowingMenu";

const NewService = () => {
  return (
    <div>
      <h1 className="text-center sm:text-[5vh] sm:bg-gray-100 text-[4vh] py-4 font-mono underline hover:text-gray-800 transition-all duration-600 font-bold">
        Our Services
      </h1>
      <div
        className="bg-black mx-auto rounded-3xl"
        style={{ height: "600px", width: "95vw", position: "relative" }}
      >
        <FlowingMenu items={serviceCardData} />
      </div>
    </div>
  );
};

export default NewService;
