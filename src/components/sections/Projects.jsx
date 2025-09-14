import React from "react";
import { projectsData } from "../../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-auto py-20 px-6 bg-gray-800/20 backdrop-blur-lg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>

      {/* DNA helix background */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          className="absolute left-10 top-0 w-1 h-full bg-gradient-to-b from-purple-400/30 via-transparent to-blue-400/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        ></motion.div>
        <motion.div
          className="absolute right-20 top-0 w-1 h-full bg-gradient-to-b from-cyan-400/30 via-transparent to-pink-400/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>

        {/* Connecting nodes */}
        {[20, 40, 60, 80, 100, 120, 140, 160].map((top, index) => (
          <motion.div
            key={index}
            className={`absolute w-3 h-3 rounded-full element-fade-in ${
              index % 2 === 0
                ? "left-10 bg-purple-400/50"
                : "right-20 bg-blue-400/50"
            }`}
            style={{ top: `${top}px` }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          ></motion.div>
        ))}

        {/* Molecular bonds */}
        {[
          {
            top: 20,
            side: "left",
            width: 24,
            rotate: 30,
            color: "from-purple-400/20 to-transparent",
          },
          {
            top: 40,
            side: "right",
            width: 20,
            rotate: -45,
            color: "from-blue-400/20 to-transparent",
          },
          {
            top: 60,
            side: "left",
            width: 28,
            rotate: 60,
            color: "from-cyan-400/20 to-transparent",
          },
          {
            top: 80,
            side: "right",
            width: 22,
            rotate: -30,
            color: "from-pink-400/20 to-transparent",
          },
        ].map((bond, index) => (
          <motion.div
            key={index}
            className={`absolute h-0.5 bg-gradient-to-r ${bond.color} transform`}
            style={{
              top: `${bond.top}px`,
              [bond.side]: "10px",
              width: `${bond.width}px`,
              transform: `rotate(${bond.rotate}deg)`,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          ></motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <i
            className={`${projectsData.sectionTitle.icon} mr-4 ${projectsData.sectionTitle.iconColor}`}
          ></i>
          {projectsData.sectionTitle.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30"></div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-black/20"></div>
                )}
                <motion.div
                  className="absolute top-4 left-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <i
                    className={`${project.headerIcon} text-white text-3xl opacity-80`}
                  ></i>
                </motion.div>
              </div>
              <div className="p-6">
                <motion.h3
                  className="text-xl font-semibold mb-3 text-white flex items-center gap-3"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <i className={`${project.icon} ${project.iconColor}`}></i>
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-300 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className={`${tech.color} backdrop-blur-sm border ${tech.borderColor} ${tech.textColor} text-xs px-3 py-1 rounded-full`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <a
                    href={project.links.demo}
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-external-link-alt"></i>Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="text-gray-400 hover:text-gray-300 text-sm transition-colors flex items-center gap-2"
                  >
                    <i className="fab fa-github"></i>GitHub
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
