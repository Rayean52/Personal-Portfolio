import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaGithub, 
  FaDatabase 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress, 
  SiFirebase,
  SiDaisyui
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: 'text-blue-500', level: 90 },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500', level: 85 },
        { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', level: 95 },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-600', level: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500', level: 88 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', level: 85 },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-600', level: 80 },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', level: 82 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'DaisyUI', icon: SiDaisyui, color: 'text-purple-500', level: 85 },
        { name: 'GitHub', icon: FaGithub, color: 'text-gray-800', level: 88 },
        { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400', level: 75 },
      ]
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
    <section id="skills" className="py-20 bg-base-200/50">
      <div className="container mx-auto px-4">
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
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body">
                <h3 className="card-title text-2xl mb-6 justify-center">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <div className={`text-3xl ${skill.color} flex-shrink-0`}>
                        <skill.icon />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-base-content/60">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full bg-base-300 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
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