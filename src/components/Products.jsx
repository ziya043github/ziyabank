import React from 'react';
import { CreditCard, Banknote, Landmark, ArrowLeftRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProductCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all cursor-pointer group">
    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-ziya-red mb-4 group-hover:bg-ziya-red group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      icon: <CreditCard size={24} />,
      title: t('products.cards'),
      description: t('products.cards_desc')
    },
    {
      icon: <Banknote size={24} />,
      title: t('products.loans'),
      description: t('products.loans_desc')
    },
    {
      icon: <Landmark size={24} />,
      title: t('products.deposits'),
      description: t('products.deposits_desc')
    },
    {
      icon: <ArrowLeftRight size={24} />,
      title: t('products.transfers'),
      description: t('products.transfers_desc')
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">{t('products.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
