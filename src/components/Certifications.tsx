import { Award, Calendar, ExternalLink } from "lucide-react";

// Define allowed color types
type ColorType = "blue" | "green" | "orange" | "purple" | "indigo" | "red";

// Type for a single certification
interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  color: ColorType;
  status: "Completed" | "In Progress";
  link: string;
}

const certifications: Certification[] = [
  {
    title: "Honors in Artificial Intelligence & Machine Learning (AIML)",
    issuer: "St. Francis Institute of Technology",
    date: "Apr 2025 – Present",
    description:
      "Advanced coursework in AI/ML techniques, algorithms, and real-world applications.",
    color: "purple",
    status: "In Progress",
    link: "https://www.sfit.ac.in",
  },
  {
    title: "Oracle OCI Gen AI Professional Course",
    issuer: "Oracle",
    date: "Sep 2025",
    description:
      "Comprehensive training on Oracle Cloud Infrastructure and generative AI technologies.",
    color: "orange",
    status: "Completed",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7B7D193026923DFEBFDDD5CD3DD3A69A0FC96A8A68E10D6EE9F9D2EE15A13998",
  },
  {
    title: "100 Days Web Development Bootcamp",
    issuer: "Udemy",
    date: "Mar 2025 – Present",
    description:
      "In-depth React training covering hooks, state management, and modern web development practices.",
    color: "blue",
    status: "Completed",
    link: "https://www.udemy.com/certificate/UC-4551e85b-ea01-4463-a532-b6d656c6b66a/",
  },
  {
    title: "Generative AI Course",
    issuer: "Google",
    date: "Oct 2025 – Dec 2025",
    description:
      "Introduction to GenAI by understanding LLMs, RAG, and fine-tuned models.",
    color: "red",
    status: "Completed",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzODA3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTU4NzA5OV85ODUzMjkzMTc2NTc4Njc3MzM4OC5wbmciLCJ1c2VybmFtZSI6IlNhaGlsIFRvcGFsZSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6750%2FIntroduction-to-Generative-AI%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1504430832480372693&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVL3dx8zH08DM3i0yyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAGIkE5NBAAAA",
  },
  {
    title: "StartUP India",
    issuer: "DevTown",
    date: "Mar 2025 – Present",
    description:
      "Contributed with small, medium enterprises and Industries Startups",
    color: "green",
    status: "Completed",
    link: "https://www.cert.devtown.in/verify/2vPRbs",
  },
  {
    title: "Build Your Own ChatGPT",
    issuer: "LetsUpgrade.in",
    date: "Apr 2025 – Jun 2025",
    description:
      "Hands-on course on building AI-powered chatbot applications using large language models.",
    color: "purple",
    status: "Completed",
    link: "https://verify.letsupgrade.in/certificate/LUELLMJUN125347",
  },
  {
    title: "Virtual Internship Program",
    issuer: "Deloitte",
    date: "Sep 2025",
    description:
      "Professional internship focusing on Python development and JSON data standardization.",
    color: "indigo",
    status: "Completed",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_68bd95559216515066c7bef2_1758207405167_completion_certificate.pdf",
  },
  {
    title: "Virtual Internship Program",
    issuer: "Tata",
    date: "Sep 2025",
    description:
      "AI/ML job simulation with focus on fairness, explainability, and ethical AI deployment.",
    color: "red",
    status: "Completed",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_68bd95559216515066c7bef2_1758715793163_completion_certificate.pdf",
  },
];

// TypeScript-safe getColorClasses function
const getColorClasses = (color: ColorType) => {
  const colors: Record<
    ColorType,
    { bg: string; text: string; border: string }
  > = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-l-blue-600",
    },
    green: {
      bg: "bg-green-50 dark:bg-green-900/20",
      text: "text-green-600 dark:text-green-400",
      border: "border-l-green-600",
    },
    orange: {
      bg: "bg-orange-50 dark:bg-orange-900/20",
      text: "text-orange-600 dark:text-orange-400",
      border: "border-l-orange-600",
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-900/20",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-l-purple-600",
    },
    indigo: {
      bg: "bg-indigo-50 dark:bg-indigo-900/20",
      text: "text-indigo-600 dark:text-indigo-400",
      border: "border-l-indigo-600",
    },
    red: {
      bg: "bg-red-50 dark:bg-red-900/20",
      text: "text-red-600 dark:text-red-400",
      border: "border-l-red-600",
    },
  };
  return colors[color];
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Certifications & Courses
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const colors = getColorClasses(cert.color);

            return (
              <div
                key={index}
                className={`${colors.bg} border-l-4 ${colors.border} p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition`}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-white dark:bg-gray-900`}>
                      <Award className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </h3>
                      <p className={`font-semibold ${colors.text}`}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Status */}
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      cert.status === "Completed"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {cert.description}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {cert.date}
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 font-semibold ${colors.text} hover:underline`}
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
