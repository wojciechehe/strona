import React from 'react';

export default function Blog() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Blog</h1>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="aspect-[21/9] bg-gray-100 rounded-lg overflow-hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
              alt="Marketing w Social Media"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meta Business Suite - Kompletny Przewodnik 2024</h2>
          <p className="text-gray-600 mb-4">
            Odkryj, jak efektywnie wykorzystać narzędzia Meta Business Suite do zarządzania swoją obecnością na Facebooku i Instagramie. 
            Poznaj najnowsze funkcje i strategie, które pomogą Ci zwiększyć zasięg i zaangażowanie.
          </p>
          <button className="text-blue-600 font-medium hover:text-blue-700">Czytaj więcej →</button>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* X (Twitter) Article */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[16/9] bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1611605698335-8b1569810432"
                alt="X Platform"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">X (Twitter) - Nowe Możliwości dla Biznesu</h3>
              <p className="text-gray-600 mb-4">
                Jak wykorzystać zmiany na platformie X do budowania marki i zwiększania sprzedaży w 2024 roku.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700">Czytaj więcej →</button>
            </div>
          </div>

          {/* Meta Article */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[16/9] bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
                alt="Meta Advertising"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reklamy na Meta - Przewodnik</h3>
              <p className="text-gray-600 mb-4">
                Kompleksowy przewodnik po reklamach na platformach Meta: Facebook, Instagram i Messenger.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700">Czytaj więcej →</button>
            </div>
          </div>

          {/* General Marketing Article */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[16/9] bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1557838923-2985c318be48"
                alt="Marketing Strategy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trendy w Social Media 2024</h3>
              <p className="text-gray-600 mb-4">
                Poznaj najnowsze trendy i strategie w marketingu social media na rok 2024.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700">Czytaj więcej →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}