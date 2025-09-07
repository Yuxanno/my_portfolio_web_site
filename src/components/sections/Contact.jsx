import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-auto py-20 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30"></div>

      {/* Neural network background */}
      <div className="absolute inset-0 opacity-20">
        {/* Network nodes */}
        <div
          className="absolute top-16 left-16 w-4 h-4 bg-purple-400/60 rounded-full animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "2s" }}
        ></div>
        <div
          className="absolute top-24 right-24 w-3 h-3 bg-blue-400/70 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s", animationDuration: "1.8s" }}
        ></div>
        <div
          className="absolute top-1/2 left-20 w-3 h-3 bg-yellow-400/70 rounded-full animate-pulse"
          style={{ animationDelay: "0.3s", animationDuration: "2.4s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-green-400/80 rounded-full animate-pulse"
          style={{ animationDelay: "0.8s", animationDuration: "1.4s" }}
        ></div>

        {/* Connection lines */}
        <div
          className="absolute top-16 left-16 w-32 h-0.5 bg-gradient-to-r from-purple-400/30 to-transparent animate-pulse transform rotate-12"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-20 w-28 h-0.5 bg-gradient-to-r from-yellow-400/30 to-transparent animate-pulse transform -rotate-20"
          style={{ animationDelay: "0.7s", animationDuration: "2.8s" }}
        ></div>

        {/* Data streams */}
        <div
          className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "3s" }}
        ></div>

        {/* Floating binary digits */}
        <div
          className="absolute top-40 right-1/4 text-xs text-blue-400/40 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "2s" }}
        >
          10
        </div>

        {/* More binary streams */}
        <div
          className="absolute top-28 left-1/5 text-xs text-teal-400/40 animate-bounce"
          style={{ animationDelay: "0.4s", animationDuration: "2.2s" }}
        >
          101
        </div>
        <div
          className="absolute bottom-56 right-1/7 text-xs text-lime-400/40 animate-bounce"
          style={{ animationDelay: "2.2s", animationDuration: "1.9s" }}
        >
          001
        </div>
        <div
          className="absolute top-1/3 left-1/12 text-xs text-red-400/40 animate-bounce"
          style={{ animationDelay: "1.6s", animationDuration: "2.8s" }}
        >
          111
        </div>
        <div
          className="absolute top-3/4 right-1/12 text-xs text-indigo-400/40 animate-bounce"
          style={{ animationDelay: "0.9s", animationDuration: "2.4s" }}
        >
          000
        </div>

        {/* Network expansion rings */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-green-400/15 rounded-full animate-ping"
          style={{ animationDelay: "0s", animationDuration: "3.8s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-400/12 rounded-full animate-ping"
          style={{ animationDelay: "1.2s", animationDuration: "4.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-400/10 rounded-full animate-ping"
          style={{ animationDelay: "2.4s", animationDuration: "5.1s" }}
        ></div>

        {/* Massive neural expansion */}
        <div
          className="absolute top-8 left-1/8 w-3 h-3 bg-emerald-400/65 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s", animationDuration: "2.8s" }}
        ></div>
        <div
          className="absolute top-56 right-1/9 w-4 h-4 bg-rose-400/55 rounded-full animate-pulse"
          style={{ animationDelay: "2.1s", animationDuration: "3.4s" }}
        ></div>
        <div
          className="absolute bottom-8 left-1/10 w-2 h-2 bg-amber-400/75 rounded-full animate-pulse"
          style={{ animationDelay: "1.3s", animationDuration: "2.2s" }}
        ></div>
        <div
          className="absolute bottom-56 right-1/11 w-5 h-5 bg-sky-400/45 rounded-full animate-pulse"
          style={{ animationDelay: "0.9s", animationDuration: "3.7s" }}
        ></div>
        <div
          className="absolute top-3/5 right-1/13 w-4 h-4 bg-slate-400/50 rounded-full animate-pulse"
          style={{ animationDelay: "0.3s", animationDuration: "3.1s" }}
        ></div>

        {/* Synaptic connections */}
        <div
          className="absolute top-8 left-1/8 w-40 h-0.5 bg-gradient-to-r from-emerald-400/20 to-transparent animate-pulse transform rotate-15"
          style={{ animationDelay: "0.5s", animationDuration: "4.2s" }}
        ></div>
        <div
          className="absolute top-56 right-1/9 w-35 h-0.5 bg-gradient-to-l from-rose-400/20 to-transparent animate-pulse transform -rotate-55"
          style={{ animationDelay: "2.1s", animationDuration: "3.8s" }}
        ></div>
        <div
          className="absolute bottom-8 left-1/10 w-30 h-0.5 bg-gradient-to-r from-amber-400/20 to-transparent animate-pulse transform rotate-75"
          style={{ animationDelay: "1.3s", animationDuration: "4.6s" }}
        ></div>
        <div
          className="absolute top-2/5 left-1/12 w-38 h-0.5 bg-gradient-to-r from-fuchsia-400/20 to-transparent animate-pulse transform -rotate-25"
          style={{ animationDelay: "1.7s", animationDuration: "3.3s" }}
        ></div>

        {/* Data transmission beams */}
        <div
          className="absolute top-1/8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent animate-pulse"
          style={{ animationDelay: "2.8s", animationDuration: "6.4s" }}
        ></div>
        <div
          className="absolute bottom-1/8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-rose-400/10 to-transparent animate-pulse"
          style={{ animationDelay: "0.7s", animationDuration: "5.9s" }}
        ></div>
        <div
          className="absolute left-1/8 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-amber-400/8 to-transparent animate-pulse"
          style={{ animationDelay: "3.4s", animationDuration: "7.1s" }}
        ></div>
        <div
          className="absolute right-1/8 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-sky-400/8 to-transparent animate-pulse"
          style={{ animationDelay: "1.6s", animationDuration: "6.7s" }}
        ></div>

        {/* Consciousness waves */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-emerald-400/8 rounded-full animate-ping"
          style={{ animationDelay: "0s", animationDuration: "8.2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-112 h-112 border border-rose-400/6 rounded-full animate-ping"
          style={{ animationDelay: "2.7s", animationDuration: "9.8s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 border border-amber-400/5 rounded-full animate-ping"
          style={{ animationDelay: "1.4s", animationDuration: "11.3s" }}
        ></div>

        {/* Additional binary consciousness */}
        <div
          className="absolute top-14 left-1/7 text-xs text-emerald-400/40 animate-bounce"
          style={{ animationDelay: "0.2s", animationDuration: "2.6s" }}
        >
          1010
        </div>
        <div
          className="absolute top-50 right-1/8 text-xs text-rose-400/40 animate-bounce"
          style={{ animationDelay: "1.9s", animationDuration: "3.1s" }}
        >
          0110
        </div>
        <div
          className="absolute bottom-14 left-1/9 text-xs text-amber-400/40 animate-bounce"
          style={{ animationDelay: "0.8s", animationDuration: "2.4s" }}
        >
          1101
        </div>
        <div
          className="absolute bottom-50 right-1/10 text-xs text-sky-400/40 animate-bounce"
          style={{ animationDelay: "2.3s", animationDuration: "2.8s" }}
        >
          0011
        </div>
        <div
          className="absolute top-1/4 left-1/15 text-xs text-fuchsia-400/40 animate-bounce"
          style={{ animationDelay: "1.5s", animationDuration: "3.3s" }}
        >
          1111
        </div>
        <div
          className="absolute top-3/4 right-1/15 text-xs text-slate-400/40 animate-bounce"
          style={{ animationDelay: "0.6s", animationDuration: "2.7s" }}
        >
          0000
        </div>
      </div>
      <div
        className="max-w-4xl mx-auto text-center relative z-10"
        data-aos="fade-up"
      >
        <h2
          className="text-3xl md:text-4xl font-light mb-8 text-white glow"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <i className="fas fa-handshake mr-4 text-purple-400"></i>
          Keling birga ishlaymiz
        </h2>
        <p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Loyihangiz uchun dasturchi qidiryapsizmi? Hamkorlik imkoniyatlarini
          muhokama qilishdan xursand bo'laman.
        </p>
        <div
          className="flex flex-col flex-row gap-6 justify-center items-center"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <a
            href="tel:+998901234567"
            className="btn-primary text-white px-8 py-4 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-3"
          >
            <i className="fas fa-phone text-lg"></i>
            Men bilan bog'lanish
          </a>
          <div className="flex gap-4" data-aos="fade-up" data-aos-delay="800">
            <a
              href="#"
              className="w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 rounded-full flex items-center justify-center hover:bg-purple-600/30 hover:border-purple-500 hover:text-white transition-all duration-300 shadow-xl"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 rounded-full flex items-center justify-center hover:bg-purple-600/30 hover:border-purple-500 hover:text-white transition-all duration-300 shadow-xl"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 rounded-full flex items-center justify-center hover:bg-purple-600/30 hover:border-purple-500 hover:text-white transition-all duration-300 shadow-xl"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 rounded-full flex items-center justify-center hover:bg-purple-600/30 hover:border-purple-500 hover:text-white transition-all duration-300 shadow-xl"
            >
              <i className="fab fa-telegram text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
