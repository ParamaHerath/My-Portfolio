import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show navbar after scrolling down slightly (e.g., 100px)
    if (latest > 100) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: '-100%', opacity: 0 }
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-zinc-950/80 border-b border-white/5"
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tight text-white font-mono"
        >
          <span className="text-sky-400">&lt;</span>
          Developer
          <span className="text-sky-400">/&gt;</span>
        </motion.div>
        
        <ul className="flex space-x-8 text-sm font-medium">
          {['About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a href={`#${item.toLowerCase()}`} className="text-zinc-400 hover:text-white transition-colors duration-300">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
