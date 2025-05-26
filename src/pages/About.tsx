
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About AN Media</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AN Media is a professional video production and design company dedicated to creating compelling visual stories that captivate audiences and drive results. Founded with a passion for creativity and technical excellence, we specialize in transforming ideas into powerful visual content.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team combines artistic vision with cutting-edge technology to deliver high-quality videos, graphics, and promotional materials that help brands stand out in today's competitive marketplace.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional visual content that tells compelling stories, engages audiences, and helps our clients achieve their goals through innovative design and professional video production.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose AN Media?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Quality</h3>
                  <p className="text-gray-600">State-of-the-art equipment and expertise ensure top-tier results.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative Excellence</h3>
                  <p className="text-gray-600">Innovative approaches that make your content stand out.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Timely Delivery</h3>
                  <p className="text-gray-600">We respect deadlines and deliver projects on schedule.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Client-Focused</h3>
                  <p className="text-gray-600">Your vision is our priority, with personalized service every step of the way.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
