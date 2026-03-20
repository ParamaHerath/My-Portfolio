import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="about" className="h-screen flex flex-col justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <p className="text-sky-400 font-mono mb-4">Hi, I'm</p>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Parama Herath!
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-zinc-400 mb-8">
          I build things for the web.
        </h2>
        
        <p className="text-lg text-zinc-400 max-w-xl leading-relaxed mb-10">
          I'm a software engineer specializing in building (and occasionally designing) 
          exceptional digital experiences. Currently, I'm focused on building accessible, 
          human-centered products at <span className="text-sky-400 font-medium">Tech Corp</span>.
        </p>

        <div className="flex flex-col gap-6">
          {/* Primary and Secondary Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 bg-white text-black font-semibold rounded-lg transition-all text-sm shadow-lg shadow-white/5"
            >
              Contact Me
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 bg-transparent text-white font-medium rounded-lg border border-white/20 transition-all text-sm"
            >
              View My Work
            </motion.a>
          </div>

          {/* Utility Row: CV and Socials */}
          <div className="flex items-center gap-8 pt-2 border-t border-white/5">
            {/* CV as a Text Link */}
            <motion.a
              href="/ParamaHerath.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-bold"
            >
              <span>Download Resume</span>
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
              <div className="h-[1px] w-0 group-hover:w-full bg-white transition-all duration-300 absolute -bottom-1" />
            </motion.a>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-zinc-400">
              {[
                { Icon: FaGithub, href: "#" },
                { Icon: FaLinkedin, href: "#" }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ scale: 1.1, color: '#fff' }}
                  className="text-xl transition-colors"
                >
                  <item.Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
        <FaArrowDown className="opacity-75" />
      </motion.div>
    </section>
  );
};

export default Hero;
