import { skillsData } from "../../data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-auto py-20 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>

      {/* Hexagon grid background */}
      <div className="absolute inset-0 opacity-10">
        {[10, 20, 32, 10, 50, 33].map((top, index) => (
          <motion.div
            key={index}
            className={`absolute w-${[12, 8, 16, 10, 14, 6][index]} h-${
              [12, 8, 16, 10, 14, 6][index]
            } border border-${
              ["blue", "purple", "cyan", "pink", "yellow", "green"][index]
            }-400/${[30, 30, 20, 30, 20, 40][index]} transform rotate-45`}
            style={{
              top: `${top}%`,
              left: `${[10, 80, 24, 10, 16, 66][index]}%`,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          ></motion.div>
        ))}

        {/* Circuit lines */}
        {[
          {
            top: "25%",
            left: "0%",
            width: "100%",
            height: "0.5px",
            direction: "r",
          },
          {
            top: "66%",
            left: "0%",
            width: "100%",
            height: "0.5px",
            direction: "r",
          },
          {
            top: "0%",
            left: "25%",
            width: "0.5px",
            height: "100%",
            direction: "b",
          },
          {
            top: "0%",
            left: "66%",
            width: "0.5px",
            height: "100%",
            direction: "b",
          },
        ].map((line, index) => (
          <motion.div
            key={index}
            className={`absolute bg-gradient-to-${
              line.direction
            } from-transparent via-${
              ["blue", "purple", "cyan", "pink"][index]
            }-400/${[20, 20, 15, 15][index]} to-transparent`}
            style={{
              top: line.top,
              left: line.left,
              width: line.width,
              height: line.height,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          ></motion.div>
        ))}
      </div>

      {/* Контейнер секции */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Заголовок */}
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Заголовок категории */}
              <motion.h3
                className="text-xl font-semibold mb-6 text-center text-white flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
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
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
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
  );
};

export default Skills;
