import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const location = useLocation();

  const blogLinks = [
    { path: '/blog', label: 'Todos os Artigos' },
    { path: '/blog/economia', label: 'Economia' },
    { path: '/blog/financas', label: 'Finanças' },
    { path: '/blog/carreira', label: 'Dicas de Carreira' },
  ];

  const mainLinks = [
    { path: '/', label: 'Início' },
    { path: '/ferramentas', label: 'Ferramentas' },
    { path: '/contato', label: 'Contato' }
  ];

  const isActive = (path) => location.pathname === path;
  const isBlogActive = location.pathname.startsWith('/blog');

  return (
    <header className="sticky top-0 z-50 glassmorphism shadow-lg bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <TrendingUp className="w-8 h-8 text-[#0066CC] group-hover:text-[#7FFF00] transition-colors" />
            <span className="text-2xl font-bold text-[#0066CC] font-['Montserrat']">
              Inicia Seu Capital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors relative ${isActive('/') ? 'text-[#0066CC]' : 'text-[#333333] hover:text-[#0066CC]'}`}
            >
              Início
              {isActive('/') && <motion.div layoutId="activeTab" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7FFF00]" />}
            </Link>

            {/* Blog Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsBlogDropdownOpen(true)}
              onMouseLeave={() => setIsBlogDropdownOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 font-medium transition-colors ${isBlogActive ? 'text-[#0066CC]' : 'text-[#333333] hover:text-[#0066CC]'}`}
              >
                Blog
                <ChevronDown className={`w-4 h-4 transition-transform ${isBlogDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isBlogDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-xl py-2 mt-2 border border-gray-100"
                  >
                    {blogLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0066CC]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              {isBlogActive && <motion.div layoutId="activeTab" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7FFF00]" />}
            </div>

            {mainLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative ${isActive(link.path) ? 'text-[#0066CC]' : 'text-[#333333] hover:text-[#0066CC]'}`}
              >
                {link.label}
                {isActive(link.path) && <motion.div layoutId="activeTab" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7FFF00]" />}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#333333] hover:text-[#0066CC]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4 border-t border-gray-100">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-medium text-[#333333]">Início</Link>
                
                <div className="flex flex-col gap-2 pl-4 border-l-2 border-gray-100">
                  <span className="text-sm font-semibold text-gray-500">Blog</span>
                  {blogLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`font-medium ${isActive(link.path) ? 'text-[#0066CC]' : 'text-gray-600'}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {mainLinks.slice(1).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium ${isActive(link.path) ? 'text-[#0066CC]' : 'text-[#333333]'}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;