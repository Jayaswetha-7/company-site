
const FirstSection = () => {
  return (
    <div className="">
      <div
        id="overview"
        className="relative sm:h-screen h-[64vh] overflow-hidden bg-[url('https://res.cloudinary.com/djjwvuixb/image/upload/v1738295940/smimage_cjczen.jpg')] sm:bg-[url('https://res.cloudinary.com/djjwvuixb/image/upload/v1738230884/about_lqi7up.jpg')] bg-contain bg-no-repeat sm:bg-cover bg-fixed "
      >
        {/* <img className="w-full opacity-80 blur-sm" src={image} alt="" /> */}
      </div>
      <div className="absolute inset-0 flex flex-col  sm:text-white text-black/50 text-lg font-bold w-[75%] mx-auto">
        <h1 className="sm:mt-[10%] mt-[30%] sm:p-2 p-1 sm:text-xl text-[80%]">
          Who we are{" "}
        </h1>
        <div className="sm:bg-white/30 bg-black h-[0.1%] w-full mx-auto  "></div>
        <h1 className="sm:p-3 p-1 sm:text-[7vh] text-[4vh] font-thin mt-1 sm:mt-2">
          About us
        </h1>
      </div>
    </div>
  );
}

export default FirstSection