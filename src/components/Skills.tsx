
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Settings } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        "React.js", "JavaScript ES6+", "HTML5", "CSS3", 
        "Tailwind CSS", "Bootstrap", "Redux Toolkit", "JSP"
      ],
      color: "blue"
    },
    {
      title: "Backend & Testing",
      icon: <Database className="text-purple-600" size={24} />,
      skills: [
        "RESTful APIs", "Java", "MySQL", "Jest", 
        "React Testing Library", "ASP.NET", "SQL Server"
      ],
      color: "purple"
    },
    {
      title: "Tools & Workflow",
      icon: <Settings className="text-green-600" size={24} />,
      skills: [
        "Git", "VS Code", "Postman", "Figma", 
        "Agile Methodology", "Node.js", "npm/yarn"
      ],
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-200 hover:border-blue-400 hover:shadow-blue-100",
      purple: "border-purple-200 hover:border-purple-400 hover:shadow-purple-100",
      green: "border-green-200 hover:border-green-400 hover:shadow-green-100"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getBadgeColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-800 hover:bg-blue-200",
      purple: "bg-purple-100 text-purple-800 hover:bg-purple-200", 
      green: "bg-green-100 text-green-800 hover:bg-green-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across frontend, backend, and development tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`border-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${getColorClasses(category.color)}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      className={`transition-all duration-200 hover:scale-105 cursor-default ${getBadgeColorClasses(category.color)}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Performance Optimization</h4>
                <p className="text-sm text-gray-600">Code splitting, lazy loading, bundle optimization</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Responsive Design</h4>
                <p className="text-sm text-gray-600">Mobile-first approach, cross-browser compatibility</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">State Management</h4>
                <p className="text-sm text-gray-600">Redux Toolkit, Context API, component state</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Team Collaboration</h4>
                <p className="text-sm text-gray-600">Agile methodology, version control, code reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
