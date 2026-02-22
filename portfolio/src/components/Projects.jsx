import { useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Medicine Recommendation System',
    description: 'AI-powered medicine recommendation system that analyzes patient symptoms and medical history to provide personalized medication suggestions.',
    tags: ['Python', 'Machine Learning', 'HTML', 'css','Javascript', 'MongoDB'],
    github: 'https://github.com/1243KARTHIKRAM/Medicine-Recommendation',
    demo: 'https://medicine-recommendation.demo.com',
  },
  {
    title: 'Fix Buddy - Home Servicing Platform',
    description: 'A comprehensive home services platform connecting users with trusted service providers for cleaning, repairs, plumbing, and more.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    github: 'https://github.com/1243KARTHIKRAM/Fix-buddy',
    demo: 'https://buddy-home-services.demo.com',
  },
  {
    title: 'AI Proctored Exam System',
    description: 'Secure online examination platform with AI-based proctoring for detecting suspicious behavior and ensuring exam integrity.',
    tags: ['React','Node.js','MongoDB','Express','JWT'],
    github: 'https://github.com/1243KARTHIKRAM/Exam',
    demo: 'https://examportal-silk.vercel.app/',
  },
];

const moreProjects = [
  {
    title: 'Weather App',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and severe weather alerts.',
    github: 'https://github.com/1243KARTHIKRAM/weather_application-app',
    demo: 'https://weather-application-ten-self.vercel.app/',
  },
    {
  title: 'Rag System',
  description: 'An AI-powered Retrieval-Augmented Generation system that fetches relevant knowledge from documents and generates accurate contextual responses using LLMs.',
  github: 'https://github.com/1243KARTHIKRAM/RAG-System'
  },
  {
  title: 'Job Portal',
  description: 'A full-stack job portal platform where recruiters can post jobs and candidates can search, apply, and track applications with secure authentication.',
  github: 'https://github.com/1243KARTHIKRAM/Job-portal',
  demo:'https://jobportal-five-rho.vercel.app/'
  },
  {
    title: 'Kodbank',
    description: 'A code snippet manager for storing, organizing, and sharing code snippets across multiple programming languages.',
    github: 'https://github.com/1243KARTHIKRAM/Banking-system',
  },
  {
    title: 'Netflix',
    description: 'Full-stack streaming platform clone with movie browsing, and user authentication.',
    github: 'https://github.com/netflix-clone',
  }
 
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const scrollToMoreProjects = () => {
    setShowMore(true);
    setTimeout(() => {
      document.getElementById('more-projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  return (
    <section id="projects" className="py-20 bg-slate-900 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          <span className="border-b-4 border-cyan-400 pb-2">Featured Projects</span>
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Showcasing my major projects that demonstrate technical expertise and problem-solving skills
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Folder className="w-16 h-16 text-slate-600 group-hover:text-cyan-400/50 transition-colors duration-500 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-slate-400 mb-4 line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">{project.description}</p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-slate-700/50 text-cyan-400 rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200 cursor-default hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub and Live Demo Buttons */}
                <div className="flex space-x-4 mt-auto pt-4 border-t border-slate-700/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium group/btn"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToMoreProjects}
            className="group inline-flex items-center px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
          >
            <span>More Projects</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>

        {/* More Projects Section - Hidden by default */}
        {showMore && (
          <section id="more-projects" className="mt-16 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-center text-white mb-4">
              <span className="border-b-4 border-cyan-400 pb-2">More Projects</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {moreProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
                >
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h4>
                  <p className="text-slate-400 text-sm mb-3 line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">{project.description}</p>
                  <div className="flex space-x-4 mt-auto pt-3 border-t border-slate-700/50">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium group/btn"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium group/btn"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default Projects;
