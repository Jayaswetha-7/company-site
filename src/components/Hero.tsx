import { motion } from "framer-motion";

import SplitText from "./BlurText";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="relative pt-20 pb-32 select-none sm:p-0 sm:h-[100%] h-[95%] content-center bg-[url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGhqaDhuZzdpaHlsNjFlZGtkemU3aThndDI4cXZ1dGZodHBtdmU4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7b8jdNUoFBdcoILjjv/giphy.gif')] bg-cover bg-center  overflow-hidden  rounded-2xl"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* <div className="relative w-16 h-16">
                <Waves className="w-16 h-16 text-blue-400 absolute transform rotate-45" />
                <Waves className="w-16 h-16 text-blue-300 absolute transform -rotate-45" />
              </div> */}
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <SplitText
              text={t("Taphubs")}//"Taphubs"
              className="sm:text-[10vh] text-[5vh] font-semibold text-center"
              delay={150}
              animationFrom={{
                opacity: 0,
                transform: "translate3d(0,50px,0)",
              }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easing"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
          </motion.h1>
          <motion.p
            className="sm:text-xl text-[100%] text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >{t("connecting")}
            {/* Connecting innovation with possibility. We create seamless digital
            experiences that transform businesses and empower growth. */}
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-flex items-center max-w-[300px] px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
             {t("Start_Your_Journey")}
            <ArrowRight className="w-4 h-4 mx-3 text-center" />
          </motion.a>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-gradient-to-br from-blue-500/10 to-blue-500/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
