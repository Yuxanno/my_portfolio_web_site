import React from "react";
import AnimatedButton from "../common/AnimatedButton";
import TelegramButton from "../common/TelegramButton";
import GitHubButton from "../common/GitHubButton";
import { motion } from "framer-motion";

const Contact = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+998901234567";
  };

  const handleTelegramClick = () => {
    // Pre-filled message in Uzbek Latin script
    const message =
      "Salom Yuxanno, sizdan veb-sayt yaratishni so'rab qolmoqchiman. Buning uchun siz bilan bog'lanishingizni xohlayman.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://t.me/Shalo_on?text=${encodedMessage}`, "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/Yuxanno", "_blank");
  };

  // Background elements data
  const backgroundElements = {
    nodes: [
      { top: 16, left: 16, size: 4, color: "purple", opacity: 60 },
      { top: 24, right: 24, size: 3, color: "blue", opacity: 70 },
      { top: 50, left: 20, size: 3, color: "yellow", opacity: 70 },
      { top: 33, right: 25, size: 2, color: "green", opacity: 80 },
    ],
    lines: [
      { top: 16, left: 16, width: 32, rotate: 12, color: "purple" },
      { top: 50, left: 20, width: 28, rotate: -20, color: "yellow" },
    ],
    streams: [
      { side: "left", position: 25, color: "purple" },
      { side: "right", position: 33, color: "blue" },
    ],
    digits: [
      { top: 40, right: 25, text: "10", color: "blue" },
      { top: 28, left: 20, text: "101", color: "teal" },
      { bottom: 56, right: 14, text: "001", color: "lime" },
      { top: 33, left: 8, text: "111", color: "red" },
      { top: 75, right: 8, text: "000", color: "indigo" },
    ],
  };

  return (
    <section
      id="contact"
      className="min-h-auto py-20 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30"></div>

      {/* Neural network background */}
      <div className="absolute inset-0 opacity-20">
        {/* Network nodes */}
        {backgroundElements.nodes.map((node, index) => (
          <motion.div
            key={index}
            className={`absolute w-${node.size} h-${node.size} bg-${node.color}-400/${node.opacity} rounded-full`}
            style={{
              top: `${node.top}%`,
              [node.left ? "left" : "right"]: `${node.left || node.right}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          ></motion.div>
        ))}

        {/* Connection lines */}
        {backgroundElements.lines.map((line, index) => (
          <motion.div
            key={index}
            className={`absolute h-0.5 bg-gradient-to-r from-${line.color}-400/30 to-transparent transform`}
            style={{
              top: `${line.top}%`,
              left: `${line.left}%`,
              width: `${line.width}px`,
              transform: `rotate(${line.rotate}deg)`,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          ></motion.div>
        ))}

        {/* Data streams */}
        {backgroundElements.streams.map((stream, index) => (
          <motion.div
            key={index}
            className={`absolute top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-${stream.color}-400/20 to-transparent`}
            style={{ [stream.side]: `${stream.position}%` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          ></motion.div>
        ))}

        {/* Floating binary digits */}
        {backgroundElements.digits.map((digit, index) => (
          <motion.div
            key={index}
            className={`absolute text-xs text-${digit.color}-400/40`}
            style={{
              top: digit.top ? `${digit.top}%` : "auto",
              bottom: digit.bottom ? `${digit.bottom}%` : "auto",
              [digit.left ? "left" : "right"]: `${digit.left || digit.right}%`,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {digit.text}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-8 text-white gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <i
            style={{ marginRight: "10px" }}
            className="fas fa-handshake text-purple-400"
          ></i>
          Keling birga ishlaymiz!
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Loyihangiz uchun dasturchi qidiryapsizmi? Hamkorlik imkoniyatlarini
          muhokama qilishdan xursand bo'laman.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatedButton onClick={handleCallClick}>
            <i
              style={{ marginRight: "10px" }}
              className="fas fa-phone text-lg"
            ></i>
            Men bilan bog'lanish
          </AnimatedButton>
          <div className="flex gap-4">
            <TelegramButton onClick={handleTelegramClick} />
            <GitHubButton onClick={handleGitHubClick} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
