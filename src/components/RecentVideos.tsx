
import React from 'react';
import VideoCard from './VideoCard';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  publishDate: string;
  category: string;
}

const RecentVideos = () => {
  // Mock data for recent videos
  const recentVideos: Video[] = [
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
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Recent Videos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out our latest video productions showcasing our creative expertise and technical excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentVideos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              publishDate={video.publishDate}
              category={video.category}
              isRecent={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentVideos;
