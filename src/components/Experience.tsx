import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Virtual Intern (AI/ML)",
      company: "Tata - AI/ML Job Simulation",
      location: "Remote",
      period: "Sep 2025",
      description:
        "Worked on AI/ML job simulation focused on fairness and explainability in credit risk modeling. Applied techniques like demographic parity and evaluated ethical deployment metrics.",
      achievements: [
        "Applied fairness techniques in machine learning models",
        "Evaluated ethical deployment metrics for credit risk modeling",
        "Analyzed demographic parity and bias in AI systems",
      ],
    },
    {
      title: "Virtual Intern (Python/Data)",
      company: "Deloitte",
      location: "Remote",
      period: "Sep 2025",
      description:
        "Developed a Python-based solution to standardize JSON telemetry data into a unified format, ensuring accuracy and compatibility across datasets.",
      achievements: [
        "Developed Python-based data standardization solution",
        "Ensured accuracy and compatibility across datasets",
        "Standardized JSON telemetry data formats",
      ],
    },
    {
      title: "Multimedia Executive",
      company: "CSI",
      location: "Mumbai",
      period: "2024 - Present",
      description:
        "Managing social media content and digital communications to strengthen community engagement and event visibility.",
      achievements: [
        "Managed social media content strategy",
        "Strengthened community engagement through digital communications",
        "Enhanced event visibility across platforms",
      ],
    },
    {
      title: "Logistics Executive",
      company: "ITSA",
      location: "Mumbai",
      period: "2023 - Present",
      description:
        "Managing social media content and digital communications to strengthen community engagement and event visibility.",
      achievements: [
        "As a Logistics Executive at ITSA, I gained hands-on experience in organizing and managing events by handling logistics.",
        "coordinating with teams, and ensuring smooth execution. This role helped me develop strong communication, time management, and problem-solving skills.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Work Experience
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Professional journey showcasing growth, responsibilities, and key
          achievements throughout my career.
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                      <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.location}
                  </p>
                </div>
                <div className="flex items-center mt-4 md:mt-0 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {exp.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
