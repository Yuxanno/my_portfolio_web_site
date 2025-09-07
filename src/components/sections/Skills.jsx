import { skillsData } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-auto py-20 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>

      {/* Hexagon grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-10 left-10 w-12 h-12 border border-blue-400/30 transform rotate-45 animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-20 right-20 w-8 h-8 border border-purple-400/30 transform rotate-45 animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-24 w-16 h-16 border border-cyan-400/20 transform rotate-45 animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-10 h-10 border border-pink-400/30 transform rotate-45 animate-pulse"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-16 w-14 h-14 border border-yellow-400/20 transform rotate-45 animate-pulse"
          style={{ animationDelay: "1.5s", animationDuration: "2.8s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-6 h-6 border border-green-400/40 transform rotate-45 animate-pulse"
          style={{ animationDelay: "2.5s", animationDuration: "3.2s" }}
        ></div>

        {/* Circuit lines */}
        <div
          className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute left-1/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "6s" }}
        ></div>
        <div
          className="absolute right-1/3 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-pink-400/15 to-transparent animate-pulse"
          style={{ animationDelay: "3s", animationDuration: "4.5s" }}
        ></div>
      </div>

      {/* Контейнер секции */}
      <div className="max-w-6xl mx-auto relative z-10" data-aos="fade-up">
        {/* Заголовок */}
        <h2
          className="text-3xl md:text-4xl font-light mb-12 text-center text-white glow"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <i
            className={`${skillsData.sectionTitle.icon} mr-4 ${skillsData.sectionTitle.iconColor}`}
          ></i>
          {skillsData.sectionTitle.title}
        </h2>

        {/* Сетка категорий */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.categories.map((category, index) => (
            <div
              key={category.id}
              className="tech-card bg-gray-800/40 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay={200 + index * 150}
            >
              {/* Заголовок категории */}
              <h3
                className="text-xl font-semibold mb-6 text-center text-white flex items-center justify-center gap-3"
                data-aos="fade-up"
                data-aos-delay={300 + index * 150}
              >
                <i className={`${category.icon} ${category.iconColor}`}></i>
                {category.title}
              </h3>

              {/* Список скиллов */}
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="stagger-animation flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                    data-aos="fade-right"
                    data-aos-delay={400 + idx * 100}
                  >
                    <i
                      className={`${skill.icon} ${skill.iconColor} text-lg`}
                    ></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
