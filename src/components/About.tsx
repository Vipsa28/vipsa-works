
import { GraduationCap, MapPin } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Passionate Developer & Student</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm a dedicated Frontend Developer and graduate student pursuing a Master's in Information Technology and Management at the Illinois Institute of Technology. My passion lies in creating intuitive, scalable, and user-friendly web interfaces that deliver exceptional user experiences.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  During my internship at Demaze Technologies, I honed my skills in React.js, JavaScript, and modern web development practices. I'm particularly interested in full-stack development, UI/UX design, and cloud integration technologies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I believe in continuous learning and staying updated with the latest web technologies. My goal is to contribute to innovative projects that make a positive impact on users' lives.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-gray-500">
                <MapPin size={20} />
                <span>Parker, Colorado</span>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-blue-600 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-gray-900">Education</h4>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h5 className="font-semibold text-gray-900">Master's in Information Technology and Management</h5>
                    <p className="text-blue-600 font-medium">Illinois Institute of Technology</p>
                    <p className="text-gray-500 text-sm">Current Graduate Student</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h5 className="font-semibold text-gray-900">Academic Focus</h5>
                    <p className="text-gray-600 text-sm">Full-stack Development, UI/UX Design, Cloud Integration</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                <h4 className="text-xl font-semibold mb-3">Key Achievements</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Improved website performance by significant margins during internship</li>
                  <li>• Developed reusable React components for enhanced maintainability</li>
                  <li>• Successfully implemented responsive designs across multiple projects</li>
                  <li>• Collaborated effectively with cross-functional teams using Agile methodology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
