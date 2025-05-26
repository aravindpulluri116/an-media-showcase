
import { Link } from 'react-router-dom';
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import RecentVideos from '../components/RecentVideos';
import AllVideos from '../components/AllVideos';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <RecentVideos />
      <AllVideos />
      <Footer />
    </div>
  );
};

export default Index;
