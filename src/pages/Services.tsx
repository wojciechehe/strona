import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Video, 
  Camera, 
  PenTool, 
  BarChart, 
  MessageCircle, 
  Megaphone,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Produkcja Video',
    description: 'Profesjonalne filmy reklamowe, relacje z eventów i content marketing.',
    price: 'od 1500 zł',
  },
  {
    icon: Camera,
    title: 'Sesje Zdjęciowe',
    description: 'Zdjęcia produktowe, lifestyle i korporacyjne dla Twojej marki.',
    price: 'od 800 zł',
  },
  {
    icon: PenTool,
    title: 'Projektowanie Graficzne',
    description: 'Identyfikacja wizualna, materiały marketingowe i social media.',
    price: 'od 500 zł',
  },
  {
    icon: BarChart,
    title: 'Analityka Social Media',
    description: 'Szczegółowe raporty i analiza skuteczności działań w social media.',
    price: 'od 600 zł',
  },
  {
    icon: MessageCircle,
    title: 'Prowadzenie Social Media',
    description: 'Kompleksowa obsługa profili w mediach społecznościowych.',
    price: 'od 1200 zł/msc',
  },
  {
    icon: Megaphone,
    title: 'Kampanie Reklamowe',
    description: 'Planowanie i realizacja kampanii w social media.',
    price: 'od 1000 zł',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nasze Usługi</h1>
          <p className="text-lg text-gray-600 mb-8">
            Kompleksowe rozwiązania dla Twojego biznesu w social media
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Darmowa Konsultacja
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Zamów
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Nie znalazłeś tego, czego szukasz?
          </h2>
          <p className="text-gray-600 mb-6">
            Skontaktuj się z nami, aby omówić spersonalizowane rozwiązanie dla Twojego biznesu.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Skontaktuj się z nami
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}