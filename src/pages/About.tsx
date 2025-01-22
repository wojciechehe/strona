import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">O mnie</h1>
            <div className="prose prose-lg text-gray-600">
              {/* Placeholder for your content */}
              <p>
                Cześć! Mam na imię Mikołaj. Zajmuję się mediami społecznościowymi, tworzę treści, edytuję filmy / rolki i tworzę prostę grafiki. Ukończyłem studia licencjackie na kierunku Social Media i Marketing oraz Magisterskie na kierunku E-Commerce i analityka internetowa. Doskonale rozumiem, że bez marketingu nie ma sprzedaży! 

                Pomogę Tobie zdefiniować grupę docelową dla twojego produsktu czy usługi oraz poprowadzę kompleksowo Twoje media społecznościowe abyś Ty mógł / mogła spokojnie zająć się swoim biznesem!

                Napisz do mnie a na pewno się dogadamy!
              </p>
            </div>
          </div>
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            {/* Placeholder for profile photo */}
            <img
              src="https://scontent-dus1-1.xx.fbcdn.net/v/t1.15752-9/472860923_1121100935909617_5093410739085822077_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Hi6cDNaKxiEQ7kNvgH7jy12&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&oh=03_Q7cD1gExwJJpRmhspWTqvPkvaXAUtHT8BWql4_uYlkRr56a1mw&oe=67B8DEFE"
              alt="Profil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
