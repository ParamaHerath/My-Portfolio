import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, Node.js, and PostgreSQL. Features include real-time inventory management, Stripe integration, and an admin dashboard.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Task Management App",
    description: "A drag-and-drop kanban board application for team productivity. Includes real-time collaboration using WebSockets and role-based access control.",
    tech: ["React", "Express", "Socket.io", "MongoDB"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather visualization tool that aggregates data from multiple APIs. Features interactive charts and location-based forecasting.",
    tech: ["React", "Framer Motion", "Chart.js", "Weather API"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1504608524841-42e564145af4?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "AI Code Assistant",
    description: "A browser extension that provides intelligent code suggestions and refactoring capabilities powered by LLMs. Integrates directly into VS Code.",
    tech: ["TypeScript", "React", "OpenAI API", "WebPack"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Fitness Tracker Mobile",
    description: "A cross-platform mobile application for tracking workouts, nutrition, and health metrics. Features social challenges and progress visualization.",
    tech: ["React Native", "Firebase", "Redux", "Expo"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1526506161-5cc71f30127e?q=80&w=1600&auto=format&fit=crop"
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
    <section id="projects" className="h-screen flex flex-col justify-center py-20 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 z-20">
        <h3 className="text-3xl font-bold text-white flex items-center">
          Some Things I've Built
          <div className="h-[1px] bg-white/10 flex-grow ml-6"></div>
        </h3>
      </div>

      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center min-h-[550px] md:min-h-[700px] z-10 perspective-[1000px]">
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
              className="absolute w-[85vw] md:w-[60vw] max-w-4xl aspect-[4/5] sm:aspect-square md:aspect-[16/10] bg-zinc-900 border border-white/10 rounded-lg overflow-hidden shadow-2xl"
              style={{ pointerEvents: isCenter ? 'auto' : 'none' }}
            >
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-zinc-950/40 z-10 transition-colors duration-500 hover:bg-transparent"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center translate-z-0" />
              </div>
              
              <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end bg-gradient-to-t from-zinc-950 via-zinc-950/80 md:via-zinc-950/40 to-transparent">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-0">
                  <div className="max-w-2xl text-left">
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{project.title}</h4>
                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-3 md:line-clamp-none">
                      {project.description}
                    </p>
                    
                    <ul className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <li key={tech} className="text-xs font-mono text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full">{tech}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4 md:ml-4 pb-2">
                    <a href={project.github} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm shadow-xl">
                      <FaGithub size={22} />
                    </a>
                    <a href={project.live} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm shadow-xl">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Navigation Arrows */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-8">
        <button 
          onClick={prevCard}
          className="p-4 bg-zinc-900/50 hover:bg-sky-500/20 border border-white/10 text-white rounded-full backdrop-blur-md transition-all"
        >
          <FaChevronLeft size={20} />
        </button>
        <button 
          onClick={nextCard}
          className="p-4 bg-zinc-900/50 hover:bg-sky-500/20 border border-white/10 text-white rounded-full backdrop-blur-md transition-all"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Projects;
