import Marquee from "react-fast-marquee";

function MarqueeWrapper() {

  return (
    <div className="w-[100vw] bg-gray-900 ">
      <div className="text-white bg-gray-900 w-full font-SmoochSans italic font-bold  py-1 text-center text-[1.1vw] whitespace-break-spaces my-unformatted-div hidden xl:block">
        <Marquee speed={100}>
          Shaping the Future with Technology...... Empowering Leadership with
          Technology...... Leading Through Technology......
        </Marquee>
        
      </div>
    </div>
  );
}

export default MarqueeWrapper;
