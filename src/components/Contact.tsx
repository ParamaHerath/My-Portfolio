import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sky-400 font-mono mb-4 text-sm">What's Next?</p>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h3>
        
        <p className="text-zinc-400 mb-10 text-lg">
          I'm currently looking for new opportunities, and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <motion.a 
          href="mailto:paramaherath@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-transparent text-sky-400 font-mono rounded-lg border border-sky-400/50 hover:bg-sky-400/10 transition-colors"
        >
          Say Hello
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
