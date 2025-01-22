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
              src="https://drive.google.com/file/d/1SM1U212BlzRoXsbzev2Kl8WTxeMcdjbO/view?usp=share_link"
              alt="Profil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
