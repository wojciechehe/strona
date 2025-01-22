import React from 'react';
import VideoPreview from '../components/VideoPreview';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h1>
          <p className="text-lg text-gray-600 mb-8">Zobacz moje najlepsze realizacje</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Rozpocznij projekt
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* 9:16 Videos Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pionowe Video (9:16)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <VideoPreview key={`vertical-${i}`} />
            ))}
          </div>
        </section>

        {/* 16:9 Videos Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Poziome Video (16:9)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <VideoPreview key={`horizontal-${i}`} />
            ))}
          </div>
        </section>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
          >
            Zobacz nasze usługi
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}