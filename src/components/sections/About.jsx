import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-auto py-20 px-6 bg-gray-800/30 backdrop-blur-lg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>

      {/* Background tech atmosphere - reduced */}
      <div className="absolute inset-0 opacity-8">
        {/* Floating code elements - reduced */}
        <motion.div
          className="absolute top-20 left-1/6 text-purple-400/25 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          npm
        </motion.div>
        <motion.div
          className="absolute top-40 right-1/5 text-blue-400/25 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          git
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/8 text-cyan-400/25 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          api
        </motion.div>
        <motion.div
          className="absolute bottom-48 right-1/7 text-pink-400/25 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          jsx
        </motion.div>

        {/* Background grid - reduced */}
        <motion.div
          className="absolute top-1/6 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/5 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="absolute left-1/5 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/4 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        ></motion.div>
        <motion.div
          className="absolute right-1/6 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-pink-400/4 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        ></motion.div>

        {/* Floating particles - reduced */}
        <motion.div
          className="absolute top-24 left-16 w-1 h-1 bg-purple-400/20 rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        ></motion.div>
        <motion.div
          className="absolute top-64 right-20 w-1.5 h-1.5 bg-blue-400/15 rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-40 left-24 w-0.5 h-0.5 bg-cyan-400/30 rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-56 right-16 w-1 h-1 bg-pink-400/25 rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        ></motion.div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <i className="fas fa-user mr-4 text-purple-400"></i>
          Men haqimda
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              className="text-lg text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Salom! Men 5 yildan ortiq tajribaga ega full stack dasturchiman.
              Zamonaviy texnologiyalar va dasturlash yondashuvlariga
              ixtisoslashganman.
            </motion.p>
            <motion.p
              className="text-lg text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Mening ishtiyoqim - intuitivli foydalanuvchi interfeyslari va
              kengaytiriladigan backend yechimlarini yaratish. Doimo yangi
              texnologiyalar va eng yaxshi amaliyotlarni o'rganishga intilaman.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              {[
                "Veb-dasturlash",
                "API dizayn",
                "Ma'lumotlar bazasi",
                "DevOps",
              ].map((item, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm shadow-xl hover:bg-purple-600/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <i
                    className={`fas ${
                      ["fa-globe", "fa-plug", "fa-database", "fa-server"][index]
                    } mr-2`}
                  ></i>
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-64 h-64 relative flex items-center justify-center overflow-hidden">
              {/* Background matrix rain effect */}
              <div className="absolute inset-0 opacity-20">
                {[
                  "0101",
                  "<div>",
                  "func()",
                  "var x",
                  "=> {}",
                  "console",
                  "if()",
                  "[0,1]",
                  "class",
                  "&&",
                  "return",
                  "()",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    className={`absolute text-xs element-fade-in text-${
                      [
                        "green",
                        "blue",
                        "purple",
                        "cyan",
                        "pink",
                        "yellow",
                        "red",
                        "indigo",
                        "orange",
                        "teal",
                        "violet",
                        "lime",
                      ][index % 12]
                    }-400/30`}
                    style={{
                      top: `${index * 8}%`,
                      left:
                        index % 2 === 0 ? `${10 + (index % 5) * 10}%` : "auto",
                      right:
                        index % 2 === 1 ? `${10 + (index % 5) * 10}%` : "auto",
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {text}
                  </motion.div>
                ))}
              </div>

              {/* Animated geometric shapes */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute top-0 left-0 w-16 h-16 bg-purple-500/40 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                ></motion.div>
                <motion.div
                  className="absolute top-0 right-0 w-12 h-12 bg-blue-500/40 rounded-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.div>
                <motion.div
                  className="absolute bottom-0 left-0 w-14 h-14 bg-cyan-500/40 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                ></motion.div>
                <motion.div
                  className="absolute bottom-0 right-0 w-10 h-10 bg-pink-500/40 rounded-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                ></motion.div>
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                ></motion.div>

                {/* Additional floating particles */}
                <motion.div
                  className="absolute top-4 left-1/2 w-6 h-6 bg-yellow-500/50 rounded-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                ></motion.div>
                <motion.div
                  className="absolute bottom-4 right-1/4 w-8 h-8 bg-green-500/40 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.div>
                <motion.div
                  className="absolute left-4 top-1/3 w-5 h-5 bg-red-500/50 rounded-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                ></motion.div>
                <motion.div
                  className="absolute right-8 bottom-1/3 w-7 h-7 bg-indigo-500/40 rotate-45"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                ></motion.div>

                {/* More micro particles */}
                <motion.div
                  className="absolute top-6 left-6 w-3 h-3 bg-emerald-500/60 rounded-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                ></motion.div>
                <motion.div
                  className="absolute bottom-6 right-6 w-4 h-4 bg-rose-500/50 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.div>
                <motion.div
                  className="absolute top-10 right-10 w-2 h-2 bg-amber-500/70 rounded-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                ></motion.div>
                <motion.div
                  className="absolute bottom-10 left-10 w-3 h-3 bg-sky-500/60 rounded-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                ></motion.div>
                <motion.div
                  className="absolute top-14 left-20 w-2 h-2 bg-fuchsia-500/80 rounded-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                ></motion.div>
                <motion.div
                  className="absolute bottom-14 right-14 w-4 h-4 bg-lime-500/50 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                ></motion.div>

                {/* Floating code symbols */}
                {["{}", "</>", "( )", "[]", "===", "!==", "&&", "||"].map(
                  (symbol, index) => (
                    <motion.div
                      key={index}
                      className={`absolute text-sm element-fade-in text-gray-400/60`}
                      style={{
                        top:
                          index % 2 === 0
                            ? `${20 + (index % 3) * 15}%`
                            : "auto",
                        bottom:
                          index % 2 === 1
                            ? `${20 + (index % 3) * 15}%`
                            : "auto",
                        left:
                          index % 2 === 1
                            ? `${10 + (index % 4) * 12}%`
                            : "auto",
                        right:
                          index % 2 === 0
                            ? `${10 + (index % 4) * 12}%`
                            : "auto",
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {symbol}
                    </motion.div>
                  )
                )}
              </div>

              {/* Central element with enhanced animation */}
              <motion.div
                className="relative z-10 w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <i className="fas fa-code text-2xl text-white"></i>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
