import { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowDown, Download, ExternalLink, Code, Cpu, Sparkles } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer | AI Enthusiast';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Enhanced animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400/30 rounded-full animate-float-slow" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400/30 rounded-full animate-float-medium delay-200" />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-float-fast delay-100" />
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-cyan-500/20 rounded-full animate-float-slow delay-300" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Name with enhanced gradient */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-cyan-400 bg-[length:300%_300%] animate-gradient-shift bg-clip-text text-transparent">
                Karthik Ram
              </span>
            </h1>
            
            {/* Typing effect for role */}
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <span className="text-2xl md:text-3xl text-slate-300 font-medium animate-fade-in-up delay-100">
                {displayText}
              </span>
              <span className="animate-blink inline-block w-1 h-8 md:h-10 bg-cyan-400 ml-1" />
            </div>
            
            {/* Tagline */}
            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
              Building scalable web applications and exploring the frontiers of artificial intelligence. 
              Passionate about creating elegant solutions to complex problems.
            </p>
            
            {/* Social Icons - Moved below text */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up delay-300">
              <a
                href="https://github.com/1243KARTHIKRAM"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Github className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <span className="absolute inset-0 rounded-full bg-cyan-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/g-karthik-ram-b92630260/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-full hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                <span className="absolute inset-0 rounded-full bg-blue-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in-up delay-400">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                View Projects
              </a>
              <button
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-semibold rounded-xl transition-all duration-300 hover:bg-slate-800/50 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
                Download Resume
              </button>
            </div>
          </div>
          
          {/* Right side - Profile Avatar / Developer Illustration */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Floating decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-cyan-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center animate-float-fast">
                <Code className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-purple-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center animate-float-medium delay-200">
                <Cpu className="w-7 h-7 text-purple-400" />
              </div>
              <div className="absolute top-1/2 -right-12 w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30 flex items-center justify-center animate-float-slow">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              
              {/* Main avatar card - Glassmorphism */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 animate-float-medium">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30 animate-pulse" />
                
                {/* Card */}
                <div className="relative h-full bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-6">
                  {/* Profile placeholder with gradient */}
                  <div className="relative w-40 h-40 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full animate-gradient-shift" />
                    <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                      <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">KR</span>
                    </div>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-slate-400 text-sm">Open to work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
          <a href="#about" className="inline-flex text-slate-500 hover:text-cyan-400 transition-colors duration-300 group">
            <ArrowDown className="w-8 h-8 animate-bounce group-hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
