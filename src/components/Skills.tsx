import { motion } from 'framer-motion';
import { FaJava, FaNodeJs, FaReact, FaGitAlt, FaGithub, FaWindows, FaVuejs } from 'react-icons/fa';
import { 
  SiPython, SiJavascript, SiTypescript, SiPhp, 
  SiNextdotjs, SiExpress, SiSpringboot, SiElectron, SiFlutter, SiLaravel,
  SiMysql, SiPostgresql, SiSqlite, SiMongodb, SiPostman , SiSupabase, SiFirebase
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { VscVscode } from "react-icons/vsc";
import { DiDotnet, DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { GoCopilot } from "react-icons/go";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "C#", icon: TbBrandCSharp, color: "#239120" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" }
    ]
  },
  {
    title: "Frontend & Backend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Vue.js", icon: FaVuejs, color: "#4FC08D" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
            { name: "ASP.NET Core", icon: DiDotnet, color: "#5C2D91" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" }
    ]
  },
  {
    title: "Desktop & Mobile",
    skills: [
      { name: "Electron", icon: SiElectron, color: "#47848F" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "React Native", icon: FaReact, color: "#61DAFB" },
      { name: "WinUI 3", icon: FaWindows, color: "#0078D6" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Visual Studio", icon: DiVisualstudio, color: "#5C2D91" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Copilot", icon: GoCopilot, color: "#ffffff" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 flex items-center">
          Technical Armoury
          <div className="h-[1px] bg-white/10 flex-grow ml-4 sm:ml-6"></div>
        </h3>

        <div className="space-y-8 sm:space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h4 className="text-base sm:text-lg font-medium text-zinc-300 mb-3 sm:mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-5 sm:py-3 bg-zinc-900/50 border border-white/5 rounded-md hover:bg-slate-900 hover:border-white/10 transition-colors shadow-sm cursor-default"
                    >
                      <Icon className="text-base sm:text-xl" style={{ color: skill.color }} />
                      <span className="font-medium text-zinc-200 text-xs sm:text-sm tracking-wide">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
