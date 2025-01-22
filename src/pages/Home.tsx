import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import VideoPreview from '../components/VideoPreview';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Marketing w
              <span className="text-blue-600"> Social Media</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transformuję marki poprzez strategiczny marketing w mediach społecznościowych i tworzenie angażujących treści.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Rozpocznijmy współpracę
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <VideoPreview />
        </div>
      </div>
    </div>
  );
}