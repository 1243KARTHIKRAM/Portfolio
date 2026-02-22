import { Mail, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="border-b-4 border-cyan-400 pb-2">Contact Me</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <a 
              href="mailto:1243gkarthikram@gmail.com" 
              className="flex items-center space-x-3 bg-slate-700/50 p-4 rounded-lg border border-slate-600 hover:border-cyan-400/50 hover:bg-slate-700 transition-all duration-300 group"
            >
              <div className="p-3 bg-slate-600/50 rounded-full group-hover:bg-cyan-500/20 transition-colors duration-300">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-slate-400 text-xs">Email</p>
                <p className="text-white text-sm font-medium break-all">Email.com</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/1243KARTHIKRAM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-slate-700/50 p-4 rounded-lg border border-slate-600 hover:border-cyan-400/50 hover:bg-slate-700 transition-all duration-300 group"
            >
              <div className="p-3 bg-slate-600/50 rounded-full group-hover:bg-cyan-500/20 transition-colors duration-300">
                <Github className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <p className="text-slate-400 text-xs">GitHub</p>
                <p className="text-white text-sm font-medium break-all whitespace-normal">github.com</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/g-karthik-ram-b92630260/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-slate-700/50 p-4 rounded-lg border border-slate-600 hover:border-cyan-400/50 hover:bg-slate-700 transition-all duration-300 group"
            >
              <div className="p-3 bg-slate-600/50 rounded-full group-hover:bg-cyan-500/20 transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <p className="text-slate-400 text-xs">LinkedIn</p>
                <p className="text-white text-sm font-medium break-all whitespace-normal">linkedin.com</p>
              </div>
            </a>
            
            <div className="flex items-center space-x-3 bg-slate-700/50 p-4 rounded-lg border border-slate-600 hover:border-cyan-400/50 hover:bg-slate-700 transition-all duration-300 group">
              <div className="p-3 bg-slate-600/50 rounded-full group-hover:bg-cyan-500/20 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-slate-400 text-xs">Location</p>
                <p className="text-white text-sm font-medium">India</p>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center animate-fade-in-up">
              <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
              <p className="text-green-400 font-medium">
                Thank you for your message! I'll get back to you soon.
              </p>
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:bg-slate-700"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:bg-slate-700"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:bg-slate-700 resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className="group w-full md:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-slate-600 disabled:to-slate-700 text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 flex items-center justify-center disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              {isSubmitted ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
