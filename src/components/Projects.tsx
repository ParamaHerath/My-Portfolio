import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: "Context",
    description: "A WinUI 3 whiteboard-style desktop application for unified canvas management. Enables users to store text, images, and drawings in a single custom file format for simplified resource handling.",
    tech: ["WinUI 3", ".NET", "C#", "Windows App SDK", "File I/O"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "VidStash",
    description: "A media library desktop app that organizes local files into a Netflix-style interface. Features automated filename parsing, TMDB metadata integration, and watch-status tracking.",
    tech: ["Electron", "Node.js", "SQLite", "Tailwind CSS", "File I/O"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Real-Time Ticketing Simulator",
    description: "A full-stack simulation of high-traffic network ticketing. Implements multithreading and synchronization on the backend to prevent race conditions during concurrent transactions.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Java Concurrency"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1539628399213-d6aa89c93074?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "NestQuest",
    description: "A real-estate exploration platform focused on high-performance client-side logic. Includes advanced filtering systems and Local Storage integration for persisting user preferences.",
    tech: ["React", "React Widgets", "localStorage API", "JavaScript"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "FreshTrack SL",
    description: "A cross-platform mobile app designed to reduce Sri Lankan crop wastage. Uses linear regression and predictive analytics to forecast demand and optimize supply chains.",
    tech: ["Flutter", "Python", "Supabase", "Machine Learning"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1595667929228-197607bc9271?q=80&w=1600&auto=format&fit=crop"
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    if (offset > 2) offset -= 5;
    if (offset < -2) offset += 5;
    return offset;
  };

  return (
    <section id="projects" className="min-h-[100vh] supports-[height:100dvh]:min-h-[100dvh] flex flex-col justify-center py-16 md:py-24 relative">
      <div className="w-full z-20 mb-8 sm:mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center">
          Some Things I've Built
          <div className="h-[1px] bg-white/10 flex-grow ml-4 sm:ml-6"></div>
        </h3>
      </div>

      <div className="w-[calc(100%+3rem)] -mx-6 sm:w-full sm:mx-0 relative flex items-center justify-center h-[65vh] sm:h-[60vh] md:h-[70vh] min-h-[420px] max-h-[800px] z-10 perspective-[1000px] overflow-hidden">
        {projects.map((project, index) => {
          const offset = getOffset(index);
          const isCenter = offset === 0;
          
          let x = 0;
          let z = 0;
          let scale = 1;
          let opacity = 1;
          let zIndex = 10;
          
          if (offset === 1) { x = 60; z = -100; scale = 0.85; opacity = 0.6; zIndex = 5; }
          else if (offset === -1) { x = -60; z = -100; scale = 0.85; opacity = 0.6; zIndex = 5; }
          else if (offset === 2) { x = 100; z = -200; scale = 0.7; opacity = 0.2; zIndex = 1; }
          else if (offset === -2) { x = -100; z = -200; scale = 0.7; opacity = 0.2; zIndex = 1; }

          return (
            <motion.div
              key={index}
              initial={false}
              animate={{
                x: `${x}%`,
                z,
                scale,
                opacity,
                zIndex
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute w-[82vw] sm:w-[75vw] md:w-[60vw] max-w-5xl h-[95%] sm:h-full bg-zinc-900 border border-white/10 rounded-lg overflow-hidden shadow-2xl"
              style={{ pointerEvents: isCenter ? 'auto' : 'none' }}
            >
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-zinc-950/40 z-10 transition-colors duration-500 hover:bg-transparent"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center translate-z-0" />
              </div>
              
              <div className="absolute inset-0 z-20 p-5 sm:p-6 md:p-10 flex flex-col justify-end bg-gradient-to-t from-zinc-950 via-zinc-950/80 md:via-zinc-950/40 to-transparent">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 sm:gap-6 md:gap-0">
                  <div className="max-w-2xl text-left">
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight">{project.title}</h4>
                    <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-4 sm:line-clamp-3 md:line-clamp-none">
                      {project.description}
                    </p>
                    
                    <ul className="flex flex-wrap gap-2 sm:gap-3">
                      {project.tech.map((tech) => (
                        <li key={tech} className="text-[10px] sm:text-xs font-mono text-sky-400 bg-sky-400/10 px-2 sm:px-3 py-1 rounded-full">{tech}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3 sm:gap-4 md:ml-4 pb-1 sm:pb-2">
                    <a href={project.github} className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm shadow-xl">
                      <FaGithub className="text-lg sm:text-[22px]" />
                    </a>
                    <a href={project.live} className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm shadow-xl">
                      <FaExternalLinkAlt className="text-base sm:text-[20px]" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Navigation Arrows */}
      <div className="flex justify-center gap-6 sm:gap-8 mt-8 z-30">
        <button 
          onClick={prevCard}
          className="p-3 sm:p-4 bg-zinc-900/50 hover:bg-sky-500/20 border border-white/10 text-white rounded-full backdrop-blur-md transition-all"
        >
          <FaChevronLeft size={16} />
        </button>
        <button 
          onClick={nextCard}
          className="p-3 sm:p-4 bg-zinc-900/50 hover:bg-sky-500/20 border border-white/10 text-white rounded-full backdrop-blur-md transition-all"
        >
          <FaChevronRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default Projects;
