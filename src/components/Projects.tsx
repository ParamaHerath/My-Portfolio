import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, Node.js, and PostgreSQL. Features include real-time inventory management, Stripe integration, and an admin dashboard.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "A drag-and-drop kanban board application for team productivity. Includes real-time collaboration using WebSockets and role-based access control.",
    tech: ["React", "Express", "Socket.io", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather visualization tool that aggregates data from multiple APIs. Features interactive charts and location-based forecasting.",
    tech: ["React", "Framer Motion", "Chart.js", "Weather API"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-white mb-10 flex items-center">
          <span className="text-sky-400 font-mono text-xl mr-3">02.</span>
          Some Things I've Built
          <div className="h-[1px] bg-white/10 flex-grow ml-6"></div>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 backdrop-blur-sm hover:border-sky-500/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-sky-500/20 transition-all"></div>
              
              <div className="flex justify-between items-center mb-6 relative z-10">
                <div className="text-4xl text-sky-400 opacity-80">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="text-zinc-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                  <a href={project.live} className="text-zinc-400 hover:text-white transition-colors"><FaExternalLinkAlt size={18} /></a>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-gray-100 mb-3 relative z-10 group-hover:text-sky-300 transition-colors">{project.title}</h4>
              <p className="text-zinc-400 mb-6 text-sm leading-relaxed relative z-10">{project.description}</p>
              
              <ul className="flex flex-wrap gap-3 mt-auto relative z-10">
                {project.tech.map((tech) => (
                  <li key={tech} className="text-xs font-mono text-zinc-500">{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
