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
        demo: "https://github.com/Yuxanno/portfolio-demo",
        github: "https://github.com/Yuxanno/portfolio-demo",
      },
      animationDelay: "200",
    },
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      icon: "fas fa-shopping-cart",
      iconColor: "text-green-400",
      description:
        "To'liq funksional elektron savdo platformasi, foydalanuvchi autentifikatsiya, to'lov integratsiyasi va admin paneli bilan.",
      gradient: "from-green-600 to-teal-600",
      headerIcon: "fas fa-store",
      image: "/images/ecommerce.png",
      technologies: [
        {
          name: "React",
          color: "bg-blue-600/30",
          borderColor: "border-blue-500/50",
          textColor: "text-blue-300",
        },
        {
          name: "Node.js",
          color: "bg-green-600/30",
          borderColor: "border-green-500/50",
          textColor: "text-green-300",
        },
        {
          name: "MongoDB",
          color: "bg-green-800/30",
          borderColor: "border-green-700/50",
          textColor: "text-green-200",
        },
        {
          name: "Stripe API",
          color: "bg-yellow-600/30",
          borderColor: "border-yellow-500/50",
          textColor: "text-yellow-300",
        },
      ],
      links: {
        demo: "https://github.com/Yuxanno/ecommerce-platform",
        github: "https://github.com/Yuxanno/ecommerce-platform",
      },
      animationDelay: "300",
    },
    {
      id: "task-management-app",
      title: "Task Management App",
      icon: "fas fa-tasks",
      iconColor: "text-blue-400",
      description:
        "Real vaqtda yangilanadigan vazifalar boshqarish ilovasi, jamoaviy ishlash va foydalanuvchi huquqlari tizimi bilan.",
      gradient: "from-blue-600 to-indigo-600",
      headerIcon: "fas fa-list-check",
      image: "/images/taskmanager.png",
      technologies: [
        {
          name: "React",
          color: "bg-blue-600/30",
          borderColor: "border-blue-500/50",
          textColor: "text-blue-300",
        },
        {
          name: "Socket.io",
          color: "bg-purple-600/30",
          borderColor: "border-purple-500/50",
          textColor: "text-purple-300",
        },
        {
          name: "Express",
          color: "bg-gray-600/30",
          borderColor: "border-gray-500/50",
          textColor: "text-gray-300",
        },
        {
          name: "PostgreSQL",
          color: "bg-blue-800/30",
          borderColor: "border-blue-700/50",
          textColor: "text-blue-200",
        },
      ],
      links: {
        demo: "https://github.com/Yuxanno/task-management-app",
        github: "https://github.com/Yuxanno/task-management-app",
      },
      animationDelay: "400",
    },
  ],
};
