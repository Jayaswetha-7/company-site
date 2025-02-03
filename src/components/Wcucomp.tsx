import { motion } from "framer-motion";

interface wcucompProps {
  image: string;
  header: string;
  desc: string;
}

const Wcucomp = ({ image, header, desc }: wcucompProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className=" flex flex-col w-full gap-2 group transition-all hover:scale-105  duration-300 antialiased"
    >
      <img
        src={image}
        width={"150px"}
        height={"150px"}
        className=" mx-auto sm:w-[150px] w-[80px]"
      />
      <motion.h1 className=" text-[2vh]  text-white text-center group-hover:text-green-400  transition-all duration-300">
        {header}
      </motion.h1>
      <motion.p className=" group-hover:text-green-200  transition-all duration-300 text-center text-gray-400 sm:text-sm text-[50%] w-full">
        {desc}
      </motion.p>
    </motion.div>
  );
};

export default Wcucomp;
