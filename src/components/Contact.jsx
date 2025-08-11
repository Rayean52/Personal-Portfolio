import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'rayeanabdullah@gmail.com',
      link: 'mailto:rayeanabdullah@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+8801773805152',
      link: 'tel:+8801773805152'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Barisal, Bangladesh',
      link: null
    }
  ];

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

  return (
    <section id="contact" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-base-content/70 mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about web development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-base-200 rounded-lg hover:bg-base-300 transition-all duration-300"
                >
                  <div className="text-2xl text-primary">
                    <info.icon />
                  </div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-base-content/70 hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base-content/70">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-circle btn-outline ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-6">Send Me a Message</h3>

                  {submitStatus === 'success' && (
                    <div className="alert alert-success mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name *</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="input input-bordered w-full focus:input-primary"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email *</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="input input-bordered w-full focus:input-primary"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Subject *</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input input-bordered w-full focus:input-primary"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Message *</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="textarea textarea-bordered focus:textarea-primary h-32 resize-none w-full"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-control mt-6">
                      <button
                        type="submit"
                        className={`btn btn-primary w-full md:w-auto ${isSubmitting ? 'loading' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            <FaPaperPlane className="mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 shadow-xl">
            <div className="card-body">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-base-content/70 mb-6">
                Let's discuss how I can help bring your ideas to life with modern web technologies.
              </p>
              <div className="card-actions justify-center">
                <a
                  href="mailto:rayeanabdullah@gmail.com"
                  className="btn btn-primary btn-lg"
                >
                  <FaEnvelope className="mr-2" />
                  Email Me Directly
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;