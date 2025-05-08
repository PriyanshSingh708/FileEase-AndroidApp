import { Category, CloudService, FileItem } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Images',
    icon: 'image',
    color: '#FF6B6B',
    type: 'image',
  },
  {
    id: '2',
    name: 'Videos',
    icon: 'video',
    color: '#4ECDC4',
    type: 'video',
  },
  {
    id: '3',
    name: 'Audio',
    icon: 'music',
    color: '#FFD166',
    type: 'audio',
  },
  {
    id: '4',
    name: 'Documents',
    icon: 'file-text',
    color: '#6A0572',
    type: 'document',
  },
  {
    id: '5',
    name: 'Archives',
    icon: 'archive',
    color: '#F9844A',
    type: 'archive',
  },
  {
    id: '6',
    name: 'Others',
    icon: 'file',
    color: '#4A6FFF',
    type: 'other',
  },
];

export const CLOUD_SERVICES: CloudService[] = [
  {
    id: '1',
    name: 'Google Drive',
    icon: 'hard-drive',
    url: 'https://drive.google.com',
  },
  {
    id: '2',
    name: 'Dropbox',
    icon: 'droplet',
    url: 'https://www.dropbox.com',
  },
  {
    id: '3',
    name: 'OneDrive',
    icon: 'cloud',
    url: 'https://onedrive.live.com',
  },
];

export const MOCK_FILES: FileItem[] = [
  {
    id: '1',
    name: 'Vacation Photo.jpg',
    path: '/storage/emulated/0/Pictures/Vacation Photo.jpg',
    size: 1024 * 1024 * 2.5, // 2.5 MB
    type: 'image',
    isDirectory: false,
    modifiedTime: new Date(2023, 5, 15).toISOString(),
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
  {
    id: '2',
    name: 'Project Documents',
    path: '/storage/emulated/0/Documents/Project Documents',
    size: 0,
    type: 'document',
    isDirectory: true,
    modifiedTime: new Date(2023, 6, 10).toISOString(),
  },
  {
    id: '3',
    name: 'Presentation.pptx',
    path: '/storage/emulated/0/Documents/Presentation.pptx',
    size: 1024 * 1024 * 5.2, // 5.2 MB
    type: 'document',
    isDirectory: false,
    modifiedTime: new Date(2023, 7, 5).toISOString(),
  },
  {
    id: '4',
    name: 'Summer Trip.mp4',
    path: '/storage/emulated/0/Movies/Summer Trip.mp4',
    size: 1024 * 1024 * 150, // 150 MB
    type: 'video',
    isDirectory: false,
    modifiedTime: new Date(2023, 8, 20).toISOString(),
    thumbnail: 'https://images.unsplash.com/photo-1535262412227-85541e910204',
  },
  {
    id: '5',
    name: 'Favorite Song.mp3',
    path: '/storage/emulated/0/Music/Favorite Song.mp3',
    size: 1024 * 1024 * 8.7, // 8.7 MB
    type: 'audio',
    isDirectory: false,
    modifiedTime: new Date(2023, 9, 12).toISOString(),
  },
  {
    id: '6',
    name: 'Archive.zip',
    path: '/storage/emulated/0/Download/Archive.zip',
    size: 1024 * 1024 * 15.3, // 15.3 MB
    type: 'archive',
    isDirectory: false,
    modifiedTime: new Date(2023, 10, 8).toISOString(),
  },
  {
    id: '7',
    name: 'Resume.pdf',
    path: '/storage/emulated/0/Documents/Resume.pdf',
    size: 1024 * 1024 * 1.8, // 1.8 MB
    type: 'document',
    isDirectory: false,
    modifiedTime: new Date(2023, 11, 3).toISOString(),
  },
  {
    id: '8',
    name: 'Family Photo.jpg',
    path: '/storage/emulated/0/Pictures/Family Photo.jpg',
    size: 1024 * 1024 * 3.2, // 3.2 MB
    type: 'image',
    isDirectory: false,
    modifiedTime: new Date(2024, 0, 15).toISOString(),
    thumbnail: 'https://images.unsplash.com/photo-1581013793663-a9cec84c8b6f',
    isSecure: true,
  },
  {
    id: '9',
    name: 'Contract.docx',
    path: '/storage/emulated/0/Documents/Contract.docx',
    size: 1024 * 1024 * 0.5, // 0.5 MB
    type: 'document',
    isDirectory: false,
    modifiedTime: new Date(2024, 1, 20).toISOString(),
    isSecure: true,
  },
];