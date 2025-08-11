import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/Rayean52',
      color: 'hover:text-gray-800'
    },
    {
      icon: FaFacebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/abdullahrayean',
      color: 'hover:text-blue-600'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdullah-rayean-949362311/',
      color: 'hover:text-blue-700'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-base-300 to-base-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full blur-3xl animate-bounce"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Abdullah Rayean
            </h3>
            <p className="text-base-content/70 mb-6 max-w-md">
              MERN Stack Developer passionate about creating modern, scalable web applications. 
              Let's build something amazing together!
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-circle btn-outline btn-sm ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base-content/70 hover:text-primary transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-base-content/70">
                <strong>Email:</strong><br />
                <a 
                  href="mailto:rayeanabdullah@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  rayeanabdullah@gmail.com
                </a>
              </p>
              <p className="text-base-content/70">
                <strong>Phone:</strong><br />
                <a 
                  href="tel:+8801773805152"
                  className="hover:text-primary transition-colors"
                >
                  +8801773805152
                </a>
              </p>
              <p className="text-base-content/70">
                <strong>Location:</strong><br />
                Barisal, Bangladesh
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="divider my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-base-content/60 text-sm">
              © {new Date().getFullYear()} Abdullah Rayean. All rights reserved.
            </p>
            <p className="text-base-content/50 text-xs mt-1">
              Made with <FaHeart className="inline text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="btn btn-circle btn-primary btn-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <FaArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
    </footer>
  );
};

export default Footer;