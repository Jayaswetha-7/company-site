import Marquee from "react-fast-marquee";

function MarqueeWrapper() {

  return (
    <div>
      <div className="text-blue-600 font-SmoochSans italic font-bold px-2 py-1 text-center text-[1.1vw] m-10 whitespace-break-spaces my-unformatted-div hidden xl:block">
        <Marquee>
          Shaping the Future with Technology... Empowering Leadership with
          Technology... Leading Through Technology...
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeWrapper;
