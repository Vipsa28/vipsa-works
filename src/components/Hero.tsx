import { ArrowDown, Code, Sparkles, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 text-blue-400/20 animate-bounce" style={{
        animationDelay: '1s'
      }}>
          <Code size={32} />
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-purple-400/20 animate-bounce" style={{
        animationDelay: '3s'
      }}>
          <Sparkles size={28} />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Profile Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1.5 group-hover:scale-105 transition-all duration-500 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white p-2 overflow-hidden">
                    <img src="https://i.postimg.cc/BQXxkKWK/pp.jpg" alt="Vipsa Kanasagara" className="w-full h-full rounded-full object-cover object-center" />
                  </div>
                </div>
                
                {/* Status badge */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                
                {/* Availability badge */}
                <div className="absolute -top-4 -left-4 bg-blue-500 text-white text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                  Available for Work
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
            
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-blue-600 font-medium text-lg tracking-wide flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Hello, I'm
              </p>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent text-5xl">
                  Vipsa
                </span>
                <br />
                <span className="text-gray-800 text-5xl">
                  Kanasagara
                </span>
              </h1>
              
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">
                  Frontend Developer & Graduate Student
                </h2>
                
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-500">
                  <MapPin size={16} />
                  <span>Available Worldwide</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Passionate about creating <span className="font-semibold text-blue-600">clean, scalable, and user-friendly interfaces</span> with React.js, JavaScript, and modern web technologies. Let's build something amazing together.
            </p>

            {/* Tech Stack */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {['React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech, index) => <span key={tech} className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    {tech}
                  </span>)}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
              <Button onClick={() => scrollToSection('portfolio')} size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="mr-2">View My Work</span>
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-200" />
              </Button>
              
              <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg" className="group border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm bg-white/80 shadow-lg hover:shadow-xl">
                <span className="mr-2">Get In Touch</span>
                <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-200" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button onClick={() => scrollToSection('about')} className="flex flex-col items-center space-y-2 text-gray-400 hover:text-blue-600 transition-colors duration-300 group">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-20"></div>
    </section>;
};