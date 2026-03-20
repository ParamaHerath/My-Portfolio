import { motion } from 'framer-motion';

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
  "Node.js", "Express", "Tailwind CSS", "PostgreSQL",
  "MongoDB", "Docker", "AWS", "Git"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-bold text-white mb-10 flex items-center">
          Technical Armoury
          <div className="h-[1px] bg-white/10 flex-grow ml-6"></div>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(14, 165, 233, 0.1)' }}
              className="px-4 py-3 rounded-lg border border-white/5 bg-white/[0.02] backdrop-blur-sm text-zinc-300 font-medium font-mono text-sm inline-flex items-center"
            >
              <span className="text-sky-400 mr-2">▹</span> {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
