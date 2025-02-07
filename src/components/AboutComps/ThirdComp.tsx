
const ThirdComp = () => {
  return (
    <div className="relative sm:h-screen h-[50vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-[url('https://res.cloudinary.com/djjwvuixb/image/upload/v1738232764/aboutsection_g1yodj.jpg')]"></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex-col sm:mt-[20vh] mt-[5vh] justify-center">
        <p className="text-black/20 sm:text-8xl text-2xl font-bold text-center  ">
          We believe that{" "}
          <span className="text-gray-400 font-extralight font-style: italic">
            technology
          </span>{" "}
          <br /> can{" "}
          <span className="text-gray-400 font-bold stroke-4  stroke-black">
            CHANGE
          </span>{" "}
          the world
        </p>
        <div className="w-full justify-center">
          <p className="sm:text-[90%] text-[60%] text-pretty text-center w-[60vw] mx-auto sm:mt-4 mt-5 text-black/40">
            That's why we're committed to delivering innovative IT solutions to
            businesses of all sizes. Our team of experienced professionals is
            dedicated to helping you achieve your goals and thrive in a rapidly
            evolving digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdComp