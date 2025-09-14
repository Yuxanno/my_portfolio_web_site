const Footer = () => {
  const thisyear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-700 bg-gray-900/50 backdrop-blur-lg relative overflow-hidden section-fade-in">
      {/* Animated footer background - reduced */}
      <div className="absolute inset-0 opacity-8">
        {/* Digital rain - reduced */}
        <div className="absolute top-2 left-8 text-blue-400/20 text-xs element-fade-in delay-100">
          ©
        </div>
        <div className="absolute top-4 right-12 text-purple-400/20 text-xs element-fade-in delay-200">
          ®
        </div>
        <div className="absolute top-6 left-20 text-cyan-400/20 text-xs element-fade-in delay-300">
          ™
        </div>
        <div className="absolute top-3 right-24 text-pink-400/20 text-xs element-fade-in delay-400">
          §
        </div>

        {/* Code symbols rain - reduced */}
        <div className="absolute top-2 left-16 text-blue-400/15 text-xs element-fade-in delay-100">
          {"{}"}
        </div>
        <div className="absolute top-5 right-16 text-purple-400/15 text-xs element-fade-in delay-200">
          {"</>"}
        </div>
        <div className="absolute top-4 left-32 text-cyan-400/15 text-xs element-fade-in delay-300">
          [ ]
        </div>

        {/* Floating particles - reduced */}
        <div className="absolute top-1 left-12 w-0.5 h-0.5 bg-blue-400/30 rounded-full element-fade-in delay-100"></div>
        <div className="absolute top-6 right-8 w-1 h-1 bg-purple-400/25 rounded-full element-fade-in delay-200"></div>
        <div className="absolute top-4 left-28 w-0.5 h-0.5 bg-cyan-400/40 rounded-full element-fade-in delay-300"></div>
        <div className="absolute top-7 right-20 w-1 h-1 bg-pink-400/30 rounded-full element-fade-in delay-400"></div>
      </div>
      <div className="max-w-6xl mx-auto element-fade-in delay-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 flex items-center gap-3 element-fade-in delay-300">
            <span>
              © {thisyear} Ravshanov Yuxanno. Barcha huquqlar himoyalangan.
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 element-fade-in delay-400">
            <span className="flex items-center gap-2">
              <i className="fas fa-heart text-red-400"></i>
              Mehr bilan ishlab chiqilgan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
