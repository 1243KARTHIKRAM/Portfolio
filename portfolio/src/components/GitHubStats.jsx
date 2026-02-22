import { useState, useEffect } from 'react';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your GitHub username
  const GITHUB_USERNAME = '1243KARTHIKRAM';

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userResponse.ok) throw new Error('Failed to fetch GitHub data');
        const userData = await userResponse.json();

        // Fetch repositories to calculate top languages
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
        );
        const reposData = await reposResponse.json();

        // Calculate top languages
        const languageCounts = {};
        let totalBytes = 0;
        
        for (const repo of reposData) {
          if (repo.language) {
            languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
            totalBytes++;
          }
        }

        const topLanguages = Object.entries(languageCounts)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([lang, count]) => ({
            name: lang,
            percentage: Math.round((count / totalBytes) * 100)
          }));

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          topLanguages,
          profileUrl: userData.html_url
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  // Language colors mapping
  const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    'C#': '#178600',
    Ruby: '#701516',
    Go: '#00ADD8',
    Rust: '#dea584',
    PHP: '#4F5D95',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
    CSS: '#563d7c',
    HTML: '#e34c26',
    Shell: '#89e051',
    Vue: '#41b883',
    Dart: '#00B4AB',
    Scala: '#c22d40'
  };

  if (loading) {
    return (
      <section id="github" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-400"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            <span className="border-b-4 border-cyan-400 pb-2">GitHub Stats</span>
          </h2>
          <p className="text-center text-slate-400">Unable to load GitHub stats. Please check configuration.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="py-20 bg-slate-800 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="border-b-4 border-cyan-400 pb-2">GitHub Stats</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contribution Graph */}
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              Contribution Graph
            </h3>
            <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
              <img 
                src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`} 
                alt={`${GITHUB_USERNAME}'s GitHub Chart`}
                className="w-full h-auto"
              />
            </div>
            <p className="text-slate-400 text-sm mt-3 text-center">
              Contributions in the last year
            </p>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            {/* Top Languages */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
                Top Languages
              </h3>
              <div className="space-y-3">
                {stats.topLanguages.map((lang, index) => (
                  <div key={lang.name} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-300 font-medium flex items-center gap-2">
                        <span 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: languageColors[lang.name] || '#6e7681' }}
                        ></span>
                        {lang.name}
                      </span>
                      <span className="text-cyan-400 text-sm">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500 group-hover:from-cyan-300 group-hover:to-blue-400"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300 text-center group">
                <span className="block text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stats.publicRepos}
                </span>
                <span className="text-slate-400 text-sm">Repos</span>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300 text-center group">
                <span className="block text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stats.followers}
                </span>
                <span className="text-slate-400 text-sm">Followers</span>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300 text-center group">
                <span className="block text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stats.following}
                </span>
                <span className="text-slate-400 text-sm">Following</span>
              </div>
            </div>

            {/* GitHub Profile Link */}
            <a 
              href={stats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
