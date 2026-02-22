import { Github, Linkedin, ArrowDown, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-300" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mb-6 animate-fade-in-up">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up delay-100">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              Karthik Ram
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-400 mb-8 animate-fade-in-up delay-200">
            Full Stack Developer | AI Enthusiast
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up delay-300">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View Projects
            </a>
            <button
              className="group inline-flex items-center justify-center px-8 py-3 border-2 border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-semibold rounded-lg transition-all duration-300 hover:bg-slate-800/50 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
              Download Resume
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in delay-500">
            <a href="#about" className="inline-flex text-slate-500 hover:text-cyan-400 transition-colors duration-300">
              <ArrowDown className="w-8 h-8 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
