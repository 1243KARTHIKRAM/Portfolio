const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="border-b-4 border-cyan-400 pb-2">About Me</span>
        </h2>
        
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image column */}
          <div className="flex justify-center animate-fade-in-left">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="Developer portrait" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
                <span className="text-slate-900 font-bold text-xs text-center">Full Stack Developer</span>
              </div>
            </div>
          </div>
          
          {/* Text column */}
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-2xl font-semibold text-white">
              Building Intelligent Web Solutions
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building modern, 
              responsive web applications. I specialize in creating seamless user experiences 
              using cutting-edge technologies on both frontend and backend.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My true passion lies in <span className="text-cyan-400 font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI-powered web applications</span>. 
              I love exploring how artificial intelligence can transform ordinary websites into 
              intelligent platforms that learn, adapt, and provide personalized experiences. 
              From integrating machine learning models to building smart chatbots, I'm always 
              excited to push the boundaries of what's possible on the web.
            </p>
            
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300 group">
                <span className="block text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:animate-pulse">2+</span>
                <span className="text-slate-400 text-sm">Years Exp.</span>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300 group">
                <span className="block text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:animate-pulse">20+</span>
                <span className="text-slate-400 text-sm">Projects</span>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300 group">
                <span className="block text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:animate-pulse">10+</span>
                <span className="text-slate-400 text-sm">Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
