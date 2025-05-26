import { readdirSync } from 'fs';
import path from 'path';

export interface VideoMetadata {
  id: number;
  title: string;
  filename: string;
  thumbnail: string;
  publishDate: string;
  category: string;
  link?: string;  // Optional link property
}

const videoMetadata: Record<string, VideoMetadata> = {
  'Video_1.mp4': {
    id: 1,
    title: 'Wer Traders W11',
    filename: 'Video_1.mp4',
    thumbnail: '/placeholder.svg',
    publishDate: '2024-05-20',
    category: 'Trading',
    link: 'https://drive.google.com/file/d/1HNyp6oxxiKrr0hwUHNeQNl3dgnUHNkKY/view?usp=sharing'
  },
  'Video_2.mp4': {
    id: 2,
    title: 'Wer Traders W10',
    filename: 'Video_2.mp4',
    thumbnail: '/placeholder.svg',
    publishDate: '2024-05-18',
    category: 'Trading',
    link: 'https://drive.google.com/file/d/1N0Otsw3bBuhHRghJ828B4lvqqTzvkjfZ/view?usp=sharing'
  },
  'Video_3.mp4': {
    id: 3,
    title: 'Techy Aravind R8',
    filename: 'Video_3.mp4',
    thumbnail: '/placeholder.svg',
    publishDate: '2025-05-26',
    category: 'Tech',
    link: 'https://drive.google.com/file/d/1q7DF89DR0swt2dwUSzNfQ8d_zI8NKc69/view?usp=sharing'
  }
};

export const getVideoMetadata = (filename: string): VideoMetadata | null => {
  return videoMetadata[filename] || null;
};

export const getAllVideos = (): VideoMetadata[] => {
  return Object.values(videoMetadata).sort((a, b) => b.id - a.id);
};

export const getVideosByCategory = (category: string): VideoMetadata[] => {
  if (category === 'All') {
    return getAllVideos();
  }
  return getAllVideos().filter(video => video.category === category);
};

export const searchVideos = (searchTerm: string): VideoMetadata[] => {
  const term = searchTerm.toLowerCase();
  return getAllVideos().filter(video =>
    video.title.toLowerCase().includes(term) ||
    video.category.toLowerCase().includes(term)
  );
};

export const getLatestProject = (): VideoMetadata | null => {
  const allVideos = getAllVideos();
  if (allVideos.length === 0) return null;
  
  return allVideos.reduce((latest, current) => {
    const latestDate = new Date(latest.publishDate);
    const currentDate = new Date(current.publishDate);
    return currentDate > latestDate ? current : latest;
  }, allVideos[0]);
};