import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Context",
    description: "A WinUI 3 whiteboard-style desktop application for unified canvas management. Enables users to store text, images, and drawings in a single custom file format for simplified resource handling.",
    tech: ["WinUI 3", ".NET", "C#", "Windows App SDK", "File I/O"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "VidStash",
    description: "A media library desktop app that organizes local files into a Netflix-style interface. Features automated filename parsing, TMDB metadata integration, and watch-status tracking.",
    tech: ["Electron", "Node.js", "SQLite", "Tailwind CSS"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Real-Time Ticketing",
    description: "A full-stack simulation of high-traffic network ticketing. Implements multithreading and synchronization on the backend to prevent race conditions during concurrent transactions.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Java"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1539628399213-d6aa89c93074?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "NestQuest",
    description: "A real-estate exploration platform focused on high-performance client-side logic. Includes advanced filtering systems and Local Storage integration for persisting user preferences.",
    tech: ["React", "React Widgets", "localStorage API", "JS"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "FreshTrack SL",
    description: "A cross-platform mobile app designed to reduce Sri Lankan crop wastage. Uses linear regression and predictive analytics to forecast demand and optimize supply chains.",
    tech: ["Flutter", "Python", "Supabase", "Machine Learning"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1595667929228-197607bc9271?q=80&w=1600&auto=format&fit=crop"
  }
];

// Reusable Project Modal for details
const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
  if (!project) return null;
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        layoutId={`proj-${project.id}`} 
        className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl relative" 
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors">
          <FaTimes size={14} />
        </button>
        <div className="md:w-1/2 h-64 md:h-auto relative">
          <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-zinc-400 text-sm md:text-base mb-6 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t: string) => <span key={t} className="text-xs font-mono text-sky-400 bg-sky-400/10 px-2 py-1 rounded-sm">{t}</span>)}
          </div>
          <div className="flex gap-4">
            <a href={project.github} className="flex-1 flex justify-center items-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/5 font-medium"><FaGithub /> GitHub</a>
            <a href={project.live} className="flex-1 flex justify-center items-center gap-2 py-3 bg-white text-black hover:bg-zinc-200 rounded-lg transition-colors font-medium"><FaExternalLinkAlt /> Live Demo</a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Variant1Stacking = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-16 md:gap-32 pb-32">
      {projects.map((p, i) => {
        return (
          <div key={p.id} className="sticky w-full" style={{ top: `calc(15vh + ${i * 30}px)`, zIndex: i }}>
            <motion.div 
              className="w-full h-[500px] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.5)] flex flex-col md:flex-row group"
            >
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-12 flex flex-col justify-center bg-zinc-950">
                <h3 className="text-3xl font-bold text-white mb-4">{p.title}</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed hidden sm:block">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.slice(0,4).map((t: string) => <span key={t} className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded-sm border border-zinc-800">{t}</span>)}
                </div>
                <div className="flex gap-4">
                  <a href={p.github} className="flex gap-2 items-center p-3 px-5 bg-white/5 hover:bg-white/10 rounded-lg text-white font-medium transition-colors"><FaGithub size={18} /> Code</a>
                  <a href={p.live} className="flex gap-2 items-center p-3 px-5 bg-white hover:bg-zinc-200 rounded-lg text-zinc-950 font-medium transition-colors"><FaExternalLinkAlt size={16} /> Live</a>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src={p.image} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

const Variant2Marquee = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projects.find(p => p.id === selectedId);

  // Duplicating for infinite effect
  const marqueeItems = [...projects, ...projects, ...projects];

  return (
    <div className="w-full h-[600px] overflow-hidden flex flex-col justify-center relative -mx-6 w-[calc(100%+3rem)] sm:mx-0 sm:w-full">
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        animate={{ x: [0, -1500] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        className="flex gap-6 mb-6 px-4"
        whileHover={{ animationPlayState: "paused" }}
      >
        {marqueeItems.map((p, i) => (
          <div 
            key={`${p.id}-${i}`} onClick={() => setSelectedId(p.id)}
            className="w-[280px] md:w-[350px] h-[400px] md:h-[450px] flex-shrink-0 relative rounded-xl overflow-hidden cursor-pointer group bg-zinc-900 border border-zinc-800"
          >
            <img src={p.image} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent p-6 md:p-8 flex flex-col justify-end">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{p.title}</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <p className="text-zinc-400 text-sm line-clamp-3 mb-4">{p.description}</p>
                  <span className="text-sky-400 text-sm font-medium flex items-center gap-2">View Project <FaExternalLinkAlt size={12}/></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedId && <ProjectModal project={selectedProject} onClose={() => setSelectedId(null)} />}
      </AnimatePresence>
    </div>
  );
};

const Variant3Editorial = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-32 py-16">
      {projects.map((p, i) => {
        const isEven = i % 2 === 0;
        return (
          <div key={p.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} relative items-center`}>
            {/* Vertical text label */}
            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 -rotate-90 origin-center text-zinc-600 text-[10px] tracking-[0.3em] uppercase whitespace-nowrap overflow-visible z-20 ${isEven ? '-left-20' : '-right-20'}`}>
              Feature Project / {p.tech[0]}
            </div>

            {/* Image */}
            <div className="w-full md:w-2/3 h-[400px] md:h-[550px] relative z-0 shrink-0">
              <img src={p.image} className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
            </div>

            {/* Content overlapping block */}
            <div className={`w-[90%] md:w-auto md:min-w-[450px] p-8 md:p-12 bg-zinc-950 border border-zinc-800 shadow-2xl relative z-10 -mt-16 ${isEven ? 'md:-ml-24 md:mt-0' : 'md:-mr-24 md:mt-0'}`}>
              <div className="text-zinc-500 font-mono text-xs mb-6">0{i + 1}</div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-[-0.03em] leading-none">{p.title}</h3>
              <p className="text-zinc-400 mb-10 leading-relaxed font-light text-sm md:text-base">{p.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-12">
                {p.tech.map(t => <span key={t} className="text-[10px] tracking-widest uppercase border border-zinc-800 px-3 py-1.5 text-zinc-300">{t}</span>)}
              </div>

              <div className="flex gap-8 items-center">
                <a href={p.github} className="text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:text-zinc-400 transition-colors flex items-center gap-2"><FaGithub size={14}/> Github</a>
                <a href={p.live} className="text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:text-zinc-400 transition-colors flex items-center gap-2"><FaExternalLinkAlt size={12}/> Live View</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Variant4Lookbook = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-40 py-24">
      {projects.map((p, i) => (
        <div key={p.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[500px]">
          {/* Small side info */}
          <div className="lg:col-span-3 flex flex-col justify-between py-4">
            <div className="w-full aspect-[3/4] relative hidden lg:block overflow-hidden bg-zinc-900 mb-8 border border-white/5">
              <img src={p.image} className="absolute inset-0 w-full h-full object-cover scale-150 origin-top-left opacity-30 mix-blend-screen" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white/50 text-[10px] font-mono tracking-widest uppercase">Detail shot</div>
            </div>
            <div className="pl-4 border-l border-zinc-800">
              <p className="text-zinc-600 text-[10px] tracking-[0.2em] uppercase mb-4">Technologies Stack</p>
              <ul className="flex flex-col gap-2">
                {p.tech.map(t => <li key={t} className="text-zinc-300 text-xs tracking-wider uppercase font-light">{t}</li>)}
              </ul>
            </div>
          </div>

          {/* Main Title Area */}
          <div className="lg:col-span-4 flex flex-col justify-center px-4 lg:px-8">
            <div className="text-sky-500 font-mono text-sm mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-sky-500/50"></span>
              P—0{i+1}
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase leading-[1.05] tracking-tighter mb-8 break-words">
              {p.title.split(' ').map((word, idx) => <span key={idx} className="block">{word}</span>)}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-sm font-light">
              {p.description}
            </p>
            <div className="flex gap-6 border-t border-zinc-800 pt-6">
              <a href={p.github} className="text-xs tracking-widest text-zinc-400 hover:text-white transition-colors uppercase">Source Code</a>
              <a href={p.live} className="text-xs tracking-widest text-zinc-400 hover:text-white transition-colors uppercase">View Live</a>
            </div>
          </div>

          {/* Large Image Area */}
          <div className="lg:col-span-5 h-[400px] lg:h-auto relative w-full overflow-hidden bg-zinc-900 border border-white/5 order-first lg:order-last">
            <div className="absolute top-12 left-12 origin-top-left rotate-90 text-[10px] tracking-[0.4em] text-white/80 uppercase z-10 mix-blend-difference hidden md:block select-none">
              Modern Presentation
            </div>
            <img src={p.image} className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-[2s] ease-out" />
          </div>
        </div>
      ))}
    </div>
  );
};

const Variant5Magazine = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 md:gap-24">
      {projects.map((p, i) => (
        <div key={p.id} className="w-full bg-zinc-900/40 border border-zinc-800/80 p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 relative overflow-hidden group">
          {/* Faded background number */}
          <div className="absolute -top-10 -right-10 text-[200px] font-black text-white/5 select-none pointer-events-none leading-none mix-blend-overlay">0{i+1}</div>
          
          {/* Main Info */}
          <div className="lg:col-span-4 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-800 pb-8 lg:pb-0 lg:pr-12 relative z-10">
            <p className="text-[10px] tracking-[0.25em] text-sky-500 uppercase mb-6 font-bold">Write Something Here</p>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-[1.1]">{p.title}</h3>
            <p className="text-zinc-400 text-sm leading-loose mb-10">{p.description}</p>
            <div className="flex gap-6 mt-auto">
              <a href={p.github} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white hover:text-sky-400 transition-colors bg-zinc-800 px-4 py-2"><FaGithub size={14}/> Code</a>
              <a href={p.live} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-950 hover:bg-sky-400 transition-colors bg-white px-4 py-2"><FaExternalLinkAlt size={12}/> View</a>
            </div>
          </div>
          
          {/* Image & Small Column */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row gap-8 relative z-10">
            <div className="w-full sm:w-8/12 h-[300px] md:h-[450px] bg-zinc-950 relative border border-zinc-800">
              <div className="absolute inset-4 lg:inset-8 overflow-hidden bg-zinc-900">
                <img src={p.image} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" />
              </div>
            </div>
            
            <div className="w-full sm:w-4/12 flex flex-col justify-between py-2 pl-2">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-6 border-b border-zinc-800 pb-3">Tech Stack</p>
                <div className="flex flex-col gap-4">
                  {p.tech.map((t, index) => (
                    <div key={t} className="flex items-center gap-4 text-sm font-medium text-zinc-200">
                      <span className="text-[10px] text-zinc-600 font-mono">0{index+1}</span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden sm:block mt-8">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-3 border-b border-zinc-800 pb-3">Status</p>
                <div className="text-sm text-sky-400 uppercase tracking-widest font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                  Live Deployment
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  const [variant, setVariant] = useState(1);

  return (
    <section id="projects" className="relative pt-32 pb-16">
      <div className="w-full max-w-7xl mx-auto px-6 z-20 mb-16 md:mb-24">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">Projects / Work</h3>
            <p className="text-zinc-500 text-sm tracking-widest uppercase font-mono">Showcase of technical ability</p>
          </div>
          
          {/* Variant Selector Menu */}
          <div className="flex items-center gap-3 bg-zinc-900/50 p-2 rounded-xl border border-white/5 overflow-x-auto overflow-y-hidden pb-3 xl:pb-2 scrollbar-thin">
            <span className="text-zinc-500 text-xs font-mono px-3 uppercase tracking-wider whitespace-nowrap">View Style:</span>
            {[
              { id: 1, label: "Stacking" },
              { id: 2, label: "Marquee" },
              { id: 3, label: "Editorial" },
              { id: 4, label: "Lookbook" },
              { id: 5, label: "Magazine" }
            ].map((v) => (
              <button 
                key={v.id}
                onClick={() => setVariant(v.id)}
                className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${variant === v.id ? 'bg-white text-black' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-transparent'}`}
              >
                {String(v.id).padStart(2, '0')}. {v.label}
              </button>
            ))}
          </div>
        </div>
        <div className="h-[1px] w-full bg-zinc-800 mt-8"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6">
        {variant === 1 && <Variant1Stacking />}
        {variant === 2 && <Variant2Marquee />}
        {variant === 3 && <Variant3Editorial />}
        {variant === 4 && <Variant4Lookbook />}
        {variant === 5 && <Variant5Magazine />}
      </div>
    </section>
  );
};

export default Projects;