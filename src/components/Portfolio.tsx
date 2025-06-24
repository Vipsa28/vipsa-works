
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Agro Solutions",
      description: "A comprehensive agricultural management platform built with React.js and MySQL. Implemented performance optimization techniques, created reusable components, and followed Agile methodology for efficient development.",
      technologies: ["React.js", "MySQL", "JavaScript", "Agile Methodology", "Performance Optimization"],
      highlights: ["Reusable Component Library", "Performance Optimized", "Agile Development"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&h=300&fit=crop"
    },
    {
      title: "E-Vege (Online Vegetable Market)",
      description: "A full-stack e-commerce platform for fresh vegetables using Java Servlets, JSP, and MySQL. Developed RESTful APIs, implemented security measures, and utilized MVC architecture for scalable code structure.",
      technologies: ["Java Servlets", "JSP", "MySQL", "RESTful APIs", "MVC Architecture"],
      highlights: ["RESTful API Design", "Security Implementation", "MVC Pattern"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=300&fit=crop"
    },
    {
      title: "Technical Endorsement System",
      description: "An enterprise-level endorsement management system built with ASP.NET and SQL Server. Features role-based modules, automated notifications, and optimized data handling for improved system performance.",
      technologies: ["ASP.NET", "SQL Server", "C#", "Role-based Access", "Data Optimization"],
      highlights: ["Role-based Modules", "Automated Notifications", "Data Optimization"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my notable academic and personal projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <Github size={16} className="text-white" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-gray-300 text-gray-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
