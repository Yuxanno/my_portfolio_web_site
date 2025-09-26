import { skillsData } from "../../data/skills";
import { motion, LazyMotion, domAnimation } from "framer-motion";

const Skills = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="skills"
        className="min-h-auto py-20 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>

        {/* Hexagon grid background - simplified */}
        <div className="absolute inset-0 opacity-10">
          {[10, 32, 50].map((top, index) => (
            <motion.div
              key={index}
              className={`absolute w-${[12, 16, 14][index]} h-${
                [12, 16, 14][index]
              } border border-${["blue", "cyan", "pink"][index]}-400/${
                [30, 20, 20][index]
              } transform rotate-45`}
              style={{
                top: `${top}%`,
                left: `${[10, 24, 16][index]}%`,
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: index * 0.1,
              }}
            ></motion.div>
          ))}

          {/* Circuit lines - simplified */}
          {[
            {
              top: "25%",
              left: "0%",
              width: "100%",
              height: "0.5px",
            },
            {
              top: "66%",
              left: "0%",
              width: "100%",
              height: "0.5px",
            },
          ].map((line, index) => (
            <motion.div
              key={index}
              className={`absolute bg-gradient-to-r from-transparent via-${
                ["blue", "purple"][index]
              }-400/${[20, 20][index]} to-transparent`}
              style={{
                top: line.top,
                left: line.left,
                width: line.width,
                height: line.height,
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1,
              }}
            ></motion.div>
          ))}
        </div>

        {/* Контейнер секции */}
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Заголовок */}
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center text-white"
            initial={{ rotate: -3 }}
            whileInView={{ rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <i
              className={`${skillsData.sectionTitle.icon} mr-4 ${skillsData.sectionTitle.iconColor}`}
            ></i>
            {skillsData.sectionTitle.title}
          </motion.h2>

          {/* Сетка категорий */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillsData.categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="tech-card bg-gray-800/40 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl shadow-2xl"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ y: -5 }}
              >
                {/* Заголовок категории */}
                <motion.h3
                  className="text-xl font-semibold mb-6 text-center text-white flex items-center justify-center gap-3"
                  initial={{ y: 10 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.1,
                  }}
                >
                  <i className={`${category.icon} ${category.iconColor}`}></i>
                  {category.title}
                </motion.h3>

                {/* Список скиллов */}
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                      initial={{ x: -10 }}
                      whileInView={{ x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: idx * 0.05,
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <i
                        className={`${skill.icon} ${skill.iconColor} text-lg`}
                      ></i>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Skills;
