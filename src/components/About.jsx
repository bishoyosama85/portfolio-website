import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 inline-block relative">
            {t('about.title')}
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-blue-600 rounded-full"></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mt-8">
            {t('about.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
