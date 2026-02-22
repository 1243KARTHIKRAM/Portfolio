const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
    ],
    color: 'from-cyan-400 to-blue-500'
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
    ],
    color: 'from-green-400 to-emerald-500'
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 75 },
    ],
    color: 'from-purple-400 to-pink-500'
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Postman', level: 85 },
    ],
    color: 'from-orange-400 to-red-500'
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="border-b-4 border-cyan-400 pb-2">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, index) => (
            <div 
              key={cat.category} 
              className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 border border-slate-700 hover:border-cyan-400/30 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color} animate-pulse`}></span>
                {cat.category}
              </h3>
              
              {/* Progress bars for each skill */}
              <div className="space-y-4">
                {cat.skills.map((skill, idx) => (
                  <div key={skill.name} className="space-y-2 group/skill">
                    <div className="flex justify-between text-slate-300">
                      <span className="font-medium group-hover/skill:text-cyan-400 transition-colors duration-300">{skill.name}</span>
                      <span className="group-hover/skill:text-cyan-400 transition-colors duration-300">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${cat.color} rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg group-hover/skill:shadow-cyan-500/20`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills as badges below */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-white text-center mb-6">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap(cat => 
              cat.skills.map((skill, idx) => (
                <span 
                  key={`${cat.category}-${skill.name}-${idx}`}
                  className="px-4 py-2 bg-slate-700 text-slate-200 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-slate-900 transition-all duration-300 cursor-default hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
