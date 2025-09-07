import React from "react";

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
        <div
          className="absolute top-20 left-1/6 text-purple-400/25 text-sm animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "5s" }}
        >
          npm
        </div>
        <div
          className="absolute top-40 right-1/5 text-blue-400/25 text-sm animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "4.5s" }}
        >
          git
        </div>
        <div
          className="absolute bottom-32 left-1/8 text-cyan-400/25 text-sm animate-bounce"
          style={{ animationDelay: "1.5s", animationDuration: "4s" }}
        >
          api
        </div>
        <div
          className="absolute bottom-48 right-1/7 text-pink-400/25 text-sm animate-bounce"
          style={{ animationDelay: "3s", animationDuration: "5.5s" }}
        >
          jsx
        </div>

        {/* Background grid - reduced */}
        <div
          className="absolute top-1/6 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/5 to-transparent animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "7s" }}
        ></div>
        <div
          className="absolute bottom-1/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent animate-pulse"
          style={{ animationDelay: "3.5s", animationDuration: "6s" }}
        ></div>
        <div
          className="absolute left-1/5 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/4 to-transparent animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        ></div>
        <div
          className="absolute right-1/6 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-pink-400/4 to-transparent animate-pulse"
          style={{ animationDelay: "5s", animationDuration: "5.5s" }}
        ></div>

        {/* Floating particles - reduced */}
        <div
          className="absolute top-24 left-16 w-1 h-1 bg-purple-400/20 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute top-64 right-20 w-1.5 h-1.5 bg-blue-400/15 rounded-full animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-40 left-24 w-0.5 h-0.5 bg-cyan-400/30 rounded-full animate-ping"
          style={{ animationDelay: "1.2s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-56 right-16 w-1 h-1 bg-pink-400/25 rounded-full animate-bounce"
          style={{ animationDelay: "3s", animationDuration: "4.5s" }}
        ></div>
      </div>
      <div
        className="max-w-4xl mx-auto relative z-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2
          className="text-3xl md:text-4xl font-light mb-12 text-center text-white glow"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <i className="fas fa-user mr-4 text-purple-400"></i>
          Men haqimda
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-duration="800">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Salom! Men 5 yildan ortiq tajribaga ega full stack dasturchiman.
              Zamonaviy texnologiyalar va dasturlash yondashuvlariga
              ixtisoslashganman.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Mening ishtiyoqim - intuitivli foydalanuvchi interfeyslari va
              kengaytiriladigan backend yechimlarini yaratish. Doimo yangi
              texnologiyalar va eng yaxshi amaliyotlarni o'rganishga intilaman.
            </p>
            <div className="flex flex-wrap gap-4">
              <span
                className="stagger-animation bg-gray-700/50 backdrop-blur-sm border border-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm shadow-xl hover:bg-purple-600/30 transition-all duration-300"
                style={{ "--delay": "0.1s" }}
              >
                <i className="fas fa-globe mr-2"></i>
                Veb-dasturlash
              </span>
              <span
                className="stagger-animation bg-gray-700/50 backdrop-blur-sm border border-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm shadow-xl hover:bg-purple-600/30 transition-all duration-300"
                style={{ "--delay": "0.2s" }}
              >
                <i className="fas fa-plug mr-2"></i>
                API dizayn
              </span>
              <span
                className="stagger-animation bg-gray-700/50 backdrop-blur-sm border border-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm shadow-xl hover:bg-purple-600/30 transition-all duration-300"
                style={{ "--delay": "0.3s" }}
              >
                <i className="fas fa-database mr-2"></i>
                Ma'lumotlar bazasi
              </span>
              <span
                className="stagger-animation bg-gray-700/50 backdrop-blur-sm border border-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm shadow-xl hover:bg-purple-600/30 transition-all duration-300"
                style={{ "--delay": "0.4s" }}
              >
                <i className="fas fa-server mr-2"></i>
                DevOps
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className="w-64 h-64 relative flex items-center justify-center overflow-hidden"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              {/* Background matrix rain effect */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute top-0 left-4 text-green-400/30 text-xs animate-bounce"
                  style={{ animationDelay: "0s", animationDuration: "3s" }}
                >
                  0101
                </div>
                <div
                  className="absolute top-8 left-8 text-blue-400/30 text-xs animate-bounce"
                  style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
                >
                  {"<div>"}
                </div>
                <div
                  className="absolute top-16 left-12 text-purple-400/30 text-xs animate-bounce"
                  style={{ animationDelay: "1s", animationDuration: "2s" }}
                >
                  func()
                </div>
                <div
                  className="absolute top-24 left-16 text-cyan-400/30 text-xs animate-bounce"
                  style={{ animationDelay: "1.5s", animationDuration: "3.5s" }}
                >
                  var x
                </div>
                <div
                  className="absolute top-32 left-20 text-pink-400/30 text-xs animate-bounce"
                  style={{ animationDelay: "2s", animationDuration: "2.8s" }}
                >
                  {"=> {}"}
                </div>
                <div
                  className="absolute top-40 left-24 text-yellow-400/30 text-xs animate-bounce"
                  style={{ animationDelay: "2.5s", animationDuration: "2.2s" }}
                >
                  console
                </div>

                <div
                  className="absolute top-0 right-4 text-red-400/30 text-xs animate-bounce"
                  style={{ animationDelay: "0.3s", animationDuration: "2.7s" }}
                >
                  if()
                </div>
                <div
                  className="absolute top-8 right-8 text-indigo-400/30 text-xs animate-bounce"
                  style={{ animationDelay: "0.8s", animationDuration: "3.2s" }}
                >
                  {"[0,1]"}
                </div>
                <div
                  className="absolute top-16 right-12 text-orange-400/30 text-xs animate-bounce"
                  style={{ animationDelay: "1.3s", animationDuration: "2.4s" }}
                >
                  class
                </div>
                <div
                  className="absolute top-24 right-16 text-teal-400/30 text-xs animate-bounce"
                  style={{ animationDelay: "1.8s", animationDuration: "2.9s" }}
                >
                  {"&&"}
                </div>
                <div
                  className="absolute top-32 right-20 text-violet-400/30 text-xs animate-bounce"
                  style={{ animationDelay: "2.3s", animationDuration: "2.6s" }}
                >
                  return
                </div>
                <div
                  className="absolute top-40 right-24 text-lime-400/30 text-xs animate-bounce"
                  style={{ animationDelay: "2.8s", animationDuration: "3.1s" }}
                >
                  {"()"}
                </div>
              </div>

              {/* Animated geometric shapes */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-16 h-16 bg-purple-500/40 rounded-lg animate-bounce delay-75"></div>
                <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/40 rounded-full animate-pulse delay-150"></div>
                <div
                  className="absolute bottom-0 left-0 w-14 h-14 bg-cyan-500/40 rounded-lg animate-spin delay-300"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-pink-500/40 rounded-full animate-ping delay-500"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full animate-pulse"></div>

                {/* Additional floating particles */}
                <div
                  className="absolute top-4 left-1/2 w-6 h-6 bg-yellow-500/50 rounded-full animate-bounce delay-700"
                  style={{ animationDuration: "2s" }}
                ></div>
                <div
                  className="absolute bottom-4 right-1/4 w-8 h-8 bg-green-500/40 rounded-lg animate-pulse delay-1000"
                  style={{ animationDuration: "1.5s" }}
                ></div>
                <div className="absolute left-4 top-1/3 w-5 h-5 bg-red-500/50 rounded-full animate-ping delay-1200"></div>
                <div
                  className="absolute right-8 bottom-1/3 w-7 h-7 bg-indigo-500/40 rotate-45 animate-spin delay-900"
                  style={{ animationDuration: "4s" }}
                ></div>

                {/* More micro particles */}
                <div
                  className="absolute top-6 left-6 w-3 h-3 bg-emerald-500/60 rounded-full animate-ping delay-200"
                  style={{ animationDuration: "1.8s" }}
                ></div>
                <div
                  className="absolute bottom-6 right-6 w-4 h-4 bg-rose-500/50 rounded-lg animate-bounce delay-400"
                  style={{ animationDuration: "2.3s" }}
                ></div>
                <div
                  className="absolute top-10 right-10 w-2 h-2 bg-amber-500/70 rounded-full animate-pulse delay-600"
                  style={{ animationDuration: "1.6s" }}
                ></div>
                <div
                  className="absolute bottom-10 left-10 w-3 h-3 bg-sky-500/60 rounded-full animate-bounce delay-800"
                  style={{ animationDuration: "2.1s" }}
                ></div>
                <div
                  className="absolute top-14 left-20 w-2 h-2 bg-fuchsia-500/80 rounded-full animate-ping delay-1000"
                  style={{ animationDuration: "1.4s" }}
                ></div>
                <div
                  className="absolute bottom-14 right-14 w-4 h-4 bg-lime-500/50 rounded-lg animate-pulse delay-1300"
                  style={{ animationDuration: "1.9s" }}
                ></div>

                {/* Orbiting elements */}
                <div
                  className="absolute inset-0 animate-spin"
                  style={{ animationDuration: "8s" }}
                >
                  <div className="absolute top-0 left-1/2 w-4 h-4 bg-violet-500/60 rounded-full transform -translate-x-1/2"></div>
                </div>
                <div
                  className="absolute inset-0 animate-spin"
                  style={{
                    animationDuration: "6s",
                    animationDirection: "reverse",
                  }}
                >
                  <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-teal-500/60 rounded-full transform -translate-x-1/2"></div>
                </div>
                <div
                  className="absolute inset-0 animate-spin"
                  style={{ animationDuration: "10s" }}
                >
                  <div className="absolute left-0 top-1/2 w-5 h-5 bg-orange-500/50 rounded-full transform -translate-y-1/2"></div>
                </div>
                <div
                  className="absolute inset-0 animate-spin"
                  style={{
                    animationDuration: "12s",
                    animationDirection: "reverse",
                  }}
                >
                  <div className="absolute right-0 top-1/2 w-3 h-3 bg-purple-500/70 rounded-full transform -translate-y-1/2"></div>
                </div>
                <div
                  className="absolute inset-0 animate-spin"
                  style={{ animationDuration: "14s" }}
                >
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-500/80 rounded-full"></div>
                </div>

                {/* Pulsing rings */}
                <div
                  className="absolute inset-4 border-2 border-purple-500/30 rounded-full animate-ping"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div
                  className="absolute inset-8 border-2 border-blue-500/30 rounded-full animate-ping delay-500"
                  style={{ animationDuration: "2.5s" }}
                ></div>
                <div
                  className="absolute inset-12 border border-cyan-500/40 rounded-full animate-pulse"
                  style={{ animationDuration: "2s" }}
                ></div>
                <div
                  className="absolute inset-16 border border-pink-500/30 rounded-full animate-ping delay-1000"
                  style={{ animationDuration: "3.5s" }}
                ></div>
                <div
                  className="absolute inset-20 border border-yellow-500/25 rounded-full animate-pulse delay-1500"
                  style={{ animationDuration: "4s" }}
                ></div>

                {/* Floating code symbols */}
                <div
                  className="absolute top-8 right-4 text-purple-400/60 text-sm animate-bounce delay-300"
                  style={{ animationDuration: "2.5s" }}
                >
                  {"{}"}
                </div>
                <div
                  className="absolute bottom-8 left-8 text-blue-400/60 text-lg animate-pulse delay-800"
                  style={{ animationDuration: "1.8s" }}
                >
                  {"</>"}
                </div>
                <div className="absolute top-12 left-12 text-cyan-400/60 text-xs animate-ping delay-1100">
                  ( )
                </div>
                <div
                  className="absolute bottom-12 right-12 text-pink-400/60 text-sm animate-bounce delay-600"
                  style={{ animationDuration: "2.2s" }}
                >
                  {"[]"}
                </div>
                <div
                  className="absolute top-20 left-4 text-green-400/50 text-xs animate-pulse delay-1400"
                  style={{ animationDuration: "1.7s" }}
                >
                  {"==="}
                </div>
                <div
                  className="absolute bottom-20 right-8 text-red-400/50 text-sm animate-bounce delay-1700"
                  style={{ animationDuration: "2.4s" }}
                >
                  {"!=="}
                </div>
                <div className="absolute top-24 right-20 text-yellow-400/50 text-xs animate-ping delay-2000">
                  {"&&"}
                </div>
                <div
                  className="absolute bottom-24 left-16 text-indigo-400/50 text-sm animate-pulse delay-2300"
                  style={{ animationDuration: "1.6s" }}
                >
                  {"||"}
                </div>

                {/* Energy beams */}
                <div className="absolute inset-0">
                  <div
                    className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse"
                    style={{ animationDuration: "2.5s" }}
                  ></div>
                  <div
                    className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-pulse delay-1000"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div
                    className="absolute top-0 left-0 w-full h-full border border-cyan-500/10 rounded-full animate-spin"
                    style={{ animationDuration: "20s" }}
                  ></div>
                </div>
              </div>
              {/* Central element with enhanced animation */}
              <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-xl animate-pulse hover:scale-110 transition-transform duration-300">
                <i
                  className="fas fa-code text-2xl text-white animate-bounce"
                  style={{ animationDuration: "1.5s" }}
                ></i>
              </div>

              {/* NEW: Quantum field overlay */}
              <div className="absolute inset-0 opacity-15">
                <div
                  className="absolute top-2 left-2 w-1 h-1 bg-white/90 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s", animationDuration: "4.2s" }}
                ></div>
                <div
                  className="absolute top-6 right-3 w-2 h-2 bg-emerald-400/70 rounded-full animate-pulse"
                  style={{ animationDelay: "0.7s", animationDuration: "3.8s" }}
                ></div>
                <div
                  className="absolute bottom-4 left-5 w-1 h-1 bg-rose-400/80 rounded-full animate-ping"
                  style={{ animationDelay: "1.3s", animationDuration: "2.9s" }}
                ></div>
                <div
                  className="absolute bottom-2 right-2 w-3 h-3 bg-amber-400/60 rounded-full animate-bounce"
                  style={{ animationDelay: "1.9s", animationDuration: "3.5s" }}
                ></div>
                <div
                  className="absolute top-1/3 left-1 w-2 h-2 bg-sky-400/75 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s", animationDuration: "4.6s" }}
                ></div>
                <div
                  className="absolute bottom-1/3 right-1 w-1 h-1 bg-fuchsia-400/85 rounded-full animate-ping"
                  style={{ animationDelay: "2.2s", animationDuration: "2.3s" }}
                ></div>

                {/* Quantum tunneling effects */}
                <div
                  className="absolute inset-0 border-2 border-white/5 rounded-full animate-ping"
                  style={{ animationDelay: "0s", animationDuration: "5.8s" }}
                ></div>
                <div
                  className="absolute inset-2 border border-emerald-400/8 rounded-full animate-ping"
                  style={{ animationDelay: "1.9s", animationDuration: "4.2s" }}
                ></div>
                <div
                  className="absolute inset-4 border border-rose-400/8 rounded-full animate-ping"
                  style={{ animationDelay: "3.1s", animationDuration: "6.4s" }}
                ></div>

                {/* Probability clouds */}
                <div
                  className="absolute top-8 left-8 w-16 h-16 bg-purple-500/3 rounded-full filter blur-sm animate-pulse"
                  style={{ animationDelay: "0s", animationDuration: "7.2s" }}
                ></div>
                <div
                  className="absolute bottom-8 right-8 w-20 h-20 bg-blue-500/2 rounded-full filter blur-sm animate-pulse"
                  style={{ animationDelay: "2.4s", animationDuration: "8.1s" }}
                ></div>
                <div
                  className="absolute top-12 right-12 w-12 h-12 bg-cyan-500/4 rounded-full filter blur-sm animate-pulse"
                  style={{ animationDelay: "4.7s", animationDuration: "6.8s" }}
                ></div>
                <div
                  className="absolute bottom-12 left-12 w-18 h-18 bg-pink-500/3 rounded-full filter blur-sm animate-pulse"
                  style={{ animationDelay: "1.3s", animationDuration: "7.9s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
