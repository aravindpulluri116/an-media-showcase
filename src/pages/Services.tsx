
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Palette, FileText, Menu, Video, Play, Youtube } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Logo Design",
      description: "Professional logo design that captures your brand identity and makes a lasting impression on your audience."
    },
    {
      icon: FileText,
      title: "Posters & Flyers",
      description: "Eye-catching promotional materials designed to effectively communicate your message and attract customers."
    },
    {
      icon: Menu,
      title: "Menu Design",
      description: "Appealing menu designs for restaurants and cafes that enhance the dining experience and showcase your offerings."
    },
    {
      icon: Video,
      title: "Reels (Short-form Video Editing)",
      description: "Engaging short-form videos optimized for social media platforms to boost your online presence."
    },
    {
      icon: Play,
      title: "Promotional Videos",
      description: "Compelling promotional content that showcases your products or services and drives customer engagement."
    },
    {
      icon: Youtube,
      title: "Long YouTube Videos",
      description: "Professional editing for long-form YouTube content, including tutorials, documentaries, and educational videos."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of creative services to help your brand shine and connect with your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Let's bring your vision to life with our professional creative services.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-br from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
