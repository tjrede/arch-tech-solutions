import React from 'react';
import { Layout } from '../components';

const Work: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      image: '/placeholder-project-1.jpg'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      image: '/placeholder-project-2.jpg'
    },
    {
      title: 'Healthcare Management System',
      category: 'Web Development',
      description: 'Comprehensive healthcare management system for clinics with patient records and appointment scheduling.',
      technologies: ['React', 'Express.js', 'MySQL', 'Docker'],
      image: '/placeholder-project-3.jpg'
    },
    {
      title: 'Real Estate Platform',
      category: 'Full Stack',
      description: 'Property listing platform with advanced search, virtual tours, and agent management features.',
      technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'Redis'],
      image: '/placeholder-project-4.jpg'
    }
  ];

  return (
    <Layout title="Our Work - ArchTech Solutions" description="Explore our portfolio of successful projects including e-commerce platforms, mobile apps, healthcare systems, and more.">
      <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Our Work</h1>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Take a look at some of our recent projects and see how we've helped businesses 
              achieve their digital goals.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-2">🚀</div>
                      <p className="text-sm opacity-80">Project Image</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                      View Project →
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <h2 className="text-2xl font-semibold mb-4">Have a Project in Mind?</h2>
              <p className="text-gray-600 mb-6">
                We'd love to hear about your project and discuss how we can help bring it to life.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start Your Project
              </button>
            </div>
          </div>
      </section>
    </Layout>
  );
};

export default Work;
