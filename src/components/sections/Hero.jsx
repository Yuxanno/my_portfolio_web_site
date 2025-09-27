import React from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { handleSmoothScroll } from "../../utils/smoothScroll";

const Hero = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      >
        {/* Фоновые круги - simplified for performance */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ willChange: "transform" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
            style={{ willChange: "transform" }}
          />
        </div>

        {/* Контент */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              <motion.span
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  delay: 0.1,
                }}
              >
                Ravshanov{" "}
              </motion.span>
              <motion.span
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  delay: 0.2,
                }}
              >
                Yuxanno
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 font-light"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.3,
            }}
          >
            <i className="fas fa-code mr-3 text-purple-400"></i>
            Full Stack Developer
          </motion.p>

          <motion.p
            className="text-base text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.4,
            }}
          >
            Zamonaviy veb-ilovalarni yarataman, ishlash samaradorligi,
            foydalanuvchi tajribasi va toza kodga e'tibor bergan holda
          </motion.p>

          {/* Кнопки */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.5,
            }}
          >
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "projects")}
              className="btn-primary text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 text-sm"
            >
              <i className="fas fa-briefcase"></i>
              Ishlarni ko'rish
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="border-2 border-gray-600 bg-gray-800/50 backdrop-blur-sm text-gray-300 px-6 py-3 rounded-full hover:border-purple-400 hover:text-white transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 hover:scale-105 text-sm"
            >
              <i className="fas fa-envelope"></i>
              Men bilan bog'lanish
            </a>
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Hero;