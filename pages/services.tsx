import React from 'react';
import { Layout } from '../components';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React/Next.js', 'Node.js Backend', 'Responsive Design', 'SEO Optimization']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: ['AWS/Azure/GCP', 'DevOps', 'CI/CD Pipelines', 'Monitoring & Analytics']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    }
  ];

  return (
    <Layout title="Our Services - ArchTech Solutions" description="Explore our comprehensive technology services including web development, mobile development, cloud solutions, and UI/UX design.">
      <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We offer comprehensive technology solutions to help your business succeed in the digital world.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-6">
                Let's discuss how we can help bring your project to life.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us Today
              </button>
            </div>
          </div>
      </section>
    </Layout>
  );
};

export default Services;
