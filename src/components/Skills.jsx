import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiDaisyui
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
        { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'DaisyUI', icon: SiDaisyui, color: 'text-purple-500' },
        { name: 'GitHub', icon: FaGithub, color: 'text-gray-800' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-20 bg-base-200/50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body">
                {/* Category Title */}
                <h3 className="card-title text-2xl mb-6 justify-center">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h3>

                {/* Skill Icons */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-base-200 transition-all duration-300 group"
                    >
                      <div className={`text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                        <skill.icon />
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
