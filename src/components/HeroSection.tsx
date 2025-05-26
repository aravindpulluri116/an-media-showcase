
import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { getLatestProject } from '../lib/video-utils';

const HeroSection = () => {
  const [latestProject, setLatestProject] = useState(null);

  useEffect(() => {
    const project = getLatestProject();
    setLatestProject(project);
  }, []);

const handlePlay = () => {
    if (latestProject) {
      const videoPath = `/videos/${latestProject.filename}`;
      const videoElement = document.createElement('video');
      videoElement.src = videoPath;
      videoElement.controls = true;
      videoElement.style.width = '100%';
      videoElement.style.height = 'auto';
      videoElement.style.maxHeight = '80vh';

      const modalContainer = document.createElement('div');
      modalContainer.style.position = 'fixed';
      modalContainer.style.top = '0';
      modalContainer.style.left = '0';
      modalContainer.style.width = '100%';
      modalContainer.style.height = '100%';
      modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
      modalContainer.style.display = 'flex';
      modalContainer.style.justifyContent = 'center';
      modalContainer.style.alignItems = 'center';
      modalContainer.style.zIndex = '1000';

      const closeButton = document.createElement('button');
      closeButton.innerHTML = '×';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '20px';
      closeButton.style.right = '20px';
      closeButton.style.backgroundColor = 'transparent';
      closeButton.style.border = 'none';
      closeButton.style.color = 'white';
      closeButton.style.fontSize = '32px';
      closeButton.style.cursor = 'pointer';
      closeButton.style.padding = '10px';
      closeButton.style.zIndex = '1001';
      closeButton.onclick = () => document.body.removeChild(modalContainer);

      modalContainer.onclick = (e) => {
        if (e.target === modalContainer) {
          document.body.removeChild(modalContainer);
        }
      };

      modalContainer.appendChild(closeButton);
      modalContainer.appendChild(videoElement);
      document.body.appendChild(modalContainer);

      closeButton.onmouseover = () => {
        closeButton.style.transform = 'scale(1.2)';
        closeButton.style.transition = 'transform 0.2s ease';
      };
      closeButton.onmouseout = () => {
        closeButton.style.transform = 'scale(1)';
      };

      videoElement.play();
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional Video Production by
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AN Media</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              We create compelling visual stories that captivate audiences and elevate brands through expertly crafted video content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                View Our Work
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Quote
              </button>
            </div>
          </div>
          
          {/* Featured Video Showcase */}
          <div className="relative">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={latestProject ? `/videos/${latestProject.filename}` : "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"}
                alt="Featured video"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button onClick={handlePlay} className="bg-blue-600 hover:bg-blue-700 rounded-full p-6 transition-colors">
                  <Play className="w-8 h-8 text-white fill-current" />
                </button>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 p-4 rounded-lg shadow-lg max-w-xs">
              <p className="font-semibold">Latest Project</p>
              <p className="text-sm text-gray-600">{latestProject ? latestProject.title : "Corporate Brand Video"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
