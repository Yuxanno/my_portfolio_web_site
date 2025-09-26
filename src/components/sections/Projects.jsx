import React from "react";
import { projectsData } from "../../data/projects";
import { motion, LazyMotion, domAnimation } from "framer-motion";

// Optimized image component with better loading strategies
const OptimizedImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      fetchpriority="low"
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "400px 300px",
      }}
    />
  );
};

const Projects = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="projects"
        className="min-h-auto py-20 px-6 bg-gray-800/20 backdrop-blur-lg relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>

        {/* Simplified background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-10 top-0 w-1 h-full bg-gradient-to-b from-purple-400/30 via-transparent to-blue-400/30"></div>
          <div className="absolute right-20 top-0 w-1 h-full bg-gradient-to-b from-cyan-400/30 via-transparent to-pink-400/30"></div>

          {/* Connecting nodes - reduced number */}
          {[20, 60, 100, 140].map((top, index) => (
            <motion.div
              key={index}
              className={`absolute w-2 h-2 rounded-full ${
                index % 2 === 0
                  ? "left-10 bg-purple-400/50"
                  : "right-20 bg-blue-400/50"
              }`}
              style={{ top: `${top}px` }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center text-white"
            initial={{ rotate: -3 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
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
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  {project.image ? (
                    <>
                      <OptimizedImage
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
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      delay: 0.1,
                    }}
                  >
                    <i
                      className={`${project.headerIcon} text-white text-2xl opacity-80`}
                    ></i>
                  </motion.div>
                </div>
                <div className="p-5">
                  <motion.h3
                    className="text-xl font-semibold mb-3 text-white flex items-center gap-3"
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.1,
                    }}
                  >
                    <i className={`${project.icon} ${project.iconColor}`}></i>
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 mb-4 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.3,
                    }}
                  >
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className={`${tech.color} backdrop-blur-sm border ${tech.borderColor} ${tech.textColor} text-xs px-2 py-1 rounded-full`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                          delay: idx * 0.05,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex gap-4"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.4,
                    }}
                  >
                    <a
                      href={project.links.demo}
                      className="text-blue-400 hover:text-blue-300 text-sm transition-colors flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>Demo
                    </a>
                    <a
                      href={project.links.github}
                      className="text-gray-400 hover:text-gray-300 text-sm transition-colors flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
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
    </LazyMotion>
  );
};

export default Projects;
