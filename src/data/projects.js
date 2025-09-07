export const projectsData = {
  sectionTitle: {
    icon: "fas fa-rocket",
    iconColor: "text-purple-400",
    title: "Tanlangan loyihalar",
  },
  projects: [
    {
      id: "portfolio-demo",
      title: "Portfolio Demo",
      icon: "fas fa-globe",
      iconColor: "text-purple-400",
      description:
        "Zamonaviy portfolio veb-sayti - React, TailwindCSS va AOS animatsiyalari bilan yaratilgan.",
      gradient: "from-purple-600 to-blue-600",
      headerIcon: "fas fa-desktop",
      image: "/images/portfolio.png",
      technologies: [
        {
          name: "React",
          color: "bg-blue-600/30",
          borderColor: "border-blue-500/50",
          textColor: "text-blue-300",
        },
        {
          name: "TailwindCSS",
          color: "bg-cyan-600/30",
          borderColor: "border-cyan-500/50",
          textColor: "text-cyan-300",
        },
        {
          name: "Vite",
          color: "bg-yellow-600/30",
          borderColor: "border-yellow-500/50",
          textColor: "text-yellow-300",
        },
      ],
      links: {
        demo: "#",
      },
      animationDelay: "200",
    },
  ],
};
