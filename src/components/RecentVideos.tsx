import React, { useMemo } from 'react';
import VideoCard from './VideoCard';
import { getAllVideos, VideoMetadata } from '../lib/video-utils';

const RecentVideos = () => {
  const recentVideos = useMemo(() => {
    return getAllVideos()
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, 3);
  }, []);

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
              filename={video.filename}
              thumbnail={video.thumbnail}
              publishDate={video.publishDate}
              category={video.category}
              isRecent={true}
              link={video.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentVideos;
