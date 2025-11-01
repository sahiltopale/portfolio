import { Code2, Database, Layout, Server, Smartphone, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      color: "blue",
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "HTML/CSS",
        "JavaScript",
        "Next.js",
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "green",
      skills: ["Node.js", "Express.js", "Python", "REST APIs"],
    },
    {
      title: "Database",
      icon: Database,
      color: "purple",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "AI/ML",
      icon: Code2,
      color: "orange",
      skills: [
        "YOLOv8",
        "Predictive Modeling",
        "Data Transformation",
        "Fairness & Bias Analysis",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Zap,
      color: "pink",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      title: "Professional Skills",
      icon: Smartphone,
      color: "indigo",
      skills: [
        "Problem-Solving",
        "Teamwork",
        "Project Coordination",
        "Communication",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> =
      {
        blue: {
          bg: "bg-blue-100 dark:bg-blue-900",
          text: "text-blue-600 dark:text-blue-400",
          border: "border-blue-200 dark:border-blue-800",
        },
        green: {
          bg: "bg-green-100 dark:bg-green-900",
          text: "text-green-600 dark:text-green-400",
          border: "border-green-200 dark:border-green-800",
        },
        purple: {
          bg: "bg-purple-100 dark:bg-purple-900",
          text: "text-purple-600 dark:text-purple-400",
          border: "border-purple-200 dark:border-purple-800",
        },
        orange: {
          bg: "bg-orange-100 dark:bg-orange-900",
          text: "text-orange-600 dark:text-orange-400",
          border: "border-orange-200 dark:border-orange-800",
        },
        pink: {
          bg: "bg-pink-100 dark:bg-pink-900",
          text: "text-pink-600 dark:text-pink-400",
          border: "border-pink-200 dark:border-pink-800",
        },
        indigo: {
          bg: "bg-indigo-100 dark:bg-indigo-900",
          text: "text-indigo-600 dark:text-indigo-400",
          border: "border-indigo-200 dark:border-indigo-800",
        },
      };
    return colors[color];
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A comprehensive set of technical skills acquired through years of
          hands-on experience and continuous learning.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-blue-500"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 ${colors.bg} rounded-lg`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium border ${colors.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
