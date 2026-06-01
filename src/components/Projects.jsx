import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Redux, and Tailwind CSS. Features include cart management, product filtering, and a responsive design.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Tailwind CSS', 'Redux'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'A beautiful drag-and-drop task management tool using React and Framer Motion for smooth animations and interactions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Framer Motion', 'Context API'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Finance Dashboard',
      description: 'A responsive weather application fetching real-time data from a public API, featuring dark mode and geolocation support.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'API'],
      demoUrl: 'https://finance-dashboard-delta-gules.vercel.app',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 inline-block relative">
            {t('projects.title')}
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-blue-600 rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm [@media(hover:hover)]:hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 flex flex-col group"
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-110"
                />
                <div className="hidden [@media(hover:hover)]:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-4">
                  <a href={project.demoUrl} className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors tooltip" title={t('projects.live_demo')}>
                    <FiExternalLink className="text-xl" />
                  </a>
                  <a href={project.githubUrl} className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors tooltip" title={t('projects.github')}>
                    <FiGithub className="text-xl" />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-300 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile specific links */}
                <div className="flex [@media(hover:hover)]:hidden gap-3 mt-6">
                  <a href={project.demoUrl} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                    <FiExternalLink /> {t('projects.live_demo')}
                  </a>
                  <a href={project.githubUrl} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors">
                    <FiGithub /> {t('projects.github')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
