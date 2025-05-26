import React from 'react';
import { Play, Calendar, Share2, Facebook, Twitter } from 'lucide-react';

interface VideoCardProps {
  id: number;
  title: string;
  filename: string;
  thumbnail: string;
  publishDate: string;
  category?: string;
  isRecent?: boolean;
  link?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  id, 
  title, 
  filename,
  thumbnail, 
  publishDate, 
  category, 
  isRecent = false,
  link 
}) => {
  const handlePlay = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  const handleShare = (platform: string) => {
    console.log(`Sharing video ${id} on ${platform}`);
    // This would implement actual sharing functionality
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 ${isRecent ? 'border-2 border-blue-500' : ''}`}>
      {/* Thumbnail with Play Button */}
      <div className="relative group cursor-pointer" onClick={handlePlay}>
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-blue-600 rounded-full p-4 hover:bg-blue-700 transition-colors">
            <Play className="w-8 h-8 text-white fill-current" />
          </div>
        </div>
        {isRecent && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">
            Recent
          </div>
        )}
        {category && (
          <div className="absolute top-2 right-2 bg-gray-800 bg-opacity-80 text-white px-2 py-1 rounded text-sm">
            {category}
          </div>
        )}
      </div>
      
      {/* Video Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          {publishDate}
        </div>
        
        {/* Social Share Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePlay}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Watch Now
          </button>
          <div className="flex space-x-2">
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
              title="Share on Facebook"
            >
              <Facebook className="w-4 h-4 text-blue-600" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
              title="Share on Twitter"
            >
              <Twitter className="w-4 h-4 text-blue-400" />
            </button>
            <button
              onClick={() => handleShare('general')}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              title="Share"
            >
              <Share2 className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
