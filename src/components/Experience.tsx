
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience that has shaped my skills and expertise in frontend development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Briefcase size={24} />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold">Frontend Developer Intern</CardTitle>
                  <p className="text-blue-100 text-lg">Demaze Technologies</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>Internship Period</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={16} />
                  <span>Remote/Hybrid</span>
                </div>
              </div>
            </div>

            <CardContent className="p-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements & Responsibilities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Website Performance Improvement</h4>
                        <p className="text-gray-600 text-sm">Optimized loading times and user experience through code splitting and performance best practices.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Reusable Component Development</h4>
                        <p className="text-gray-600 text-sm">Created modular, reusable React components to improve development efficiency and code maintainability.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Mobile Responsiveness</h4>
                        <p className="text-gray-600 text-sm">Implemented responsive designs ensuring seamless user experience across all device types.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">State Management</h4>
                        <p className="text-gray-600 text-sm">Implemented Redux Toolkit for efficient state management in complex React applications.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Cross-functional Collaboration</h4>
                        <p className="text-gray-600 text-sm">Worked effectively with designers, backend developers, and project managers using Agile methodology.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Code Quality & Testing</h4>
                        <p className="text-gray-600 text-sm">Maintained high code quality standards through testing, code reviews, and best practices.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js", "JavaScript ES6+", "Redux Toolkit", "HTML5", "CSS3", 
                    "Tailwind CSS", "Git", "Agile Methodology", "Responsive Design", "Performance Optimization"
                  ].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Impact & Learning</h3>
                <p className="text-gray-700 leading-relaxed">
                  This internship experience at Demaze Technologies significantly enhanced my practical skills in React.js development and modern web technologies. 
                  I gained valuable experience in performance optimization, component architecture, and collaborative development practices that have shaped my approach to frontend development.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
