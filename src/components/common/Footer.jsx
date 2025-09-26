const Footer = () => {
  const thisyear = new Date().getFullYear();

  // Background elements data
  const backgroundElements = [
    // Digital rain
    {
      type: "text",
      top: "top-2",
      left: "left-8",
      color: "text-blue-400/20",
      content: "©",
    },
    {
      type: "text",
      top: "top-4",
      right: "right-12",
      color: "text-purple-400/20",
      content: "®",
    },
    {
      type: "text",
      top: "top-6",
      left: "left-20",
      color: "text-cyan-400/20",
      content: "™",
    },
    {
      type: "text",
      top: "top-3",
      right: "right-24",
      color: "text-pink-400/20",
      content: "§",
    },

    // Code symbols
    {
      type: "text",
      top: "top-2",
      left: "left-16",
      color: "text-blue-400/15",
      content: "{}",
    },
    {
      type: "text",
      top: "top-5",
      right: "right-16",
      color: "text-purple-400/15",
      content: "</>",
    },
    {
      type: "text",
      top: "top-4",
      left: "left-32",
      color: "text-cyan-400/15",
      content: "[ ]",
    },

    // Floating particles
    {
      type: "particle",
      top: "top-1",
      left: "left-12",
      size: "w-0.5 h-0.5",
      color: "bg-blue-400/30",
    },
    {
      type: "particle",
      top: "top-6",
      right: "right-8",
      size: "w-1 h-1",
      color: "bg-purple-400/25",
    },
    {
      type: "particle",
      top: "top-4",
      left: "left-28",
      size: "w-0.5 h-0.5",
      color: "bg-cyan-400/40",
    },
    {
      type: "particle",
      top: "top-7",
      right: "right-20",
      size: "w-1 h-1",
      color: "bg-pink-400/30",
    },
  ];

  return (
    <footer className="py-8 px-6 border-t border-gray-700 bg-gray-900/50 backdrop-blur-lg relative overflow-hidden section-fade-in">
      {/* Animated footer background - reduced */}
      <div className="absolute inset-0 opacity-8">
        {backgroundElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.top || ""} ${element.left || ""} ${
              element.right || ""
            } ${element.color} text-xs element-fade-in delay-${
              (index + 1) * 100
            } ${element.size || ""}`}
          >
            {element.content || ""}
          </div>
        ))}
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
