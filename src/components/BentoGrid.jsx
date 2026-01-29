import React from 'react';
import { CreditCard, Wallet, Landmark, TrendingUp, Shield, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BentoGrid = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <CreditCard className="w-8 h-8 text-white" />,
      titleKey: 'products.card.title',
      descKey: 'products.card.desc',
      color: 'bg-gradient-to-br from-ziya-red to-red-900',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      icon: <Wallet className="w-6 h-6 text-ziya-blue" />,
      titleKey: 'products.deposit.title',
      descKey: 'products.deposit.desc',
      color: 'bg-white dark:bg-white/5',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      icon: <Landmark className="w-6 h-6 text-ziya-accent" />,
      titleKey: 'products.loan.title',
      descKey: 'products.loan.desc',
      color: 'bg-white dark:bg-white/5',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      titleKey: 'products.invest.title',
      descKey: 'products.invest.desc',
      color: 'bg-white dark:bg-white/5',
      span: 'md:col-span-1 md:row-span-2'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      titleKey: 'news.security.title',
      descKey: 'news.security.desc',
      color: 'bg-white dark:bg-white/5',
      span: 'md:col-span-2 md:row-span-1'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-orange-500" />,
      titleKey: 'news.app.title',
      descKey: 'news.app.desc',
      color: 'bg-white dark:bg-white/5',
      span: 'md:col-span-1 md:row-span-1'
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-black transition-colors duration-500" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('products.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our premium financial products designed for your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`
                ${feature.span} 
                ${feature.color} 
                rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl
                border border-gray-100 dark:border-white/10
              `}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="p-3 rounded-2xl bg-white/10 w-fit backdrop-blur-md">
                  {feature.icon}
                </div>
                
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${feature.color.includes('gradient') ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {t(feature.titleKey)}
                  </h3>
                  <p className={`text-sm ${feature.color.includes('gradient') ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                    {t(feature.descKey)}
                  </p>
                </div>
              </div>

              {/* Decorative gradient for non-gradient cards */}
              {!feature.color.includes('gradient') && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent dark:from-white/5 dark:to-transparent rounded-bl-full opacity-50 transition-opacity group-hover:opacity-100"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
