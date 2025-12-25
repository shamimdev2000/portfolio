
import React from 'react';
import { 
  Radar, RadarChart, PolarGrid, 
  PolarAngleAxis, ResponsiveContainer 
} from 'recharts';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const chartData = SKILLS.map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Technical Mastery</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A diverse toolkit built on years of problem-solving and architectural design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILLS.map((skill) => (
              <div 
                key={skill.name}
                className="p-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-indigo-500 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-slate-200">{skill.name}</span>
                  <span className="text-xs text-indigo-400 font-mono">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-indigo-500 h-full rounded-full transition-all duration-1000 group-hover:bg-indigo-400"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="mt-2">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{skill.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
