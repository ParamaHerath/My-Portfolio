import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="about" className="min-h-[85vh] flex flex-col justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <p className="text-sky-400 font-mono mb-4">Hi, my name is</p>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          John Doe.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-zinc-400 mb-8">
          I build things for the web.
        </h2>
        
        <p className="text-lg text-zinc-400 max-w-xl leading-relaxed mb-10">
          I'm a software engineer specializing in building (and occasionally designing) 
          exceptional digital experiences. Currently, I'm focused on building accessible, 
          human-centered products at <span className="text-sky-400 font-medium">Tech Corp</span>.
        </p>

        <div className="flex items-center space-x-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/10 backdrop-blur-sm transition-all"
          >
            Check out my work
          </motion.button>
          
          <div className="flex space-x-4 text-zinc-400">
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
              <motion.a 
                key={i}
                href="#"
                whileHover={{ scale: 1.1, color: '#fff' }}
                className="text-2xl transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
