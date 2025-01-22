import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Kontakt</h1>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Mail className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="text-gray-600">kontakt@example.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Phone className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Telefon</h3>
              <p className="text-gray-600">+48 123 456 789</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Lokalizacja</h3>
              <p className="text-gray-600">Warszawa, Polska</p>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Wyślij wiadomość</h2>
            <div className="space-y-6">
              <p className="text-gray-600">
                Tutaj możesz dodać formularz kontaktowy. Możesz użyć serwisu takiego jak
                Formspree, Netlify Forms, lub zaimplementować własne rozwiązanie backendowe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}