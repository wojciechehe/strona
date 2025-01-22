import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>kontakt@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+48 123 456 789</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Warszawa, Polska</span>
              </div>
            </div>
          </div>

          {/* Szybkie linki */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">Strona główna</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">O mnie</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Kontakt</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Zapisz się, aby otrzymywać najnowsze porady marketingowe</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Twój email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Zapisz się
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Social Media Marketing. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}