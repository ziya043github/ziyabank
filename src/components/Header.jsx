import React, { useState, useEffect } from 'react';
import { Search, Globe, User, Menu, X, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'az', label: 'AZ' },
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' }
  ];

  const handleLanguageChange = (code) => {
    setLanguage(code);
    setIsLangOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold flex items-center gap-2 group">
              <div className="w-8 h-8 bg-ziya-red rounded-lg flex items-center justify-center text-white font-bold shadow-lg transform group-hover:rotate-12 transition-transform">Z</div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">ZIYA BANK</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-gray-100/50 dark:bg-white/5 backdrop-blur-sm p-1 rounded-full border border-gray-200/50 dark:border-white/10">
            {[
              { key: 'header.personal', href: '#' },
              { key: 'header.business', href: '#' },
              { key: 'header.ebanking', href: '#' }
            ].map((item, idx) => (
              <a 
                key={idx}
                href={item.href} 
                className="px-6 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 hover:shadow-sm transition-all duration-200"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">
              <Search size={20} />
            </button>
            
            <button 
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
              >
                <Globe size={20} />
                <span className="text-sm font-medium uppercase">{language}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-gray-900 shadow-xl rounded-xl border border-gray-100 dark:border-gray-800 py-2 overflow-hidden animate-in fade-in zoom-in duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5 ${
                        language === lang.code 
                          ? 'text-ziya-red font-bold' 
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="#" 
              className="flex items-center gap-2 bg-ziya-red text-white px-5 py-2.5 rounded-full hover:bg-red-900 transition-all shadow-lg hover:shadow-red-900/20 transform hover:-translate-y-0.5"
            >
              <User size={18} />
              <span className="text-sm font-medium">{t('header.online')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 glass-card animate-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 dark:text-gray-200 font-medium p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg">{t('header.personal')}</a>
              <a href="#" className="text-gray-700 dark:text-gray-200 font-medium p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg">{t('header.business')}</a>
              <a href="#" className="text-gray-700 dark:text-gray-200 font-medium p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg">{t('header.ebanking')}</a>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex flex-col gap-4">
                 <div className="flex justify-between items-center bg-gray-50 dark:bg-white/5 p-2 rounded-lg">
                    <span className="text-sm text-gray-500 dark:text-gray-400 pl-2">Dil</span>
                    <div className="flex gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`px-3 py-1 rounded-md text-sm ${language === lang.code ? 'bg-white dark:bg-gray-700 shadow-sm text-ziya-red' : 'text-gray-500 dark:text-gray-400'}`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                 </div>
                 
                 <a 
                  href="#" 
                  className="flex items-center justify-center gap-2 bg-ziya-red text-white px-4 py-3 rounded-xl hover:bg-red-900 transition-colors w-full"
                >
                  <User size={18} />
                  <span>{t('header.online')}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
