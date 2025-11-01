import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "NutriTrack",
      description:
        "AI-based food recognition system using YOLOv8 for identifying food items from images. Includes React frontend with secure backend authentication for meal tracking.",
      tags: ["YOLOv8", "React", "AI/ML", "Backend Auth", "Food Recognition"],
      image: "src/components/images/nutritrack.png",
      githubUrl: "https://github.com/sahiltopale/nutritrack",
      liveUrl: "#",
    },
    {
      title: "Chatty",
      description:
        "Real-time chat application with online user filtering, image sharing capabilities, and responsive UI design for seamless communication.",
      tags: ["React", "Real-time", "WebSockets", "Node.js", "MongoDB"],
      image: "src/components/images/chatty.png",
      githubUrl: "https://github.com/sahiltopale/fullstackrealtime-chatapp",
      liveUrl: "#",
    },
    {
      title: "SmartShelf",
      description:
        "IoT-Based Smart Shelf: An intelligent system that monitors inventory levels and expiry using sensors and updates data in real time for efficient stock management.",
      tags: ["React", "Node.js", "Thingspeak", "Hardware Components"],
      image: "src/components/images/IOTsmartshelf.png",
      githubUrl: "https://github.com/sahiltopale/IOT-smartshelf",
      liveUrl: "#",
    },
    {
      title: "Staff Leave Management System",
      description:
        "Python-based system to manage and track staff leave records with efficient database management and reporting capabilities.",
      tags: ["Python", "Database", "System Design", "Management"],
      image: "src/components/images/staffleavemanagement.png",
      githubUrl: "https://github.com/sahiltopale",
      liveUrl: "#",
    },
    {
      title: "Rentall",
      description:
        "Mini buy-sell platform built and coordinated as a team project. Features product listing, search, and transaction management.",
      tags: ["React", "Node.js", "MongoDB", "E-commerce"],
      image: "src/components/images/rentall.png",
      githubUrl: "https://github.com/sahiltopale/rentall",
      liveUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A showcase of my recent work, demonstrating expertise in various
          technologies and problem-solving capabilities.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github className="w-5 h-5 text-gray-900" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-900" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
