
import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import VideoCard from './VideoCard';
import { getAllVideos, getVideosByCategory, searchVideos, VideoMetadata } from '../lib/video-utils';

const AllVideos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const videos = useMemo(() => {
    if (searchTerm) {
      return searchVideos(searchTerm);
    }
    return getVideosByCategory(selectedCategory);
  }, [searchTerm, selectedCategory]);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(getAllVideos().map(video => video.category));
    return ['All', ...Array.from(uniqueCategories)];
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" />
        </div>

        {/* Category Filter */}
        <div className="relative w-full md:w-64">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <Filter className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {videos.length} videos
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            filename={video.filename}
            thumbnail={video.thumbnail}
            publishDate={video.publishDate}
            category={video.category}
          />
        ))}
      </div>

      {/* No Results Message */}
      {videos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No videos found. Try adjusting your search or filter.
          </p>
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
  );
};

export default AllVideos;
