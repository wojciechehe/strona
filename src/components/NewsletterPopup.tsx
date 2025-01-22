import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenNewsletterPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup here
    localStorage.setItem('hasSeenNewsletterPopup', 'true');
    setIsOpen(false);
  };

  const handleClose = () => {
    localStorage.setItem('hasSeenNewsletterPopup', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-8 animate-fade-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Zaoszczędź 5% na wszystkie usługi!
          </h2>
          <p className="text-gray-600">
            Zapisz się do newslettera i otrzymaj kod rabatowy na wszystkie usługi marketingowe.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Twój adres email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Otrzymaj 5% rabatu
          </button>
          <p className="text-xs text-gray-500 text-center">
            Zapisując się, zgadzasz się na otrzymywanie newslettera marketingowego. Możesz wypisać się w każdej chwili.
          </p>
        </form>
      </div>
    </div>
  );
}