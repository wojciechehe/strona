import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function VideoPreview() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <Play className="h-12 w-12" />
        </div>
      ) : (
        <video
          className="w-1080 h-1920 object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smart-phone-4838-large.mp4"
        />
      )}
    </div>
  );
}