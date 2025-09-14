import React from "react";
import { motion } from "framer-motion";
import { handleSmoothScroll } from "../../utils/smoothScroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Фоновые круги */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            y: [0, -30, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      {/* Контент */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            <motion.span
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ravshanov{" "}
            </motion.span>
            <motion.span
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Yuxanno
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <i className="fas fa-code mr-3 text-purple-400"></i>
          Full Stack Developer
        </motion.p>

        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Zamonaviy veb-ilovalarni yarataman, ishlash samaradorligi,
          foydalanuvchi tajribasi va toza kodga e'tibor bergan holda
        </motion.p>

        {/* Кнопки */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "projects")}
            className="btn-primary text-white px-8 py-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
          >
            <i className="fas fa-briefcase"></i>
            Ishlarni ko'rish
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="border-2 border-gray-600 bg-gray-800/50 backdrop-blur-sm text-gray-300 px-8 py-4 rounded-full hover:border-purple-400 hover:text-white transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 hover:scale-105"
          >
            <i className="fas fa-envelope"></i>
            Men bilan bog'lanish
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ y: 5 }}
      >
        <a
          href="#about"
          onClick={(e) => handleSmoothScroll(e, "about")}
          className="text-gray-400 hover:text-white transition-all duration-300 flex flex-col items-center gap-2"
        >
          <span className="text-sm font-light">Pastga o'tish</span>
          <i className="fas fa-chevron-down"></i>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
