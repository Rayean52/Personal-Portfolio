import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern technologies for optimal performance.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://apartment-manager-b64cb.web.app/',
      githubUrl: 'https://github.com/Rayean52',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
        { name: 'Express', icon: SiExpress, color: 'text-gray-600' }
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface for better productivity.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://statuesque-empanada-aaa179.netlify.app/',
      githubUrl: 'https://github.com/Rayean52',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400' }
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Roommates Finder',
      description: 'A platform to help people find compatible roommates with advanced filtering, messaging system, and location-based search functionality.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://roommates-finder.web.app/',
      githubUrl: 'https://github.com/Rayean52',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' }
      ],
      featured: true
    },
    {
      id: 4,
      title: 'Food Community',
      description: 'A social platform for food enthusiasts to share recipes, connect with other food lovers, and discover new culinary experiences from around the world.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://food-community-52.web.app/',
      githubUrl: 'https://github.com/Rayean52',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400' }
      ],
      featured: true
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
    <section id="projects" className="py-20 bg-base-200/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <figure className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-circle"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-circle"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-4 h-4" />
                  </motion.a>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="badge badge-primary">Featured</div>
                  </div>
                )}
              </figure>

              {/* Project Content */}
              <div className="card-body">
                <h3 className="card-title text-xl mb-2">{project.title}</h3>
                <p className="text-base-content/70 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1 bg-base-200 px-2 py-1 rounded-full text-xs"
                    >
                      <tech.icon className={`w-3 h-3 ${tech.color}`} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="card-actions justify-end">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <FaExternalLinkAlt className="w-3 h-3 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <FaGithub className="w-3 h-3 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 shadow-xl">
            <div className="card-body">
              <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
              <p className="text-base-content/70 mb-6">
                Check out my GitHub profile for more projects and contributions to the open-source community.
              </p>
              <div className="card-actions justify-center">
                <a
                  href="https://github.com/Rayean52"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <FaGithub className="w-5 h-5 mr-2" />
                  View GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;