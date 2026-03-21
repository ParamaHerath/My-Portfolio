import { motion } from 'framer-motion';

const experienceData = [
  {
    type: "work",
    title: "Software Engineering Intern",
    company: "Digital Platforms, Sri Lanka Telecom (SLT)",
    date: "Jun 2025 - Present",
    description: "Engineered a full-stack internal app with tokenized APIs and automated CI/CD pipelines, supporting over 100 active trainees and administrators."
  },
  {
    type: "education",
    title: "B.Sc (Hons.) in Computer Science",
    company: "University of Westminster | IIT Sri Lanka",
    date: "Sep 2023 - 2027",
    description: "Focused on Full-Stack Development, Client-Server Architectures, OOP, and Database Systems, including a collaborative Software Development Group Project."
  },
  {
    type: "education",
    title: "Pearson Edexcel International Advanced Level",
    company: "British Council Colombo",
    date: "Oct 2020 - Oct 2022",
    description: "Foundational studies in Mathematics, Physics, and Chemistry, establishing a strong analytical base for further technical development and engineering."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-white mb-10 flex items-center">
          Education & Work Experience
          <div className="h-[1px] bg-white/10 flex-grow ml-6"></div>
        </h3>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-950 text-sky-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(14,165,233,0.1)] z-10">
                {item.type === 'work' ? (
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></svg>
                ) : (
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>
                )}
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm group-hover:bg-white/[0.04] group-hover:border-white/10 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h4 className="font-bold text-lg text-white">{item.title}</h4>
                  <span className="text-xs font-mono text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full w-fit">
                    {item.date}
                  </span>
                </div>
                <div className="text-zinc-300 font-medium mb-4">{item.company}</div>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
