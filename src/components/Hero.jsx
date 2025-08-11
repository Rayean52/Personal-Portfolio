import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';

const Hero = () => {
  const heroRef = useRef(null);

  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Rayean52', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/abdullah-rayean-949362311/', label: 'LinkedIn' },
    { icon: FaFacebook, url: 'https://www.facebook.com/abdullahrayean', label: 'Facebook' },
  ];

  return (
    <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Abdullah Rayean
              </span>
            </motion.h1>

            <motion.div 
              className="text-xl md:text-2xl lg:text-3xl mb-8 h-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typed
                strings={[
                  'MERN Stack Developer',
                  'Full Stack Developer',
                  'React.js Developer',
                  'Node.js Developer',
                  'MongoDB Expert'
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="text-base-content/80"
              />
            </motion.div>

            <motion.p 
              className="text-lg md:text-xl mb-8 text-base-content/70 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about creating dynamic web applications with modern technologies. 
              I specialize in building scalable solutions using React, Node.js, and MongoDB.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline hover:btn-primary transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button 
                onClick={scrollToNext}
                className="btn btn-primary btn-lg hover:scale-105 transition-all duration-300"
              >
                View My Work
                <FaArrowDown className="ml-2" />
              </button>
              <a 
                href="#contact"
                className="btn btn-outline btn-lg hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://i.ibb.co/3Xb0ySY/Rayean-Image.jpg"
                  alt="Abdullah Rayean"
                  className="w-full h-full object-cover object-top" 
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl"
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button 
          onClick={scrollToNext}
          className="btn btn-ghost btn-circle hover:btn-primary transition-all duration-300"
        >
          <FaArrowDown className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;