import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Sahil Topale
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer | AI/ML Enthusiast | Problem Solving
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about designing and developing innovative digital
            solutions that are intuitive, impactful, and user-focused. Skilled
            in combining software engineering, full-stack development, and AI/ML
            with strong problem-solving and teamwork.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/sahiltopale"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-gray-800 dark:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-topale-37b56331a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </a>
            <a
              href="mailto:sahil.topale2005@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-red-600 dark:text-red-400" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-blue-600 dark:border-blue-400"
            >
              View My Work
            </button>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="mt-16 animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-8 h-8 text-gray-600 dark:text-gray-400 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
