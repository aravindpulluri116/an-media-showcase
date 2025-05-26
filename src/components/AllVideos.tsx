
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import VideoCard from './VideoCard';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  publishDate: string;
  category: string;
}

const AllVideos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock data for all videos
  const allVideos: Video[] = [
    {
      id: 1,
      title: "Corporate Brand Video - Tech Startup Launch",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
      publishDate: "2024-05-20",
      category: "Corporate"
    },
    {
      id: 2,
      title: "Wedding Highlights - Sarah & John",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop",
      publishDate: "2024-05-18",
      category: "Wedding"
    },
    {
      id: 3,
      title: "Product Demo - Smart Home System",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      publishDate: "2024-05-15",
      category: "Product"
    },
    {
      id: 4,
      title: "Event Coverage - Annual Conference 2024",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      publishDate: "2024-05-10",
      category: "Event"
    },
    {
      id: 5,
      title: "Commercial Ad - Local Restaurant",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      publishDate: "2024-05-08",
      category: "Commercial"
    },
    {
      id: 6,
      title: "Documentary Short - Environmental Awareness",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
      publishDate: "2024-05-05",
      category: "Documentary"
    }
  ];

  const categories = ['All', 'Corporate', 'Wedding', 'Product', 'Event', 'Commercial', 'Documentary'];

  // Filter videos based on search term and category
  const filteredVideos = allVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">All Videos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our complete portfolio of video productions across various industries and styles.
          </p>
        </div>
        
        {/* Search and Filter Controls */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredVideos.length} of {allVideos.length} videos
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>
        
        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              publishDate={video.publishDate}
              category={video.category}
            />
          ))}
        </div>
        
        {/* No Results Message */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No videos found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllVideos;
