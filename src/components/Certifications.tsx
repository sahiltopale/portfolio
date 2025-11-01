import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Honors in Artificial Intelligence & Machine Learning (AIML)",
      issuer: "St. Francis Institute of Technology",
      date: "Apr 2025 – Present",
      description:
        "Advanced coursework in AI/ML techniques, algorithms, and real-world applications.",
      color: "blue",
      status: "In Progress",
    },
    {
      title: "Oracle OCI gen AI Professional Course",
      issuer: "Oracle",
      date: "Sep 2025",
      description:
        "Comprehensive training on Oracle Cloud Infrastructure and generative AI technologies.",
      color: "orange",
      status: "Completed",
    },
    {
      title: "React Web Development Course",
      issuer: "Udemy",
      date: "Mar 2025 – Present",
      description:
        "In-depth React training covering hooks, state management, and modern web development practices.",
      color: "blue",
      status: "Completed",
    },
    {
      title: "Python Course using AI",
      issuer: "AI for Techies",
      date: "Jun 2025 – Present",
      description:
        "Python programming with AI-powered learning and practical coding projects.",
      color: "green",
      status: "In Progress",
    },
    {
      title: "Build Your Own ChatGPT",
      issuer: "LetsUpgrade.in",
      date: "Apr 2025 – Jun 2025",
      description:
        "Hands-on course on building AI-powered chatbot applications using large language models.",
      color: "purple",
      status: "Completed",
    },
    {
      title: "Virtual Internship Program",
      issuer: "Deloitte",
      date: "Sep 2025",
      description:
        "Professional internship focusing on Python development and JSON data standardization.",
      color: "indigo",
      status: "Completed",
    },
    {
      title: "Virtual Internship Program",
      issuer: "Tata",
      date: "Sep 2025",
      description:
        "AI/ML job simulation with focus on fairness, explainability, and ethical AI deployment.",
      color: "red",
      status: "Completed",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      { bg: string; text: string; border: string; badge: string }
    > = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-l-blue-600",
        badge: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
      },
      green: {
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-600 dark:text-green-400",
        border: "border-l-green-600",
        badge:
          "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      },
      orange: {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        text: "text-orange-600 dark:text-orange-400",
        border: "border-l-orange-600",
        badge:
          "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-l-purple-600",
        badge:
          "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
      },
      indigo: {
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        text: "text-indigo-600 dark:text-indigo-400",
        border: "border-l-indigo-600",
        badge:
          "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300",
      },
      red: {
        bg: "bg-red-50 dark:bg-red-900/20",
        text: "text-red-600 dark:text-red-400",
        border: "border-l-red-600",
        badge: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
      },
    };
    return colors[color];
  };

  return (
    <section
      id="certifications"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Certifications & Courses
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Continuous learning and professional development through
          industry-recognized certifications and specialized courses from
          leading institutions.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const colors = getColorClasses(cert.color);
            const isCompleted = cert.status === "Completed";

            return (
              <div
                key={index}
                className={`${colors.bg} border-l-4 ${colors.border} rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-4 flex-1">
                    <div
                      className={`p-2 ${colors.badge} rounded-lg flex-shrink-0`}
                    >
                      <Award className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {cert.title}
                      </h3>
                      <p className={`font-semibold ${colors.text} mb-2`}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ml-2 ${
                      isCompleted
                        ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                        : "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {cert.description}
                </p>

                <div className="flex items-center text-sm text-gray-600 dark:text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{cert.date}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                7+
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Certifications & Courses
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                5
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Completed Courses
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                3+
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                In-Progress Learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
