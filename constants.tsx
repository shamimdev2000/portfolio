
import React from 'react';
import { Project, Skill, Experience } from './types';
import project1 from './components/Assets/project1.jpg';
import { 
  Code2, 
  Database, 
  Layout, 
  Terminal, 
  Cpu, 
  Globe, 
  Smartphone, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Facebook
} from 'lucide-react';

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/shamimdev2000' },
  { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/md.shamim.899196' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/md-shamim-46a495319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com' },
  { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@shamim.dev' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Petroil Project',
    description: 'A real-time monitoring dashboard for multi-cloud infrastructure, processing millions of metrics per second.',
    image: '{project1}',
    tags: ['React', 'JavaScript', 'Tailwind Css', 'Node Js'],
    link: '#',
    github: 'https://github.com/shamimdev2000',
  },
  {
    id: '2',
    title: 'Nexus E-commerce',
    description: 'A headless commerce platform with AI-driven product recommendations and ultra-fast edge delivery.',
    image: '',
    tags: ['React', 'JavaScript', 'Tailwind Css', 'Node Js'],
    link: '#',
    github: 'https://github.com/shamimdev2000',
  },
  {
    id: '3',
    title: 'Veritas Auth',
    description: 'A decentralized identity management system built on blockchain protocols for secure enterprise access.',
    image: '',
    tags: ['React', 'JavaScript', 'Tailwind Css', 'Node Js'],
    link: '#',
    github: 'https://github.com/shamimdev2000',
  },
];

export const SKILLS: Skill[] = [
  { name: 'React.js', level: 80, category: 'Frontend' },
  { name: 'CSS', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'HTML', level: 85, category: 'Frontend' },
  { name: 'Javascript', level: 80, category: 'Backend' },
  { name: 'VS Code', level:95, category: 'Tools' },
  { name: 'Firebase', level: 90, category: 'Tools' },
  { name: 'System Design', level: 85, category: 'Soft Skills' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'CIT',
    role: 'MERN Stack Developer Upcoming',
    period: '2024 - Present',
    description: [
      'Led the migration of legacy monolith to microservices architecture.',
      'Reduced frontend bundle sizes by 40% through advanced tree-shaking and lazy loading.',
      'Mentored a team of 10 junior and mid-level developers.'
    ]
  },
  {
    company: 'InnoSystems',
    role: 'Front End Developer',
    period: '2024 - 2025',
    description: [
      'Developed and maintained highly scalable e-commerce solutions.',
      'Implemented real-time chat features using WebSockets and Socket.io.',
      'Optimized database queries, resulting in 30% faster load times.'
    ]
  }
];
