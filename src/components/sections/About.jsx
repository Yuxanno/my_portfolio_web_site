import React, { useMemo } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { skillsData } from "../../data/skills";

const About = () => {
  // Timeline data for experience
  const timelineData = useMemo(
    () => [
      {
        year: "2024",
        title: "Senior Full Stack Developer",
        company: "Tech Innovations LLC",
        description:
          "React, Node.js va cloud yechimlari bo'yicha yetakchilik qildim",
      },
      {
        year: "2022",
        title: "Full Stack Developer",
        company: "Digital Solutions Inc",
        description:
          "Mijozlarning veb-ilovalarini ishlab chiqishda ishtirok etdim",
      },
      {
        year: "2020",
        title: "Frontend Developer",
        company: "WebCraft Studios",
        description:
          "Zamonaviy UI/UX yechimlarini yaratishda mutaxassislarning jamoasiga qo'shildim",
      },
      {
        year: "2019",
        title: "Dasturchi sifatida ishga kirish",
        company: "",
        description: "Dasturlash sohasiga kirish, JavaScript va CSS asoslari",
      },
    ],
    []
  );

  // Extract skills for the skills cloud with useMemo for performance
  const skills = useMemo(
    () =>
      skillsData.categories.flatMap((category) =>
        category.skills.map((skill) => ({
          name: skill.name,
          icon: skill.icon,
          iconColor: skill.iconColor,
        }))
      ),
    [skillsData]
  );

  // Optimized particle generation
  const particles = useMemo(
    () =>
      [...Array(12)].map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      })),
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="about"
        className="min-h-auto py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
      >
        {/* Enhanced background with optimized animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse"></div>

          {/* Optimized floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                top: `${particle.top}%`,
                left: `${particle.left}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            ></motion.div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mr-4 text-5xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              👤
            </span>
            Men haqimda
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Timeline Section with modern design */}
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mr-4">
                  <i className="fas fa-history text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Tajriba tarixi
                </h3>
              </div>

              <div className="relative">
                {/* Timeline line with enhanced styling */}
                <div className="absolute left-5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-full"></div>

                {/* Timeline items with modern cards */}
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pb-10 last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    {/* Timeline connector with glow */}
                    <div className="absolute left-0 top-3 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30 z-10">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>

                    {/* Timeline card */}
                    <div className="ml-16">
                      <div className="bg-gray-700/30 backdrop-blur-sm rounded-2xl p-5 border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 group">
                        <div className="flex justify-between items-start">
                          <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                            {item.title}
                          </h4>
                          <span className="text-sm font-bold bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-300 px-3 py-1 rounded-full backdrop-blur-sm border border-purple-500/30">
                            {item.year}
                          </span>
                        </div>

                        {item.company && (
                          <p className="text-blue-300 mt-2 font-medium">
                            {item.company}
                          </p>
                        )}

                        <p className="text-gray-300 mt-3 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Cloud Section with radial layout */}
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mr-4">
                  <i className="fas fa-code text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Ko'nikmalar</h3>
              </div>

              {/* Skills grid with enhanced styling */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-5 bg-gray-700/30 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      y: -8,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    <motion.i
                      className={`${skill.icon} ${skill.iconColor} text-3xl mb-3 group-hover:text-blue-300 transition-colors duration-300`}
                      whileHover={{
                        rotate: [0, -15, 15, 0],
                        scale: 1.3,
                      }}
                      transition={{ duration: 0.4 }}
                    ></motion.i>
                    <span className="text-gray-300 text-sm text-center group-hover:text-white transition-colors duration-300 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* About text with enhanced styling */}
              <motion.div
                className="mt-10 pt-6 border-t border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/50">
                  <p className="text-gray-300 leading-relaxed text-base">
                    Men 5 yildan ortiq tajribaga ega full stack dasturchiman.
                    Zamonaviy texnologiyalar va dasturlash yondashuvlariga
                    ixtisoslashganman. Mening ishtiyoqim - intuitiv
                    foydalanuvchi interfeyslari va kengaytiriladigan backend
                    yechimlarini yaratish. Doimo yangi texnologiyalar va eng
                    yaxshi amaliyotlarni o'rganishga intilaman.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default About;
