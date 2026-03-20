import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import StarBackground from './components/StarBackground';

function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-200">
      <StarBackground />
      {/* Dynamic Background */}
      <motion.div 
        className="fixed inset-0 z-0 opacity-30 blur-[100px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(14,165,233,0.3), transparent 60%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.3), transparent 50%)',
          y: backgroundY
        }}
      />
      
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-6 pb-12">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <footer className="py-8 text-center text-sm text-zinc-500 border-t border-white/5">
          <p>© {new Date().getFullYear()} Software Engineer. Built with React & Tailwind.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
