import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaUsers } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write clean, maintainable, and scalable code following best practices and industry standards.'
    },
    {
      icon: FaLaptopCode,
      title: 'Responsive Design',
      description: 'Creating beautiful, responsive web applications that work seamlessly across all devices.'
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and performance to deliver the best user experience.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating clearly with clients and stakeholders.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me as a developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-base-content/80 leading-relaxed">
                Hello! I'm <strong className="text-primary">Abdullah Rayean</strong>, a passionate MERN Stack Developer 
                based in Barisal, Bangladesh. My journey into web development started with curiosity about how 
                websites work, and it has evolved into a deep passion for creating digital experiences that matter.
              </p>
              
              <p className="text-base-content/80 leading-relaxed">
                I specialize in building modern, scalable web applications using the MERN stack (MongoDB, Express.js, 
                React, Node.js). I love the challenge of turning complex problems into simple, beautiful, and 
                intuitive solutions.
              </p>
              
              <p className="text-base-content/80 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community. I believe in continuous learning and staying 
                updated with the latest trends in web development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="badge badge-primary badge-lg">Problem Solver</div>
              <div className="badge badge-secondary badge-lg">Team Player</div>
              <div className="badge badge-accent badge-lg">Quick Learner</div>
              <div className="badge badge-info badge-lg">Detail Oriented</div>
            </div>
          </motion.div>

          {/* Interactive Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-2xl">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Location</span>
                    <span className="text-base-content/70">Barisal, Bangladesh</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Hunting</span>
                    <span className="text-base-content/70">Next.js</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Specialization</span>
                    <span className="text-base-content/70">MERN Stack</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Availability</span>
                    <span className="text-success">Available for Projects</span>
                  </div>
                </div>
                
                <div className="divider"></div>
                
                <div className="text-center">
                  <p className="text-sm text-base-content/60 mb-4">
                    "Code is like humor. When you have to explain it, it's bad."
                  </p>
                  <p className="text-xs text-base-content/50">- Cory House</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card bg-base-200 hover:bg-base-300 transition-all duration-300 cursor-pointer"
            >
              <div className="card-body items-center text-center">
                <div className="text-4xl text-primary mb-4">
                  <feature.icon />
                </div>
                <h3 className="card-title text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-base-content/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 shadow-xl">
            <div className="card-body">
              <h3 className="text-2xl font-bold mb-4">Let's Work Together!</h3>
              <p className="text-base-content/70 mb-6">
                I'm always excited to take on new challenges and collaborate on interesting projects.
              </p>
              <div className="card-actions justify-center">
                <a href="#contact" className="btn btn-primary btn-lg">
                  Get In Touch
                </a>
                <a href="#projects" className="btn btn-outline btn-lg">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;