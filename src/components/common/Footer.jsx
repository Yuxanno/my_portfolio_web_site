const Footer = () => {
  const thisyear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-700 bg-gray-900/50 backdrop-blur-lg relative overflow-hidden">
      {/* Animated footer background - reduced */}
      <div className="absolute inset-0 opacity-8">
        {/* Digital rain - reduced */}
        <div
          className="absolute top-2 left-8 text-blue-400/20 text-xs animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        >
          ©
        </div>
        <div
          className="absolute top-4 right-12 text-purple-400/20 text-xs animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3.5s" }}
        >
          ®
        </div>
        <div
          className="absolute top-6 left-20 text-cyan-400/20 text-xs animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3s" }}
        >
          ™
        </div>
        <div
          className="absolute top-3 right-24 text-pink-400/20 text-xs animate-bounce"
          style={{ animationDelay: "1.5s", animationDuration: "4.5s" }}
        >
          §
        </div>

        {/* Code symbols rain - reduced */}
        <div
          className="absolute top-2 left-16 text-blue-400/15 text-xs animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
        >
          {"{}"}
        </div>
        <div
          className="absolute top-5 right-16 text-purple-400/15 text-xs animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "3.8s" }}
        >
          {"</>"}
        </div>
        <div
          className="absolute top-4 left-32 text-cyan-400/15 text-xs animate-ping"
          style={{ animationDelay: "1.2s", animationDuration: "3.2s" }}
        >
          [ ]
        </div>

        {/* Floating particles - reduced */}
        <div
          className="absolute top-1 left-12 w-0.5 h-0.5 bg-blue-400/30 rounded-full animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute top-6 right-8 w-1 h-1 bg-purple-400/25 rounded-full animate-ping"
          style={{ animationDelay: "1.5s", animationDuration: "2.8s" }}
        ></div>
        <div
          className="absolute top-4 left-28 w-0.5 h-0.5 bg-cyan-400/40 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-7 right-20 w-1 h-1 bg-pink-400/30 rounded-full animate-pulse"
          style={{ animationDelay: "2.5s", animationDuration: "4s" }}
        ></div>

        {/* Energy streams - reduced */}
        <div
          className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/8 to-transparent animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "5s" }}
        ></div>
        <div
          className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400/8 to-transparent animate-pulse"
          style={{ animationDelay: "2.5s", animationDuration: "4.5s" }}
        ></div>

        {/* Orbiting elements - reduced */}
        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "25s" }}
        >
          <div className="absolute top-2 left-1/2 w-0.5 h-0.5 bg-white/25 rounded-full transform -translate-x-1/2"></div>
        </div>
        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "20s", animationDirection: "reverse" }}
        >
          <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-purple-400/20 rounded-full transform -translate-x-1/2"></div>
        </div>

        {/* Quantum interference patterns - reduced */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-0 left-0 w-6 h-6 border border-purple-400/10 rounded-full animate-ping"
            style={{ animationDelay: "0s", animationDuration: "5s" }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-5 h-5 border border-blue-400/10 rounded-full animate-ping"
            style={{ animationDelay: "2s", animationDuration: "4.5s" }}
          ></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 flex items-center gap-3">
            <span>
              © {thisyear} Ravshanov Yuxanno. Barcha huquqlar himoyalangan.
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <i className="fas fa-heart text-red-400 pulse-slow"></i>
              Mehr bilan ishlab chiqilgan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
