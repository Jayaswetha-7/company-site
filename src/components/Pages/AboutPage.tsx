import Navbar from "../Navbar";
// import image from "../../assets/aboutdes.png";

function AboutPage() {
  return (
    <div>
      <Navbar />
      {/* first section */}
      <div className="">
        <div className="relative h-screen overflow-hidden bg-[url('https://res.cloudinary.com/djjwvuixb/image/upload/v1738230884/about_lqi7up.jpg')] bg-cover bg-fixed ">
          {/* <img className="w-full opacity-80 blur-sm" src={image} alt="" /> */}
        </div>
        <div className="absolute inset-0 flex flex-col  text-white text-lg font-bold w-[75%] mx-auto">
          <h1 className="mt-[10%] p-2">Who we are </h1>
          <div className="bg-white/30 h-[0.1%] w-full mx-auto  "></div>
          <h1 className="p-3 sm:text-[7vh] font-thin mt-2">About us</h1>
        </div>
      </div>
      {/* second section */}
      <div className="h-[40vh] bg-black/80 items-center justify-center flex ">
        <p className="text-white/50 w-[65%] text-pretty text-center text-2xl">
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
      <div className="h-screen w-full bg-no-repeat bg-cover bg-center bg-[url('https://res.cloudinary.com/djjwvuixb/image/upload/v1738232764/aboutsection_g1yodj.jpg')]"></div>
    </div>
  );
}

export default AboutPage;
