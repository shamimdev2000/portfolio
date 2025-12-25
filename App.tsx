
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import LiveBackground from './components/LiveBackground';
import shamim1 from './components/Assets/shamim1.jpg';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <LiveBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* About Section In-place */}
        <section id="about" className="py-24 bg-slate-900/30 backdrop-blur-[2px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden border-2 border-slate-800 group shadow-2xl">
                  <img 
                    src={shamim1}
                    alt="MD SHAMIM" 
                    className=" h-full bg-cover bg-center bg-no-repeat object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-6 -right-6 bg-indigo-600 p-6 rounded-2xl shadow-xl border-4 border-slate-950 transform transition-transform hover:scale-110">
                  <span className="block text-4xl font-black text-white">1</span>
                  <span className="text-indigo-100 text-xs uppercase font-bold tracking-widest leading-none">Years of <br /> Experience</span>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-indigo-500 mb-2 uppercase tracking-widest text-sm">About Me</h2>
                <h3 className="text-4xl font-extrabold text-white mb-6">Expertise in Modern <br /> Frontend Development</h3>
                <p className="text-slate-300 text-lg font-medium leading-relaxed mb-6 italic border-l-4 border-indigo-600 pl-4">
                  "Hello, It's Me Shamim And I'm a Frontend Developer"
                </p>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  I am a highly passionate, enthusiastic, hardworking and dedicated learner. Self-motivated IT professional with deep knowledge and proficiency in JavaScript, HTML, CSS, and mobile responsive website development, as well as highly potent skills and ability in encoding virus-free and efficient code. I have a strong passion for the creativity and discipline that goes into front-end development. Keeping in mind scalability and clean code that is maintainable and readable.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <h4 className="text-white font-bold mb-1">Architecture</h4>
                    <p className="text-slate-500 text-sm">Scalable & Modular</p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <h4 className="text-white font-bold mb-1">Performance</h4>
                    <p className="text-slate-500 text-sm">Fast & Optimized</p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <h4 className="text-white font-bold mb-1">UI / UX</h4>
                    <p className="text-slate-500 text-sm">Clean & Intuitive</p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <h4 className="text-white font-bold mb-1">AI Integration</h4>
                    <p className="text-slate-500 text-sm">Smart & Responsive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="relative z-10 py-12 border-t border-slate-900 bg-slate-950/80 backdrop-blur-sm text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Designed & Built by MD SHAMIM || All Rights Reserved
          </p>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;
