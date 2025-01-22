import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Video, Mail, ChevronRight } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Services from './pages/Services';
import Footer from './components/Footer';
import NewsletterPopup from './components/NewsletterPopup';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Navigation */}
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Video className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">Portfolio</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">O mnie</Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Usługi</Link>
                <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</Link>
                <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
                <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Kontakt
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">O mnie</Link>
                <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Usługi</Link>
                <Link to="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Portfolio</Link>
                <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blog</Link>
                <Link to="/contact" className="block px-3 py-2 text-blue-600 font-medium">Kontakt</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <div className="pt-16 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>

        <Footer />
        <NewsletterPopup />
      </div>
    </Router>
  );
}

export default App;