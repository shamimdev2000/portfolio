
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ArrowRight, Terminal, FileText } from 'lucide-react';
import shamim from './Assets/shamim.jpg';


const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-2 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-300">Hello, It's Me</h3>
              <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                MD SHAMIM
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-400">
                  And I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Front-End Web Developer</span>
              </h2>
              <h2 className="text-1xl md:text-2xl font-bold text-slate-400">
                I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Student Of Creative It Instute.</span>
              </h2>
            </div>
            
            <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
              I specialize in creating pixel-perfect, high-performance Website & web applications using modern technologies like HTML, CSS, bootstrap, Tailwind, React & Javascript.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center transition-all shadow-lg shadow-indigo-500/20"
              >
                View My Work <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button 
                className="px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold flex items-center transition-all border border-slate-700 shadow-lg"
              >
                <FileText className="mr-2 w-5 h-5" /> Download CV
              </button>
              <div className="flex gap-3 mt-4 sm:mt-0">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900/50 hover:bg-indigo-600/20 text-slate-400 hover:text-indigo-400 rounded-xl transition-all border border-slate-800 hover:border-indigo-500/50"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Profile Image with Neon Green Arcs */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-40 h-40 md:w-50 md:h-50 lg:w-[450px] lg:h-[450px] group">
              
              {/* Outer Rotating Arc 1 */}
              <div className="absolute inset-[-15px] border-[4px] border-transparent border-t-red-500 border-l-red-500 rounded-full animate-[spin_8s_linear_infinite] opacity-80 blur-[1px]"></div>
              <div className="absolute inset-[-15px] border-[4px] border-transparent border-t-red-400 border-l-red-400 rounded-full animate-[spin_8s_linear_infinite] shadow-[0_0_20px_rgba(34,197,94,0.4)]"></div>
              
              {/* Outer Rotating Arc 2 (Opposite direction) */}
              <div className="absolute inset-[-15px] border-[4px] border-transparent border-b-red-500 border-r-red-500 rounded-full animate-[spin_12s_linear_infinite_reverse] opacity-80 blur-[1px]"></div>
              <div className="absolute inset-[-15px] border-[4px] border-transparent border-b-violet-700 border-r-pink-400 rounded-full animate-[spin_12s_linear_infinite_reverse] shadow-[0_0_20px_rgba(34,197,94,0.4)]"></div>

              {/* Inner Profile Circle */}
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-slate-900 shadow-2xl relative z-10 bg-slate-900">
                <img 
                  src={shamim}
                  alt="MD SHAMIM" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Background Glow behind profile */}
            <div className="absolute w-64 h-64 bg-red-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
