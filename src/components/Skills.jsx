import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaBootstrap } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-[#7952B3]" /> },
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200 } }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 inline-block relative">
              {t('skills.title')}
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-blue-600 rounded-full"></span>
            </h2>
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors"
              >
                <div className="text-5xl mb-4">
                  {skill.icon}
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
