import React from "react";
import { handleSmoothScroll } from "../../utils/smoothScroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Фоновые круги */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          data-aos="zoom-in"
          data-aos-duration="1200"
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1200"
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="1200"
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal streams */}
        <div
          className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse"
          style={{
            animationDelay: "0s",
            animationDuration: "4s",
            transform: "translateX(20vw) rotate(15deg)",
          }}
        ></div>
        <div
          className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse"
          style={{
            animationDelay: "2s",
            animationDuration: "3.5s",
            transform: "translateX(-15vw) rotate(-10deg)",
          }}
        ></div>

        {/* More floating particles */}
        <div
          className="absolute top-12 right-16 w-3 h-3 bg-green-400/40 rounded-full animate-pulse"
          style={{ animationDelay: "0.2s", animationDuration: "2.4s" }}
        ></div>
        <div
          className="absolute bottom-16 left-20 w-1 h-1 bg-red-400/60 rounded-full animate-bounce"
          style={{ animationDelay: "1.8s", animationDuration: "2.9s" }}
        ></div>
        <div
          className="absolute top-52 right-24 w-2 h-2 bg-orange-400/50 rounded-full animate-ping"
          style={{ animationDelay: "0.7s", animationDuration: "1.7s" }}
        ></div>

        {/* Constellation lines */}
        <div
          className="absolute bottom-32 left-16 w-36 h-0.5 bg-gradient-to-r from-cyan-400/15 to-transparent animate-pulse transform rotate-45"
          style={{ animationDelay: "1s", animationDuration: "5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-0.5 bg-gradient-to-l from-pink-400/15 to-transparent animate-pulse transform -rotate-30"
          style={{ animationDelay: "3s", animationDuration: "4.2s" }}
        ></div>

        {/* Energy ripples */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-purple-400/10 rounded-full animate-ping"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-blue-400/8 rounded-full animate-ping"
          style={{ animationDelay: "1s", animationDuration: "5s" }}
        ></div>

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 animate-spin"
          style={{ animationDuration: "20s" }}
        >
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-white/40 rounded-full transform -translate-x-1/2"></div>
        </div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        >
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400/30 rounded-full transform -translate-x-1/2"></div>
        </div>

        {/* Massive stellar field expansion */}
        <div
          className="absolute top-56 right-16 w-3 h-3 bg-cyan-400/50 rounded-full animate-bounce"
          style={{ animationDelay: "2.2s", animationDuration: "2.9s" }}
        ></div>
        <div
          className="absolute bottom-12 right-20 w-1 h-1 bg-pink-400/80 rounded-full animate-pulse"
          style={{ animationDelay: "0.4s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute top-36 left-24 w-2 h-2 bg-yellow-400/65 rounded-full animate-ping"
          style={{ animationDelay: "1.1s", animationDuration: "2.1s" }}
        ></div>
        <div
          className="absolute bottom-48 right-4 w-1 h-1 bg-green-400/75 rounded-full animate-bounce"
          style={{ animationDelay: "1.8s", animationDuration: "2.6s" }}
        ></div>
        <div
          className="absolute top-16 left-32 w-3 h-3 bg-red-400/55 rounded-full animate-pulse"
          style={{ animationDelay: "0.6s", animationDuration: "3.8s" }}
        ></div>
        <div
          className="absolute bottom-28 left-8 w-1 h-1 bg-orange-400/85 rounded-full animate-ping"
          style={{ animationDelay: "2.5s", animationDuration: "1.9s" }}
        ></div>
        <div
          className="absolute top-48 right-32 w-2 h-2 bg-teal-400/70 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s", animationDuration: "3.1s" }}
        ></div>
      </div>

      {/* Контент */}
      <div
        className="max-w-4xl mx-auto text-center relative z-10"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        <div className="floating">
          <h1 className="text-5xl md:text-7xl font-light mb-6 glow">
            <span
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Ravshanov{" "}
            </span>
            <span
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              Yuxanno
            </span>
          </h1>
        </div>

        <p
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <i className="fas fa-code mr-3 text-purple-400"></i>
          Full Stack Developer
        </p>

        <p
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          Zamonaviy veb-ilovalarni yarataman, ishlash samaradorligi,
          foydalanuvchi tajribasi va toza kodga e'tibor bergan holda
        </p>

        {/* Кнопки */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "projects")}
            className="btn-primary text-white px-8 py-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <i className="fas fa-briefcase"></i>
            Ishlarni ko'rish
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="border-2 border-gray-600 bg-gray-800/50 backdrop-blur-sm text-gray-300 px-8 py-4 rounded-full hover:border-purple-400 hover:text-white transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
          >
            <i className="fas fa-envelope"></i>
            Men bilan bog'lanish
          </a>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        data-aos="fade-up"
        data-aos-delay="1200"
      >
        <a
          href="#about"
          onClick={(e) => handleSmoothScroll(e, "about")}
          className="text-gray-400 hover:text-white transition-all duration-300 flex flex-col items-center gap-2"
        >
          <span className="text-sm font-light">Pastga o'tish</span>
          <i className="fas fa-chevron-down animate-bounce"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
