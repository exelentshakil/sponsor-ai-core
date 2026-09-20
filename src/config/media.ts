/**
 * Auto-generated Media Assets from Pexels API
 * Project: sponsor-ai-core
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "38122969",
    "url": "https://images.pexels.com/photos/38122969/pexels-photo-38122969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Bright rainbow arches over a modern stadium's metal roof, creating a vivid contrast against the sky.",
    "avg_color": "#475A5E"
},
  editorialPhotos: [
    {
    "id": "6541488",
    "url": "https://images.pexels.com/photos/6541488/pexels-photo-6541488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "An indoor ice rink with empty stadium seating, perfect for events.",
    "avg_color": "#766C5E"
},
    {
    "id": "3892912",
    "url": "https://images.pexels.com/photos/3892912/pexels-photo-3892912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "A bustling crowd fills the stadium under a clear evening sky, creating a vibrant atmosphere.",
    "avg_color": "#9B9485"
},
    {
    "id": "1295484",
    "url": "https://images.pexels.com/photos/1295484/pexels-photo-1295484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Bright and airy empty stadium in Berlin with modern architecture.",
    "avg_color": "#8FADB6"
}
  ],
  ambientVideo: {
    "id": "30174900",
    "videoUrl": "https://videos.pexels.com/video-files/30174900/12939155_640_360_60fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/30174900/pexels-photo-30174900.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    "width": 640,
    "height": 360
}
};
