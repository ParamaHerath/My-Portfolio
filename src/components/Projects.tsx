import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FaReact, FaJava, FaPython, FaCode, FaHtml5, FaCss3Alt, FaWindows } from 'react-icons/fa';
import { SiDotnet, SiElectron, SiTailwindcss, SiSqlite, SiSpringboot, SiPostgresql, SiJavascript, SiDart, SiFlutter, SiSupabase } from 'react-icons/si';
import type { IconType } from 'react-icons';

const techIcons: Record<string, IconType> = {
  'WinUI 3': FaWindows,
  '.NET': SiDotnet,
  'C#': FaCode,
  'Windows App SDK': FaWindows,
  'File I/O': FaCode,
  Electron: SiElectron,
  React: FaReact,
  'Tailwind CSS': SiTailwindcss,
  SQLite: SiSqlite,
  'Spring Boot': SiSpringboot,
  Java: FaJava,
  PostgreSQL: SiPostgresql,
  REST: FaCode,
  JavaScript: SiJavascript,
  'React Widgets': FaReact,
  'HTML5 & CSS3': FaHtml5,
  'Web Storage API': FaCss3Alt,
  Flutter: SiFlutter,
  Dart: SiDart,
  Python: FaPython,
  Supabase: SiSupabase,
};

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
    tech: ["Electron", "React", "Tailwind CSS", "SQLite", "File I/O"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Real-Time Ticketing System Simulatior",
    description: "A full-stack simulation of high-traffic network ticketing. Implements multithreading and synchronization on the backend to prevent race conditions during concurrent transactions.",
    tech: ["React", "Spring Boot", "Java", "PostgreSQL", "REST"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1539628399213-d6aa89c93074?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "NestQuest",
    description: "A real-estate exploration platform focused on high-performance client-side logic. Includes advanced filtering systems and Local Storage integration for persisting user preferences.",
    tech: ["React", "JavaScript", "React Widgets", "HTML5 & CSS3", "Web Storage API"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "FreshTrack SL",
    description: "A cross-platform mobile app designed to reduce Sri Lankan crop wastage. Uses linear regression and predictive analytics to forecast demand and optimize supply chains.",
    tech: ["Flutter", "Dart", "Python", "Supabase"],
    github: "#",
    live: "#",
    image: "/images/freshtracksl.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 flex items-center">
          Projects / Work
          <div className="h-[1px] bg-white/10 flex-grow ml-4 sm:ml-6"></div>
        </h3>

        <div className="flex flex-col gap-24 sm:gap-32 py-4">
        {projects.map((p) => (
          <motion.div 
            key={p.id} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[500px]"
          >
            {/* Small side info */}
            <div className="lg:col-span-2 flex flex-col justify-between py-4">
              <div className="w-full aspect-[3/4] relative hidden lg:block overflow-hidden bg-zinc-900 mb-8 border border-white/5">
                <img src={p.image} className="absolute inset-0 w-full h-full object-cover scale-150 origin-top-left opacity-30 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white/50 text-[10px] font-mono tracking-widest uppercase">Detail</div>
              </div>
              <div className="pl-4 border-l border-zinc-800">
                <p className="text-zinc-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Tech Stacks</p>
                <ul className="flex flex-col gap-2">
                  {p.tech.map((t) => {
                    const Icon = techIcons[t] ?? FaCode;
                    return (
                      <li key={t} className="flex items-center gap-2 text-zinc-300 text-xs tracking-wider">
                        <Icon className="text-zinc-300 text-[12px] shrink-0" />
                        <span>{t}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Main Title Area */}
            <div className="lg:col-span-5 flex flex-col justify-center px-4 lg:px-8">
              <h3 className="text-4xl md:text-5xl font-bold text-white uppercase leading-[1.05] tracking-tighter mb-8 break-words">
                {p.title.split(' ').map((word, idx) => <span key={idx} className="block">{word}</span>)}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-10 pr-4 lg:pr-8">
                {p.description}
              </p>
              <div className="flex gap-6 border-t border-zinc-800 pt-6">
                <a href={p.github} className="flex items-center gap-2 text-xs tracking-widest text-zinc-400 hover:text-white transition-colors uppercase"><FaGithub size={14}/> Source Code</a>
                <a href={p.live} className="flex items-center gap-2 text-xs tracking-widest text-zinc-400 hover:text-white transition-colors uppercase"><FaExternalLinkAlt size={12}/> View Live</a>
              </div>
            </div>

            {/* Large Image Area */}
            <div className="lg:col-span-5 h-[400px] lg:h-auto relative w-full overflow-hidden bg-zinc-900 border border-white/5 order-first lg:order-last">
              <div className="absolute top-12 left-12 origin-top-left rotate-90 text-[10px] tracking-[0.4em] text-white/80 uppercase z-10 mix-blend-difference hidden md:block select-none pointer-events-none">
                Modern Presentation
              </div>
              <img src={p.image} className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-[2s] ease-out" />
            </div>
          </motion.div>
        ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
