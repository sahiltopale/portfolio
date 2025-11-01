import { User, Briefcase, GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Profile
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Passionate about designing and developing innovative digital
                  solutions that are intuitive, impactful, and user-focused.
                  Skilled in combining software engineering, full-stack
                  development, and AI/ML with strong problem-solving and
                  teamwork to create scalable applications.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Briefcase className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  My Work
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Recently completed virtual internships with Deloitte and Tata.
                  At Deloitte, I developed Python-based solutions for data
                  standardization. At Tata, I worked on AI/ML for fairness and
                  explainability in credit risk modeling. I have also worked on
                  multiple mini-projects across different semesters.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Education
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Schooling - Oxford Public School (2010 - 2020) Grade - 85.60%
                  <br />
                  Jr Clg - St. Rocks Jr. College of Science (2020 - 2022) Grade
                  - 71.00%
                  <br />
                  Entrance Exam - JEE Mains 2025 90%ile (AIR - 91,000)
                  <br />
                  UG - St. Francis Institute of Technology (2022-2026) Current
                  CGPA: 7.8
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Mumbai, Maharashtra | Available for Remote Work
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Facts
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-300 dark:border-gray-600">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Experience
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  3+ Internships
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-300 dark:border-gray-600">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Projects Completed
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  6+
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-300 dark:border-gray-600">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Technologies
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  10+
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Availability
                </span>
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
