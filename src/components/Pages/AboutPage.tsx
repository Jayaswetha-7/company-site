import Footer from "../Footer";
import Navbar from "../Navbar";
// import image from "../../assets/aboutdes.png";

function AboutPage() {
  return (
    <div>
      <Navbar />
      {/* first section */}
      <div className="">
        <div className="relative sm:h-screen h-[64vh] overflow-hidden bg-[url('https://res.cloudinary.com/djjwvuixb/image/upload/v1738295940/smimage_cjczen.jpg')] sm:bg-[url('https://res.cloudinary.com/djjwvuixb/image/upload/v1738230884/about_lqi7up.jpg')] bg-contain bg-no-repeat sm:bg-cover bg-fixed ">
          {/* <img className="w-full opacity-80 blur-sm" src={image} alt="" /> */}
        </div>
        <div className="absolute inset-0 flex flex-col  sm:text-white text-black/50 text-lg font-bold w-[75%] mx-auto">
          <h1 className="sm:mt-[10%] mt-[20%] sm:p-2 p-1 sm:text-xl text-[60%]">
            Who we are{" "}
          </h1>
          <div className="sm:bg-white/30 bg-black h-[0.1%] w-full mx-auto  "></div>
          <h1 className="sm:p-3 p-1 sm:text-[7vh] text-[4vh] font-thin mt-1 sm:mt-2">
            About us
          </h1>
        </div>
      </div>
      {/* second section */}
      <div className="min-h-[40vh] bg-black/80 items-center justify-center flex ">
        <p className="text-white/50 w-[65%] text-pretty text-center text-[100%] sm:p-0 p-3 ">
          Taphubs is a forward-thinking IT solutions provider dedicated to
          helping businesses navigate the digital landscape. With a focus on
          innovation, we offer cutting-edge services in app development, web
          solutions, cloud services, and cybersecurity. Our expert team ensures
          your digital infrastructure is secure, efficient, and scalable,
          allowing you to focus on growth. At Taphubs, we are committed to
          delivering tailored solutions that drive success, streamline
          operations, and empower businesses to thrive in an increasingly
          connected world.
        </p>
      </div>
      {/* third section */}
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
              That's why we're committed to delivering innovative IT solutions
              to businesses of all sizes. Our team of experienced professionals
              is dedicated to helping you achieve your goals and thrive in a
              rapidly evolving digital landscape.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
