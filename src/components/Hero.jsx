import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiMail } from 'react-icons/fi';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 mb-4">
            {t('hero.greeting')}
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              Bishoy Osama
            </span>
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            {t('hero.role')}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            {t('hero.description')}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group w-full sm:w-auto justify-center">
              {t('hero.cta')}
              {isRtl ? (
                <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              ) : (
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              )}
            </a>
            <a href="#contact" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 rounded-full font-semibold transition-all shadow-sm hover:shadow-md flex items-center gap-2 w-full sm:w-auto justify-center">
              <FiMail />
              {t('hero.contact_cta')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
