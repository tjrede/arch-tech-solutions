import React from 'react';
import { Layout, Hero } from '../components';

const Home: React.FC = () => {
  return (
    <Layout title="Home - ArchTech Solutions">
      <Hero />
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Welcome to Arch Tech Solutions</h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
            We provide innovative technology solutions to help your business grow and succeed in the digital age.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
