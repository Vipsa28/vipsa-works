
import { ArrowDown, Code, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-purple-300/40 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200/40 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-32 text-blue-400/30 animate-bounce" style={{ animationDelay: '1s' }}>
          <Code size={24} />
        </div>
        <div className="absolute bottom-32 left-32 text-purple-400/30 animate-bounce" style={{ animationDelay: '3s' }}>
          <Sparkles size={20} />
        </div>
        <div className="absolute top-1/2 right-20 text-indigo-400/30 animate-bounce" style={{ animationDelay: '5s' }}>
          <Star size={18} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-white p-1.5 overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/BQXxkKWK/pp.jpg" 
                    alt="Vipsa Kanasagara"
                    className="w-full h-full rounded-full object-cover object-center shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-pulse">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute -top-2 -left-2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg animate-bounce">
                Available for Work
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Enhanced Typography */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg font-medium text-blue-600 tracking-wide">Hello, I'm</p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Vipsa Kanasagara
                  </span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-relaxed">
                  Frontend Developer & Graduate Student
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Passionate about creating <span className="font-semibold text-blue-600">clean, scalable, and user-friendly interfaces</span> with React.js, JavaScript, and modern web technologies
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
                {['React.js', 'JavaScript', 'Tailwind CSS', 'TypeScript'].map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center pt-8">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">View My Work</span>
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-200" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="group border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full transition-all duration-300 backdrop-blur-sm bg-white/80 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">Get In Touch</span>
                <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-200" />
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300 group"
            >
              <div className="flex flex-col items-center space-y-1">
                <span className="text-sm font-medium opacity-75 group-hover:opacity-100">Scroll to explore</span>
                <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform duration-200" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modern Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-30"></div>
    </section>
  );
};
