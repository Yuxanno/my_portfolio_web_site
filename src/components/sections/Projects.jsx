import React from "react";
import { projectsData } from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-auto py-20 px-6 bg-gray-800/20 backdrop-blur-lg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>

      {/* DNA helix background */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute left-10 top-0 w-1 h-full bg-gradient-to-b from-purple-400/30 via-transparent to-blue-400/30 animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute right-20 top-0 w-1 h-full bg-gradient-to-b from-cyan-400/30 via-transparent to-pink-400/30 animate-pulse"
          style={{ animationDelay: "1.5s", animationDuration: "2.5s" }}
        ></div>

        {/* Connecting nodes */}
        <div
          className="absolute top-20 left-10 w-3 h-3 bg-purple-400/50 rounded-full animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "2s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-blue-400/50 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s", animationDuration: "2.2s" }}
        ></div>
        <div
          className="absolute top-60 left-10 w-3 h-3 bg-cyan-400/50 rounded-full animate-bounce"
          style={{ animationDelay: "0.6s", animationDuration: "1.8s" }}
        ></div>
        <div
          className="absolute top-80 right-20 w-3 h-3 bg-pink-400/50 rounded-full animate-bounce"
          style={{ animationDelay: "0.9s", animationDuration: "2.4s" }}
        ></div>

        {/* More DNA connections */}
        <div
          className="absolute top-100 left-10 w-3 h-3 bg-emerald-400/50 rounded-full animate-bounce"
          style={{ animationDelay: "1.2s", animationDuration: "2s" }}
        ></div>
        <div
          className="absolute top-120 right-20 w-3 h-3 bg-violet-400/50 rounded-full animate-bounce"
          style={{ animationDelay: "1.5s", animationDuration: "2.2s" }}
        ></div>
        <div
          className="absolute top-140 left-10 w-3 h-3 bg-orange-400/50 rounded-full animate-bounce"
          style={{ animationDelay: "1.8s", animationDuration: "1.8s" }}
        ></div>
        <div
          className="absolute top-160 right-20 w-3 h-3 bg-lime-400/50 rounded-full animate-bounce"
          style={{ animationDelay: "2.1s", animationDuration: "2.4s" }}
        ></div>

        {/* Molecular bonds */}
        <div
          className="absolute top-20 left-10 w-24 h-0.5 bg-gradient-to-r from-purple-400/20 to-transparent animate-pulse transform rotate-30"
          style={{ animationDelay: "0s", animationDuration: "3.2s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-20 h-0.5 bg-gradient-to-l from-blue-400/20 to-transparent animate-pulse transform -rotate-45"
          style={{ animationDelay: "0.8s", animationDuration: "2.8s" }}
        ></div>
        <div
          className="absolute top-60 left-10 w-28 h-0.5 bg-gradient-to-r from-cyan-400/20 to-transparent animate-pulse transform rotate-60"
          style={{ animationDelay: "1.6s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute top-80 right-20 w-22 h-0.5 bg-gradient-to-l from-pink-400/20 to-transparent animate-pulse transform -rotate-30"
          style={{ animationDelay: "2.4s", animationDuration: "2.6s" }}
        ></div>

        {/* Floating data streams */}
        <div
          className="absolute left-1/3 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-green-400/15 to-transparent animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute right-1/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-yellow-400/15 to-transparent animate-pulse"
          style={{ animationDelay: "3s", animationDuration: "3.5s" }}
        ></div>

        {/* Project particles */}
        <div
          className="absolute top-16 left-1/2 w-2 h-2 bg-red-400/40 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s", animationDuration: "2.1s" }}
        ></div>
        <div
          className="absolute bottom-24 right-1/2 w-3 h-3 bg-indigo-400/35 rounded-full animate-pulse"
          style={{ animationDelay: "1.7s", animationDuration: "2.9s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/6 w-1 h-1 bg-teal-400/60 rounded-full animate-ping"
          style={{ animationDelay: "0.9s", animationDuration: "1.6s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/6 w-4 h-4 bg-amber-400/30 rounded-full animate-bounce"
          style={{ animationDelay: "2.1s", animationDuration: "2.7s" }}
        ></div>
        <div
          className="absolute top-32 left-1/4 w-8 h-8 border border-yellow-400/20 rotate-45 animate-spin"
          style={{ animationDelay: "1s", animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-40 right-1/3 w-6 h-6 border border-green-400/30 rotate-45 animate-spin"
          style={{
            animationDelay: "2s",
            animationDuration: "6s",
            animationDirection: "reverse",
          }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-10 h-10 border border-red-400/20 rotate-45 animate-spin"
          style={{ animationDelay: "0.5s", animationDuration: "10s" }}
        ></div>
        
        {/* NEW: Advanced molecular structure */}
        <div className="absolute top-12 left-1/8 w-2 h-2 bg-emerald-400/60 rounded-full animate-bounce" style={{animationDelay: '0.4s', animationDuration: '2.7s'}}></div>
        <div className="absolute top-28 right-1/7 w-3 h-3 bg-rose-400/50 rounded-full animate-pulse" style={{animationDelay: '1.9s', animationDuration: '3.2s'}}></div>
        <div className="absolute bottom-52 left-1/9 w-1 h-1 bg-amber-400/80 rounded-full animate-ping" style={{animationDelay: '0.7s', animationDuration: '1.6s'}}></div>
        <div className="absolute bottom-36 right-1/9 w-4 h-4 bg-sky-400/40 rounded-full animate-bounce" style={{animationDelay: '2.3s', animationDuration: '2.9s'}}></div>
        <div className="absolute top-1/5 left-1/11 w-2 h-2 bg-fuchsia-400/70 rounded-full animate-pulse" style={{animationDelay: '1.4s', animationDuration: '2.1s'}}></div>
        <div className="absolute bottom-1/5 right-1/11 w-3 h-3 bg-slate-400/55 rounded-full animate-ping" style={{animationDelay: '0.8s', animationDuration: '3.8s'}}></div>
        
        {/* NEW: Genetic code streams */}
        <div className="absolute left-1/8 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-emerald-400/12 to-transparent animate-pulse" style={{animationDelay: '1.2s', animationDuration: '5.4s'}}></div>
        <div className="absolute right-1/8 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-rose-400/12 to-transparent animate-pulse" style={{animationDelay: '3.7s', animationDuration: '4.8s'}}></div>
        <div className="absolute left-1/12 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-amber-400/10 to-transparent animate-pulse" style={{animationDelay: '0.6s', animationDuration: '6.1s'}}></div>
        <div className="absolute right-1/12 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-sky-400/10 to-transparent animate-pulse" style={{animationDelay: '2.9s', animationDuration: '5.7s'}}></div>
        
        {/* NEW: Protein folding visualization */}
        <div className="absolute top-1/8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-fuchsia-400/8 to-transparent animate-pulse" style={{animationDelay: '1.8s', animationDuration: '7.2s'}}></div>
        <div className="absolute bottom-1/8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-400/8 to-transparent animate-pulse" style={{animationDelay: '0.3s', animationDuration: '6.8s'}}></div>
        <div className="absolute top-3/8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400/6 to-transparent animate-pulse" style={{animationDelay: '4.1s', animationDuration: '5.3s'}}></div>
        <div className="absolute bottom-3/8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-rose-400/6 to-transparent animate-pulse" style={{animationDelay: '2.4s', animationDuration: '6.9s'}}></div>
        
        {/* NEW: Molecular orbital paths */}
        <div className="absolute inset-0 animate-spin" style={{animationDuration: '26s'}}>
          <div className="absolute top-1/8 left-1/8 w-2 h-2 bg-emerald-400/45 rounded-full"></div>
        </div>
        <div className="absolute inset-0 animate-spin" style={{animationDuration: '31s', animationDirection: 'reverse'}}>
          <div className="absolute bottom-1/7 right-1/7 w-3 h-3 bg-rose-400/35 rounded-full"></div>
        </div>
        <div className="absolute inset-0 animate-spin" style={{animationDuration: '37s'}}>
          <div className="absolute top-1/3 right-1/8 w-1 h-1 bg-amber-400/65 rounded-full"></div>
        </div>
        <div className="absolute inset-0 animate-spin" style={{animationDuration: '42s', animationDirection: 'reverse'}}>
          <div className="absolute bottom-1/4 left-1/9 w-4 h-4 bg-sky-400/30 rounded-full"></div>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto relative z-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2
          className="text-3xl md:text-4xl font-light mb-12 text-center text-white glow"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <i
            className={`${projectsData.sectionTitle.icon} mr-4 ${projectsData.sectionTitle.iconColor}`}
          ></i>
          {projectsData.sectionTitle.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl overflow-hidden shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={project.animationDelay}
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
                <div className="absolute top-4 left-4">
                  <i
                    className={`${project.headerIcon} text-white text-3xl opacity-80`}
                  ></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-3">
                  <i className={`${project.icon} ${project.iconColor}`}></i>
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`${tech.color} backdrop-blur-sm border ${tech.borderColor} ${tech.textColor} text-xs px-3 py-1 rounded-full`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
