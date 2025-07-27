import React from 'react';
import { Layout } from '../components';

const About: React.FC = () => {
  return (
    <Layout title="About Us - ArchTech Solutions" description="Learn about ArchTech Solutions, our story, mission, and commitment to delivering innovative technology solutions.">
      <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Arch Tech Solutions was founded with a vision to bridge the gap between innovative technology 
                  and practical business solutions. We believe in creating digital experiences that not only 
                  look great but also drive real results.
                </p>
                <p className="text-gray-600">
                  Our team of experienced developers, designers, and strategists work together to deliver 
                  cutting-edge solutions that help businesses thrive in the digital landscape.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and success in an ever-evolving digital world.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Innovation-driven approach</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Client-focused solutions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Quality and excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </Layout>
  );
};

export default About;
