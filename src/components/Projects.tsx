import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJava, FaPython, FaCode, FaHtml5, FaCss3Alt, FaWindows, FaFileSignature } from 'react-icons/fa';
import { SiDotnet, SiElectron, SiTailwindcss, SiSqlite, SiSpringboot, SiPostgresql, SiJavascript, SiDart, SiFlutter, SiSupabase } from 'react-icons/si';
import { DiMsqlServer, DiDotnet } from "react-icons/di";
import type { IconType } from 'react-icons';

const techIcons: Record<string, IconType> = {
  'WinUI 3': FaWindows,
  '.NET': SiDotnet,
  'C#': FaCode,
  'Windows App SDK': FaWindows,
  'File I/O': FaFileSignature,
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
  'SQL Server': DiMsqlServer,
  'ASP.NET Core': DiDotnet
};

const projects = [
  {
    id: 1,
    title: "Talent-Trail",
    description: "Full-stack internship management platform with role-based access, enabling supervisors and interns to track projects, teams, and intra-project progress, integrated with Google OAuth authentication and remote repository APIs.",
    tech: ["React", "Spring Boot", "PostgreSQL", "File I/O", "REST"],
    github: "#",
    live: "https://talenttrail.slt.lk",
    image: "images/talent-trail.png",
    smallImage: "images/talent-trail-sm.png"
  },
  {
    id: 2,
    title: "Context",
    description: "Whiteboard-style, native WinUI 3 desktop application for unified canvas management. Enables users to store text, images, and drawings in a single custom file format for simplified resource handling.",
    tech: ["WinUI 3", ".NET", "C#", "Windows App SDK", "File I/O"],
    github: "#",
    live: "#",
    image: "images/context.png",
    smallImage: "images/context-sm.png"
  },
  {
    id: 3,
    title: "VidStash",
    description: "Media library desktop app that organizes local files into a Netflix-style interface. Features automated filename parsing, TMDB metadata integration, and watch-status tracking.",
    tech: ["Electron", "React", "Tailwind CSS", "SQLite", "File I/O"],
    github: "#",
    live: "#",
    image: "images/vidstash.png",
    smallImage: "images/vidstash-sm.png"
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform featuring secure authentication, dynamic product catalog with search and filtering, real-time cart management, and a role-based admin dashboard for managing products, orders, and users.",
    tech: ["React", "Tailwind CSS", "Laravel", "PostgreSQL", "REST"],
    github: "#",
    live: "#",
    image: "images/ecommerce.png",
    smallImage: "images/ecommerce-sm.png"
  },
  {
    id: 5,
    title: "ZingEvents",
    description: "Full-stack event booking platform with marketplace features, featuring interactive SVG seating layouts, real-time availability updates, secure REST APIs, and concurrency-safe booking with backend validation.",
    tech: ["React", "Tailwind CSS", "ASP.NET Core", "SQL Server", "REST"],
    github: "#",
    live: "#",
    image: "images/zingevents.png",
    smallImage: "images/zingevents-sm.png"
  },
  {
    id: 6,
    title: "FreshTrack SL",
    description: "Cross-platform mobile app designed to reduce Sri Lankan crop wastage. Uses linear regression and predictive analytics to forecast demand and optimize supply chains.",
    tech: ["Flutter", "Dart", "Python", "Supabase"],
    github: "#",
    live: "#",
    image: "images/freshtracksl.png",
    smallImage: "images/freshtracksl-sm.png"
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
            className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-8 items-stretch min-h-[500px]"
          >
            {/* Small side info */}
            <div className="order-2 lg:order-1 lg:col-span-2 flex flex-row lg:flex-col justify-between gap-6 lg:gap-0 lg:py-4">
              <div className="w-1/2 lg:w-full aspect-[3/4] relative block overflow-hidden bg-zinc-900 lg:mb-8 border border-white/5">
                <img src={p.smallImage} className="w-full h-full object-cover" />
              </div>
              <div className="w-1/2 lg:w-full border-l-0 lg:border-l border-zinc-800 lg:pl-4">
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
            <div className="contents lg:flex lg:flex-col lg:justify-center lg:col-span-5 lg:px-8 lg:order-2">
              <h3 className="order-1 lg:order-none text-4xl md:text-5xl font-bold text-white uppercase leading-[1.05] tracking-tighter mb-2 lg:mb-8 break-words">
                {p.title.split(' ').map((word, idx) => <span key={idx} className="block">{word}</span>)}
              </h3>
              <p className="order-3 lg:order-none text-zinc-400 text-sm leading-relaxed my-6 lg:my-0 lg:mb-10 lg:pr-8">
                {p.description}
              </p>
              <div className="order-5 lg:order-none flex gap-6 border-t border-zinc-800 pt-6 mt-4 lg:mt-0">
                <a href={p.github} className="flex items-center gap-2 text-xs tracking-widest text-zinc-400 hover:text-white transition-colors uppercase"><FaGithub size={14}/> Source Code</a>
                <a href={p.live} className="flex items-center gap-2 text-xs tracking-widest text-zinc-400 hover:text-white transition-colors uppercase"><FaExternalLinkAlt size={12}/> View Live</a>
              </div>
            </div>

            {/* Large Image Area */}
            <div className="order-4 lg:order-3 lg:col-span-5 h-[300px] lg:h-auto relative w-full overflow-hidden bg-zinc-900 border border-white/5">
              <img src={p.image} className="w-full h-full object-cover object-left hover:scale-105 transition-transform duration-[2s] ease-out" />
            </div>
          </motion.div>
        ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
