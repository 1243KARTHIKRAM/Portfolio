import { FileText, Download, Calendar, Briefcase, GraduationCap, Award, Code, Lightbulb } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // Create a sample resume link - in production, this would be an actual PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Karthik_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-slate-800 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="border-b-4 border-cyan-400 pb-2">Resume</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Resume Preview Card */}
          <div className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors duration-300">
                  <FileText className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">Professional Resume</h3>
                  <p className="text-slate-400 text-sm">Full Stack Developer & AI Enthusiast</p>
                </div>
              </div>
            </div>
            
            {/* Professional Summary */}
            <div className="mb-6">
              <h4 className="text-white font-medium mb-2 flex items-center group-hover:text-cyan-400 transition-colors duration-300">
                <Lightbulb className="w-4 h-4 mr-2 text-cyan-400" />
                Summary
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Passionate Full Stack Developer and AI enthusiast with experience building real-world web applications including AI-based systems, service platforms, and proctored exam solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              {/* Current Status */}
              <div className="flex items-start space-x-3 group/item">
                <div className="mt-1">
                  <Briefcase className="w-5 h-5 text-cyan-400 group-hover/item:text-cyan-300 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300">Current Status</h4>
                  <p className="text-slate-400 text-sm">Final Year Computer Science Student</p>
                </div>
              </div>
              
              {/* Education Preview */}
              <div className="flex items-start space-x-3 group/item">
                <div className="mt-1">
                  <GraduationCap className="w-5 h-5 text-cyan-400 group-hover/item:text-cyan-300 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300">Education</h4>
                  <p className="text-slate-400 text-sm">B.E. in Computer Science Engineering</p>
                </div>
              </div>
              
              {/* Skills Preview */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">React</span>
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">Node.js</span>
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">JavaScript</span>
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">Python</span>
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">AI/ML</span>
              </div>
            </div>
            
            <button
              onClick={handleDownload}
              className="group/btn w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              Download Resume
            </button>
          </div>
          
          {/* Resume Details */}
          <div className="space-y-6">
            {/* Professional Summary Section */}
            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600 hover:border-cyan-400/30 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center group-hover:text-cyan-400 transition-colors duration-300">
                <Lightbulb className="w-5 h-5 mr-2 text-cyan-400" />
                Professional Summary
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Passionate Full Stack Developer and AI enthusiast with experience building real-world web applications including AI-based systems, service platforms, and proctored exam solutions.
              </p>
            </div>
            
            {/* Education */}
            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600 hover:border-cyan-400/30 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center group-hover:text-cyan-400 transition-colors duration-300">
                <GraduationCap className="w-5 h-5 mr-2 text-cyan-400" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-cyan-400 pl-4 hover:border-cyan-300 transition-colors duration-300">
                  <p className="text-cyan-400 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    2022 – 2026
                  </p>
                  <h4 className="text-white font-medium">B.E. in Computer Science Engineering</h4>
                  <p className="text-slate-400 text-sm">PES College of Engineering, Mandya</p>
                </div>
              </div>
            </div>
            
            {/* Technical Skills */}
            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600 hover:border-cyan-400/30 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center group-hover:text-cyan-400 transition-colors duration-300">
                <Code className="w-5 h-5 mr-2 text-cyan-400" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">React</span>
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">Node.js</span>
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">Express</span>
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">JavaScript</span>
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">TypeScript</span>
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">Python</span>
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">Machine Learning</span>
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">MongoDB</span>
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">SQL</span>
                <span className="px-3 py-1 bg-slate-600 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default">REST APIs</span>
              </div>
            </div>
            
            {/* Projects/Achievements */}
            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600 hover:border-cyan-400/30 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center group-hover:text-cyan-400 transition-colors duration-300">
                <Award className="w-5 h-5 mr-2 text-cyan-400" />
                Key Projects
              </h3>
              <div className="space-y-3">
                <div className="border-l-2 border-cyan-400 pl-4 hover:border-cyan-300 transition-colors duration-300">
                  <h4 className="text-white font-medium">AI-Based Systems</h4>
                  <p className="text-slate-400 text-sm">Built intelligent applications with machine learning capabilities</p>
                </div>
                <div className="border-l-2 border-slate-500 pl-4 hover:border-cyan-400/50 transition-colors duration-300">
                  <h4 className="text-white font-medium">Service Platforms</h4>
                  <p className="text-slate-400 text-sm">Developed full-stack service-oriented web applications</p>
                </div>
                <div className="border-l-2 border-slate-500 pl-4 hover:border-cyan-400/50 transition-colors duration-300">
                  <h4 className="text-white font-medium">Proctored Exam Solutions</h4>
                  <p className="text-slate-400 text-sm">Created secure online examination platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
