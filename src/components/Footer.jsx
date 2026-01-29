import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-black text-gray-900 dark:text-white pt-24 pb-12 border-t border-gray-100 dark:border-white/10 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-ziya-red rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">Z</div>
              <span className="text-2xl font-bold tracking-tight">ZIYA BANK</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1Cq5hCLRWb/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-ziya-blue hover:text-white dark:hover:bg-ziya-blue dark:hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/niyazoglu777" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-ziya-red hover:text-white dark:hover:bg-ziya-red dark:hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ziya-s%C9%99f%C9%99rzad%C9%99-88bb48367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8">{t('footer.about')}</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-ziya-red dark:hover:text-white transition-colors">{t('footer.management')}</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-ziya-red dark:hover:text-white transition-colors">{t('footer.career')}</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-ziya-red dark:hover:text-white transition-colors">{t('footer.reports')}</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-ziya-red dark:hover:text-white transition-colors">{t('footer.partners')}</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-ziya-red dark:hover:text-white transition-colors">{t('footer.service_network')}</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-8">{t('footer.products_title')}</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-ziya-red dark:hover:text-white transition-colors">{t('products.loans')}</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-ziya-red dark:hover:text-white transition-colors">{t('products.cards')}</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-ziya-red dark:hover:text-white transition-colors">{t('products.deposits')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-8">{t('footer.contact')}</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-ziya-red/10 flex items-center justify-center text-ziya-red group-hover:bg-ziya-red group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-xl font-bold text-gray-900 dark:text-white">000</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{t('footer.hotline')}</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-ziya-red/10 flex items-center justify-center text-ziya-red group-hover:bg-ziya-red group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <a href="mailto:info@ziyabank.az" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">info@ziyabank.az</a>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-ziya-red/10 flex items-center justify-center text-ziya-red group-hover:bg-ziya-red group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {t('footer.search_branch')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-ziya-red dark:hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-ziya-red dark:hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-ziya-red dark:hover:text-white transition-colors">{t('footer.security')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
