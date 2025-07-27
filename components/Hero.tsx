import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Building the
              <span className="text-blue-600 block">Future of Tech</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We create innovative digital solutions that transform businesses and drive growth. 
              From web applications to mobile apps, we bring your ideas to life with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
              >
                Start Your Project
              </Link>
              <Link 
                href="/work" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-center"
              >
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                {/* Mock Browser Window */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                
                {/* Mock Code */}
                <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
                  <div className="text-green-400">// Building amazing apps</div>
                  <div className="text-blue-400">const <span className="text-yellow-400">solution</span> = {'{'}</div>
                  <div className="text-white ml-4">innovation: <span className="text-green-400">'cutting-edge'</span>,</div>
                  <div className="text-white ml-4">quality: <span className="text-green-400">'premium'</span>,</div>
                  <div className="text-white ml-4">results: <span className="text-green-400">'guaranteed'</span></div>
                  <div className="text-blue-400">{'};'}</div>
                </div>

                {/* Mock UI Elements */}
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-blue-200 rounded w-2/3"></div>
                </div>

                {/* Mock Chart */}
                <div className="flex items-end space-x-2 h-20">
                  <div className="bg-blue-500 w-4 h-8 rounded-t"></div>
                  <div className="bg-blue-400 w-4 h-12 rounded-t"></div>
                  <div className="bg-blue-600 w-4 h-16 rounded-t"></div>
                  <div className="bg-blue-500 w-4 h-10 rounded-t"></div>
                  <div className="bg-blue-400 w-4 h-14 rounded-t"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
              ⚡
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-xl animate-pulse">
              🚀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
